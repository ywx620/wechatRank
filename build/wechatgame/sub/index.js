let Consts = {
	OpenDataKeys: {
		ScoreKey: "ScoreKey", //提交分数与排行的key值
	},
	DomainAction: {
		Scrolling: "Scrolling",//滑动
		SumbitScore: "SumbitScore",//提交分数
		ShowRank: "ShowRank"//显示排名
	},
}
/**
 * 排行榜一页数量注意
 * 排名总高度是600，既是 PAGE_SIZE*ITEM_HEIGHT=600;
 * 如果想要更高需要更改perfab/rankList中的显示对象
 */
const PAGE_SIZE = 10;//排名行数
const ITEM_WIDTH = 478;//排名宽度
const ITEM_HEIGHT = 60;//排名单行高度
let Max_Page = 0;
const RANK_PAGE_HEIGHT = ITEM_HEIGHT * PAGE_SIZE;

/**对排行榜数据排序
 * gameDatas是从服务器中取出来的数据
 * isMax为true时是高分到低分顺序，（多数游戏都是高分在最前面）
 * isMax为false时是低到高的顺序，如最快完成游戏的时间，则花的时间最短排在最前面。（游戏类型可以是 数独，拼图，答题等等，看谁最快完成）
 * 默认是true
 * */
const dataSorterIsMax = (gameDatas,isMax=true) => {
	let data = [];
	for (let i = 0; i < gameDatas.length; i++) {
		if (gameDatas[i].KVDataList[0]) {
			data.push(gameDatas[i])
		}
	}

	for(let i=0;i<5;i++) data=data.concat(data)//用来测试行数与滑动看排行榜其它信息，用于真实游戏时请删除此行

	let newData = data.sort((a, b) => {
		let va = a.KVDataList[0] ? a.KVDataList[0].value - 0 : 0
		let vb = b.KVDataList[0] ? b.KVDataList[0].value - 0 : 0
		return vb - va;
	});
	if(isMax==false){//小的在前面
		data.reverse();
	}
	Max_Page = Math.ceil(data.length / PAGE_SIZE) - 1
	console.log(Max_Page, "Max_Page")
	return newData;
}

class RankListRenderer {
	constructor() {//构造函数初化必要变量
		this.clearFlag = false
		this.offsetY = 0;
		this.maxOffsetY = 0;
		this.gameDatas = [];
		this.drawIconCount = 0;
		this.rankCanvasList = [];
		this.init();
	}

	init() {//初始化画布
		this.sharedCanvas = wx.getSharedCanvas();
		this.sharedCtx = this.sharedCanvas.getContext('2d');
	}

	listen() {//帧听从主域发来的消息
		wx.onMessage(msg => {
			const data=msg.data;
			switch (msg.action) {
				case Consts.DomainAction.Scrolling://上下滑动
					this.clearFlag = false
					if (!this.gameDatas.length) {
						return;
					}
					const deltaY = msg.data;
					const newOffsetY = this.offsetY + deltaY;
					if (newOffsetY < 0) {
						return;
					}
					if (newOffsetY + PAGE_SIZE * ITEM_HEIGHT > this.maxOffsetY) {
						return;
					}
					this.offsetY = newOffsetY;
					this.showRanks(newOffsetY);
					break;
				case Consts.DomainAction.SumbitScore://提交分数
					this.submitScore(data.key,data.score,data.isMax);
					break;
				case Consts.DomainAction.ShowRank://显示排名
					this.clearFlag = true
					this.showFriendScoreData(data.key,data.isMax);
					break;
				default://其它类型不处理
					console.log(`未知消息类型:msg.action=${msg.action}`);
					break;
			}
		});
	}
	//根据滑动偏移绘制排行榜画布
	showRanks(offsetY) {
		this.curOffsetY = offsetY
		const sharedWidth = this.sharedCanvas.width;
		const sharedHeight = this.sharedCanvas.height;
		this.sharedCtx.clearRect(0, 0, sharedWidth, sharedHeight);
		if (this.clearFlag){
			this.clearFlag = false
			this.rankCanvasList = [];			
		}
		const pageY = offsetY % RANK_PAGE_HEIGHT;
		const pageIndex = Math.floor(offsetY / RANK_PAGE_HEIGHT);
		const isOverOnePage = pageY + sharedHeight > RANK_PAGE_HEIGHT;

		let rankCanvas = this.getCanvasByPageIndex(pageIndex);
		if (!isOverOnePage) {
			this.sharedCtx.drawImage(rankCanvas, 0, pageY, sharedWidth, sharedHeight, 0, 0, sharedWidth, sharedHeight);
		} else {
			//绘制当前页后半部分
			const partialHeight = RANK_PAGE_HEIGHT - pageY;
			this.sharedCtx.drawImage(rankCanvas, 0, pageY, sharedWidth, partialHeight, 0, 0, sharedWidth, partialHeight);

			//绘制下一页前半部分
			rankCanvas = this.getCanvasByPageIndex(pageIndex + 1);
			this.sharedCtx.drawImage(rankCanvas, 0, 0, sharedWidth, sharedHeight - partialHeight, 0, partialHeight, sharedWidth, sharedHeight - partialHeight);
		}
	}
	//获取指定页码的排行榜
	getCanvasByPageIndex(pageIndex){
		let canvas = this.rankCanvasList[pageIndex];
		if (!canvas) {
			canvas = wx.createCanvas();
			canvas.width = this.sharedCanvas.width;
			canvas.height = RANK_PAGE_HEIGHT;
			this.rankCanvasList[pageIndex] = canvas;
			const ctx = canvas.getContext('2d');
			this.drawPagedRanks(ctx, pageIndex);
		}
		return canvas;
	}
	drawPagedRanks(ctx, pageIndex) {
		for (let i = 0; i < PAGE_SIZE; i++) {
			const pageOffset = pageIndex * PAGE_SIZE;
			const data = this.gameDatas[pageOffset + i];
			if (!data) continue;
			this.drawRankItemEx(ctx, pageOffset+i+1, data, ITEM_HEIGHT * i)
		}
	}
	//绘制头像
	drawAvatar(ctx, avatarUrl, x, y, w, h, cb) {
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(x - 5, y - 5, w + 10, h + 10);

		const avatarImg = wx.createImage();
		avatarImg.src = avatarUrl;
		avatarImg.onload = () => {
			cb(avatarImg);
		};
	}
	//绘制名次名字分数头像等
	drawRankItemEx(ctx, rank, data, itemGapY) {
		const nick = data.nickname.length <= 5 ? data.nickname : data.nickname.substr(0, 4) + "...";
		const kvData = data.KVDataList[0];
		const grade = kvData ? kvData.value : 0;

		var y=(ITEM_HEIGHT+30)*0.5 + itemGapY;
		//背景颜色
		if (rank % 2 == 1) {//只有奇数排名才有背景色
			ctx.fillStyle = "#c0d0d8";
			ctx.fillRect(0, itemGapY, ITEM_WIDTH, ITEM_HEIGHT);
		}

		//名次
		ctx.fillStyle = "#000000";
		ctx.textAlign = "right";
		ctx.baseLine = "middle";
		ctx.font = "40px Helvetica";
		ctx.fillText(`${rank}`, 60, y);

		//头像
		const avatarW = ITEM_HEIGHT*0.8;
		const avatarH = ITEM_HEIGHT*0.8;
		const avatarX = 95;
		const avatarY = (ITEM_HEIGHT-avatarH)*0.5 + itemGapY;
		this.drawAvatar(ctx, data.avatarUrl, avatarX, avatarY, avatarW, avatarH, (avatarImg) => {
			ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH);
			if(this.drawIconCount>=this.gameDatas.length-1 || this.drawIconCount >=PAGE_SIZE-1){
				this.drawIconCount = 0;
				this.showRanks(this.curOffsetY)
			}else{
				this.drawIconCount++;
			}
		})

