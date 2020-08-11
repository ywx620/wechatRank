"use strict";
cc._RF.push(module, '688bdU3LRVN/5HRX+JmTaeh', 'wxRankList');
// script/comp/wxRankList.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Consts = {
    OpenDataKeys: {
        InitKey: "initKey",
        Grade: "testkey",
        LevelKey: "reachlevel",
        ScoreKey: "levelScore",
    },
    DomainAction: {
        FetchFriend: "FetchFriend",
        FetchGroup: "FetchGroup",
        FetchFriendLevel: "FetchFriendLevel",
        FetchFriendScore: "FetchFriendScore",
        HorConmpar: "HorConmpar",
        Paging: "Paging",
        Scrolling: "Scrolling",
        SumbitScore: "SumbitScore",
        ShowRank: "ShowRank" //显示排名
    },
};
window.Platform = {};
Platform.CC_WECHATGAME = cc.sys.platform === cc.sys.WECHAT_GAME; //在微信平台
// 这个换成自己的逻辑
var utils = {
    curLevel: 1,
    getScore: function (_) { return 1; }
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var wxRankList = /** @class */ (function (_super) {
    __extends(wxRankList, _super);
    function wxRankList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankRender = null; // render spr
        _this.rankListNode = null;
        _this.rankBgNode = null;
        _this.labelTitle = null;
        _this.touchLayer = null;
        // @property(Boolean)
        _this.enableScroll = true; //
        _this._timeCounter = 0;
        _this.rendInterval = 0.5; //刷新排行画布间隔s
        _this.rankTexture = null;
        _this.rankSpriteFrame = null;
        _this.closeBackRank = 0; // 关闭后操作
        return _this;
    }
    wxRankList.prototype.onLoad = function () {
        this._timeCounter = 0;
        this.rankTexture = new cc.Texture2D();
        this.rankSpriteFrame = new cc.SpriteFrame();
        this.resizeSharedCanvas(this.rankRender.node.width, this.rankRender.node.height);
    };
    wxRankList.prototype.update = function (dt) {
        this.updateRankList();
    };
    wxRankList.prototype.resizeSharedCanvas = function (width, height) {
        if (Platform.CC_WECHATGAME) {
            var sharedCanvas = window["wx"].getOpenDataContext().canvas;
            sharedCanvas.width = width;
            sharedCanvas.height = height;
            console.log(sharedCanvas);
        }
    };
    wxRankList.prototype.changeRender = function (renderNode) {
        this.rankListNode.active = true;
        this.rankBgNode.active = true;
        this.rankRender.node.width = renderNode.width;
        this.rankRender.node.height = renderNode.height;
        this.rankRender.node.position = renderNode.position;
        this.resizeSharedCanvas(renderNode.width, renderNode.height);
    };
    wxRankList.prototype.updateRankList = function () {
        if (Platform.CC_WECHATGAME) {
            if (!this.rankTexture)
                return;
            var sharedCanvas = window["wx"].getOpenDataContext().canvas;
            this.rankTexture.initWithElement(sharedCanvas);
            this.rankTexture.handleLoadedTexture();
            this.rankSpriteFrame.setTexture(this.rankTexture);
            this.rankRender.spriteFrame = this.rankSpriteFrame;
        }
    };
    wxRankList.prototype.onEnable = function () {
        this.touchLayer.active = true;
        if (this.enableScroll) {
            this.rankRender.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }
    };
    wxRankList.prototype.onDisable = function () {
        if (this.enableScroll) {
            this.rankRender.node.off(cc.Node.EventType.TOUCH_MOVE);
        }
    };
    wxRankList.prototype.onClose = function () {
        this.node.active = false;
        this.node.emit(Const.CLOSE);
    };
    wxRankList.prototype.onTouchMove = function (event) {
        var deltaY = event.getDeltaY();
        // console.log("rank touchmove:", deltaY);
        this.postMessage("Scrolling", deltaY);
    };
    //向子域发送消息
    wxRankList.prototype.postMessage = function (action, data, dataEx) {
        if (data === void 0) { data = null; }
        if (dataEx === void 0) { dataEx = null; }
        if (Platform.CC_WECHATGAME) {
            var openDataContext = window.wx.getOpenDataContext();
            openDataContext.postMessage({
                action: action,
                data: data,
                dataEx: dataEx,
            });
        }
    };
    //获取关卡得分排行
    wxRankList.prototype.showRank = function (level, gameName, isMax) {
        if (isMax === void 0) { isMax = true; }
        this.labelTitle.string = gameName + "\u6392\u884C\u699C";
        this.node.active = true;
        this.touchLayer.active = true;
        this.onEnable();
        this.changeRender(this.rankListNode);
        this.postMessage(Consts.DomainAction.ShowRank, { level: level, isMax: isMax });
    };
    //提交分数
    wxRankList.prototype.sumbitScore = function (level, score, isMax) {
        if (isMax === void 0) { isMax = true; }
        cc.log(level, score, isMax);
        if (Platform.CC_WECHATGAME) {
            this.postMessage(Consts.DomainAction.SumbitScore, { level: level, score: score, isMax: isMax });
        }
    };
    __decorate([
        property(cc.Sprite)
    ], wxRankList.prototype, "rankRender", void 0);
    __decorate([
        property(cc.Node)
    ], wxRankList.prototype, "rankListNode", void 0);
    __decorate([
        property(cc.Node)
    ], wxRankList.prototype, "rankBgNode", void 0);
    __decorate([
        property(cc.Label)
    ], wxRankList.prototype, "labelTitle", void 0);
    __decorate([
        property(cc.Node)
    ], wxRankList.prototype, "touchLayer", void 0);
    wxRankList = __decorate([
        ccclass
    ], wxRankList);
    return wxRankList;
}(cc.Component));
exports.default = wxRankList;

cc._RF.pop();