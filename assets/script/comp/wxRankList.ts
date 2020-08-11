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

window.Platform={};
Platform.CC_WECHATGAME=cc.sys.platform === cc.sys.WECHAT_GAME//在微信平台

const { ccclass, property } = cc._decorator;

@ccclass
export default class wxRankList extends cc.Component {

    @property(cc.Sprite)
    rankRender:cc.Sprite=null; // render spr
    @property(cc.Node)
    rankListNode:cc.Node=null;

    @property(cc.Node)
    rankBgNode:cc.Node=null;

    @property(cc.Label)
    labelTitle:cc.Label=null;
    @property(cc.Node)
    touchLayer:cc.Node=null;

    // @property(Boolean)
    enableScroll = true;//

    _timeCounter=0;
    rendInterval=0.5;//刷新排行画布间隔s

    rankTexture:cc.Texture2D=null;
    rankSpriteFrame : cc.SpriteFrame=null;
    closeBackRank=0; // 关闭后操作

    onLoad() {        
        this._timeCounter = 0
        this.rankTexture = new cc.Texture2D();
        this.rankSpriteFrame = new cc.SpriteFrame();
        this.resizeSharedCanvas(this.rankRender.node.width, this.rankRender.node.height)
    }
    update(dt) {
		this._timeCounter+=dt;
		if(this._timeCounter>this.rendInterval){
			this._timeCounter=0;
			this.updateRankList()
		}
    }

    resizeSharedCanvas(width, height){
        if(Platform.CC_WECHATGAME){
            let sharedCanvas = window["wx"].getOpenDataContext().canvas
            sharedCanvas.width = width
            sharedCanvas.height = height
            console.log(sharedCanvas)
        }
    }

    changeRender(renderNode:cc.Node){
        this.rankListNode.active = true;
        this.rankBgNode.active = true;

        this.rankRender.node.width = renderNode.width
        this.rankRender.node.height = renderNode.height
        this.rankRender.node.position = renderNode.position
        this.resizeSharedCanvas(renderNode.width, renderNode.height)
    }

    updateRankList() {
        if(Platform.CC_WECHATGAME){
            if(!this.rankTexture) return;
            let sharedCanvas = window["wx"].getOpenDataContext().canvas
            this.rankTexture.initWithElement(sharedCanvas);
            this.rankTexture.handleLoadedTexture();
            this.rankSpriteFrame.setTexture(this.rankTexture);
            this.rankRender.spriteFrame = this.rankSpriteFrame;
        }
    }

    onEnable() {
        this.touchLayer.active = true
        if (this.enableScroll) {
            this.rankRender.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        }
    }

    onDisable() {
        if (this.enableScroll) {
            this.rankRender.node.off(cc.Node.EventType.TOUCH_MOVE)
        }
    }

    onClose() {
        this.node.active = false;
        this.node.emit("close");
    }

    onTouchMove(event) {
        const deltaY = event.getDeltaY();
        this.postMessage("Scrolling", deltaY)
    }    

    //向子域发送消息
    postMessage(action,data=null) {
        if(Platform.CC_WECHATGAME){
            let openDataContext = window.wx.getOpenDataContext()
            openDataContext.postMessage({
                action: action,
                data: data,
                dataEx:dataEx,
            })
        }
    }

    //获取关卡得分排行
    showRank(key,gameName,isMax=true){
        this.labelTitle.string = gameName+`排行榜`
        this.node.active = true;
        this.touchLayer.active = true
        this.onEnable()
        this.changeRender(this.rankListNode)        
        this.postMessage(Consts.DomainAction.ShowRank, {key:key,isMax:isMax})
    }
    //提交分数
    sumbitScore(key,score,isMax=true) {
        cc.log(key,score,isMax);
        if(Platform.CC_WECHATGAME){
            this.postMessage(Consts.DomainAction.SumbitScore, {key:key,score:score,isMax:isMax});
        }
    }
}
