纯JS的微信小游戏排行榜

如果使用游戏引擎生成的子域大小在500K左右，对于微信小游戏来说还是太大了。
而使用这个做排行榜子域大于才9K。相当友好。

原版发表在：https://forum.cocos.org/t/demo-api/64299

此版本是在原来版本上进行精减只留一个好友得分排名。
原版中每次提交分数都会把上一次分数覆盖，没有做任何决断
此版本在提交分数前有判断是否比上一次得分好。只选择最好的一次分数上传。
此版本对排行榜数据排序有两种方式，默认是从高分到低分
也可选择从低到高的顺序，如最快完成游戏的时间，则花的时间最短排在最前面。（游戏类型可以是 数独，拼图，答题等等，看谁最快完成）

使用方式
首先加载这个排行榜的节点并设置成常驻节点

var myself=this;
cc.loader.loadRes("prefab/rankList",(err, prefab)=>{
	if(err){
		console.log(err)
		return;
	}
	// 设置成常驻节点
	let ranklistNode:cc.Node = cc.instantiate(prefab)
	cc.game.addPersistRootNode(ranklistNode)
	ranklistNode.x = cc.winSize.width*0.5
	ranklistNode.y = cc.winSize.height*0.5
	myself.wxRankList=ranklistNode.getComponent("wxRankList");
})

//每次随机上传一个分数，只有比上次高的分数才会更新于到排行榜上
this.wxRankList.sumbitScore("maxToMin",Math.random()*100,true);
//显示排行榜
this.wxRankList.showRank("maxToMin","游戏",true);

默认是一页排6行。这个可以修改index.js中的值来改变

/**
 * 排行榜一页数量注意
 * 排名总高度是600，既是 PAGE_SIZE*ITEM_HEIGHT=600;
 * 如果想要更高需要更改perfab/rankList中的显示对象
 */
const PAGE_SIZE = 6;//排名行数
const ITEM_WIDTH = 478;//排名宽度
const ITEM_HEIGHT = 100;//排名单行高度