		//名字
		ctx.fillStyle = "#000000";
		ctx.textAlign = "left";
		ctx.baseLine = "middle";
		ctx.font = "30px Helvetica";
		ctx.fillText(nick, 190, y);

		//分数
		ctx.fillStyle = "#000000";
		ctx.textAlign = "left";
		ctx.baseLine = "middle";
		ctx.font = "30px Helvetica";
		ctx.fillText(`${grade}`, 350, y);
	}
	//提交得分
	submitScore(key,score,isMax=true) { 
        if (true) {
			var key=Consts.OpenDataKeys.ScoreKey+key;
			console.log(key,score,isMax);
            wx.getUserCloudStorage({
                // 以key/value形式存储
                keyList: [key],
                success: function (getres) {
					console.log('getUserCloudStorage', 'success', getres);
					if (getres.KVDataList.length != 0) {//排行榜已经有记录了
						var myScore=getres.KVDataList[0].value;
						var updateScore;
						if(isMax){//只记录大的数值
							updateScore=""+(myScore > score ? myScore: score)
						}else{//只记录小的数值
							updateScore=""+(myScore < score ? myScore: score)
						}
						wx.setUserCloudStorage({
								KVDataList: [{
									key: key,
									value: updateScore
								}],
						});
						if (isMax&&(myScore > score)) {
						return;
						}
						if (!isMax&&(myScore < score)) {
							return;
						}
					}
					// 对用户托管数据进行写数据操作
					wx.setUserCloudStorage({
							KVDataList: [{key, value:""+score}],
							success: function (res) {
								console.log('setUserCloudStorage', 'success', res)
							},
							fail: function (res) {
								console.log('setUserCloudStorage', 'fail')
							},
							complete: function (res) {
								console.log('setUserCloudStorage', 'ok')
							}
					});
                },
                fail: function (res) {
                    console.log('getUserCloudStorage', 'fail')
                },
                complete: function (res) {
                    console.log('getUserCloudStorage', 'ok')
                }
            });
        } else {
            cc.log("提交得分: " + score)
        }
    }
	//取出所有好友得分
	showFriendScoreData(key,isMax) {
		console.log(key);
		wx.getFriendCloudStorage({
			keyList: [
				Consts.OpenDataKeys.ScoreKey + key,
			],
			success: res => {
				console.log("wx.getFriendCloudStorage success", res);
				this.gameDatas = dataSorterIsMax(res.data,isMax);
				const dataLen = this.gameDatas.length;
				this.offsetY = 0;
				this.maxOffsetY = dataLen * ITEM_HEIGHT;
				if (dataLen) {
					this.showRanks(0);
				}
			},
			fail: res => {
				console.log("wx.getFriendCloudStorage fail", res);
			},
		});
	}
}
const rankList = new RankListRenderer();
rankList.listen();
