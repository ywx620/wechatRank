window.__require=function e(t,n,o){function r(a,c){if(!n[a]){if(!t[a]){var s=a.split("/");if(s=s[s.length-1],!t[s]){var d="function"==typeof __require&&__require;if(!c&&d)return d(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(e){return r(t[a][1][e]||e)},p,p.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<o.length;a++)r(o[a]);return r}({NewScript:[function(e,t,n){"use strict";cc._RF.push(t,"69972F6q7pMZbBRhBSggMri","NewScript"),Object.defineProperty(n,"__esModule",{value:!0});var o=cc._decorator,r=o.ccclass,i=(o.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.start=function(){cc.find("button1").zIndex=10,cc.find("button2").zIndex=10,cc.find("button3").zIndex=10,cc.find("button4").zIndex=10;var e=this;cc.loader.loadRes("prefab/rankList",function(t,n){if(t)console.log(t);else{var o=cc.instantiate(n);cc.game.addPersistRootNode(o),o.x=.5*cc.winSize.width,o.y=.5*cc.winSize.height,e.wxRankList=o.getComponent("wxRankList")}})},t.prototype.onBtn1=function(){this.wxRankList.sumbitScore("minToMax",100*Math.random(),!1)},t.prototype.onBtn2=function(){this.wxRankList.sumbitScore("maxToMin",100*Math.random(),!0)},t.prototype.onBtn3=function(){this.wxRankList.showRank("minToMax","\u6e38\u620f",!1)},t.prototype.onBtn4=function(){this.wxRankList.showRank("maxToMin","\u6e38\u620f",!0)},t=__decorate([r],t)}(cc.Component));n.default=i,cc._RF.pop()},{}],"use_v2.0.x_cc.Toggle_event":[function(e,t,n){"use strict";cc._RF.push(t,"30b13rQlsVJxZ0BknCQ8D5W","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}],wxRankList:[function(e,t,n){"use strict";cc._RF.push(t,"688bdU3LRVN/5HRX+JmTaeh","wxRankList"),Object.defineProperty(n,"__esModule",{value:!0});var o={FetchFriend:"FetchFriend",FetchGroup:"FetchGroup",FetchFriendLevel:"FetchFriendLevel",FetchFriendScore:"FetchFriendScore",HorConmpar:"HorConmpar",Paging:"Paging",Scrolling:"Scrolling",SumbitScore:"SumbitScore",ShowRank:"ShowRank"};window.Platform={},Platform.CC_WECHATGAME=cc.sys.platform===cc.sys.WECHAT_GAME;var r=cc._decorator,i=r.ccclass,a=r.property,c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rankRender=null,t.rankListNode=null,t.rankBgNode=null,t.labelTitle=null,t.touchLayer=null,t.enableScroll=!0,t._timeCounter=0,t.rendInterval=.5,t.rankTexture=null,t.rankSpriteFrame=null,t.closeBackRank=0,t}return __extends(t,e),t.prototype.onLoad=function(){this._timeCounter=0,this.rankTexture=new cc.Texture2D,this.rankSpriteFrame=new cc.SpriteFrame,this.resizeSharedCanvas(this.rankRender.node.width,this.rankRender.node.height)},t.prototype.update=function(e){this.updateRankList()},t.prototype.resizeSharedCanvas=function(e,t){if(Platform.CC_WECHATGAME){var n=window.wx.getOpenDataContext().canvas;n.width=e,n.height=t,console.log(n)}},t.prototype.changeRender=function(e){this.rankListNode.active=!0,this.rankBgNode.active=!0,this.rankRender.node.width=e.width,this.rankRender.node.height=e.height,this.rankRender.node.position=e.position,this.resizeSharedCanvas(e.width,e.height)},t.prototype.updateRankList=function(){if(Platform.CC_WECHATGAME){if(!this.rankTexture)return;var e=window.wx.getOpenDataContext().canvas;this.rankTexture.initWithElement(e),this.rankTexture.handleLoadedTexture(),this.rankSpriteFrame.setTexture(this.rankTexture),this.rankRender.spriteFrame=this.rankSpriteFrame}},t.prototype.onEnable=function(){this.touchLayer.active=!0,this.enableScroll&&this.rankRender.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)},t.prototype.onDisable=function(){this.enableScroll&&this.rankRender.node.off(cc.Node.EventType.TOUCH_MOVE)},t.prototype.onClose=function(){this.node.active=!1,this.node.emit(Const.CLOSE)},t.prototype.onTouchMove=function(e){var t=e.getDeltaY();this.postMessage("Scrolling",t)},t.prototype.postMessage=function(e,t,n){(void 0===t&&(t=null),void 0===n&&(n=null),Platform.CC_WECHATGAME)&&window.wx.getOpenDataContext().postMessage({action:e,data:t,dataEx:n})},t.prototype.showRank=function(e,t,n){void 0===n&&(n=!0),this.labelTitle.string=t+"\u6392\u884c\u699c",this.node.active=!0,this.touchLayer.active=!0,this.onEnable(),this.changeRender(this.rankListNode),this.postMessage(o.ShowRank,{level:e,isMax:n})},t.prototype.sumbitScore=function(e,t,n){void 0===n&&(n=!0),cc.log(e,t,n),Platform.CC_WECHATGAME&&this.postMessage(o.SumbitScore,{level:e,score:t,isMax:n})},__decorate([a(cc.Sprite)],t.prototype,"rankRender",void 0),__decorate([a(cc.Node)],t.prototype,"rankListNode",void 0),__decorate([a(cc.Node)],t.prototype,"rankBgNode",void 0),__decorate([a(cc.Label)],t.prototype,"labelTitle",void 0),__decorate([a(cc.Node)],t.prototype,"touchLayer",void 0),t=__decorate([i],t)}(cc.Component);n.default=c,cc._RF.pop()},{}]},{},["NewScript","use_v2.0.x_cc.Toggle_event","wxRankList"]);