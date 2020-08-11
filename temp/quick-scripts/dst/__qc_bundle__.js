
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/NewScript');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/script/comp/wxRankList');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69972F6q7pMZbBRhBSggMri', 'NewScript');
// NewScript.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
        cc.find("button1").zIndex = 10;
        cc.find("button2").zIndex = 10;
        cc.find("button3").zIndex = 10;
        cc.find("button4").zIndex = 10;
        var myself = this;
        cc.loader.loadRes("prefab/rankList", function (err, prefab) {
            if (err) {
                console.log(err);
                return;
            }
            // 设置成常驻节点
            var ranklistNode = cc.instantiate(prefab);
            cc.game.addPersistRootNode(ranklistNode);
            ranklistNode.x = cc.winSize.width * 0.5;
            ranklistNode.y = cc.winSize.height * 0.5;
            myself.wxRankList = ranklistNode.getComponent("wxRankList");
        });
    };
    //从小到大更新分数
    NewClass.prototype.onBtn1 = function () {
        this.wxRankList.sumbitScore("minToMax", Math.random() * 100, false);
    };
    //从大到小更新分数
    NewClass.prototype.onBtn2 = function () {
        this.wxRankList.sumbitScore("maxToMin", Math.random() * 100, true);
    };
    //从小到大排名
    NewClass.prototype.onBtn3 = function () {
        this.wxRankList.showRank("minToMax", "游戏", false);
    };
    //从大到小排名
    NewClass.prototype.onBtn4 = function () {
        this.wxRankList.showRank("maxToMin", "游戏", true);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3U2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUEwQ0EsQ0FBQztJQXhDRyx3QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBRzlCLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBQyxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQzVDLElBQUcsR0FBRyxFQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLE9BQU87YUFDVjtZQUVELFVBQVU7WUFDVixJQUFJLFlBQVksR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDeEMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUE7WUFDckMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUE7WUFDdEMsTUFBTSxDQUFDLFVBQVUsR0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUNELFVBQVU7SUFDVix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELFVBQVU7SUFDVix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELFFBQVE7SUFDUix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0EsUUFBUTtJQUNSLHlCQUFNLEdBQU47UUFDRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUF4Q2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3eFJhbmtMaXN0IGZyb20gXCIuL3NjcmlwdC9jb21wL3d4UmFua0xpc3RcIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJidXR0b24xXCIpLnpJbmRleCA9IDEwXHJcbiAgICAgICAgY2MuZmluZChcImJ1dHRvbjJcIikuekluZGV4ID0gMTBcclxuICAgICAgICBjYy5maW5kKFwiYnV0dG9uM1wiKS56SW5kZXggPSAxMFxyXG4gICAgICAgIGNjLmZpbmQoXCJidXR0b240XCIpLnpJbmRleCA9IDEwXHJcblxyXG5cclxuICAgICAgICB2YXIgbXlzZWxmPXRoaXM7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvcmFua0xpc3RcIiwoZXJyLCBwcmVmYWIpPT57XHJcbiAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9ruaIkOW4uOmpu+iKgueCuVxyXG4gICAgICAgICAgICBsZXQgcmFua2xpc3ROb2RlOmNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHJhbmtsaXN0Tm9kZSlcclxuICAgICAgICAgICAgcmFua2xpc3ROb2RlLnggPSBjYy53aW5TaXplLndpZHRoKjAuNVxyXG4gICAgICAgICAgICByYW5rbGlzdE5vZGUueSA9IGNjLndpblNpemUuaGVpZ2h0KjAuNVxyXG4gICAgICAgICAgICBteXNlbGYud3hSYW5rTGlzdD1yYW5rbGlzdE5vZGUuZ2V0Q29tcG9uZW50KFwid3hSYW5rTGlzdFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/ku47lsI/liLDlpKfmm7TmlrDliIbmlbBcclxuICAgIG9uQnRuMSgpe1xyXG4gICAgICAgIHRoaXMud3hSYW5rTGlzdC5zdW1iaXRTY29yZShcIm1pblRvTWF4XCIsTWF0aC5yYW5kb20oKSoxMDAsZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLy/ku47lpKfliLDlsI/mm7TmlrDliIbmlbBcclxuICAgIG9uQnRuMigpe1xyXG4gICAgICAgIHRoaXMud3hSYW5rTGlzdC5zdW1iaXRTY29yZShcIm1heFRvTWluXCIsTWF0aC5yYW5kb20oKSoxMDAsdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvL+S7juWwj+WIsOWkp+aOkuWQjVxyXG4gICAgb25CdG4zKCl7XHJcbiAgICAgICAgdGhpcy53eFJhbmtMaXN0LnNob3dSYW5rKFwibWluVG9NYXhcIixcIua4uOaIj1wiLGZhbHNlKTtcclxuICAgIH1cclxuICAgICAvL+S7juWkp+WIsOWwj+aOkuWQjVxyXG4gICAgIG9uQnRuNCgpe1xyXG4gICAgICAgIHRoaXMud3hSYW5rTGlzdC5zaG93UmFuayhcIm1heFRvTWluXCIsXCLmuLjmiI9cIix0cnVlKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30b13rQlsVJxZ0BknCQ8D5W', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/comp/wxRankList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21wXFx3eFJhbmtMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLE1BQU0sR0FBRztJQUNaLFlBQVksRUFBRTtRQUNiLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxZQUFZO0tBQ3RCO0lBQ0QsWUFBWSxFQUFFO1FBQ2IsV0FBVyxFQUFFLGFBQWE7UUFDMUIsVUFBVSxFQUFFLFlBQVk7UUFDeEIsZ0JBQWdCLEVBQUUsa0JBQWtCO1FBQ3BDLGdCQUFnQixFQUFFLGtCQUFrQjtRQUNwQyxVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNWLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFdBQVcsRUFBRSxhQUFhO1FBQ2hDLFFBQVEsRUFBRSxVQUFVLENBQUEsTUFBTTtLQUMxQjtDQUNELENBQUE7QUFFRCxNQUFNLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztBQUNuQixRQUFRLENBQUMsYUFBYSxHQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFBLENBQUEsT0FBTztBQUVwRSxZQUFZO0FBQ1osSUFBSSxLQUFLLEdBQUc7SUFDUixRQUFRLEVBQUcsQ0FBQztJQUNaLFFBQVEsRUFBRyxVQUFBLENBQUMsSUFBRyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUM7Q0FDM0IsQ0FBQTtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBcUhDO1FBbEhHLGdCQUFVLEdBQVcsSUFBSSxDQUFDLENBQUMsYUFBYTtRQUV4QyxrQkFBWSxHQUFTLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFTLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFTLElBQUksQ0FBQztRQUV4QixxQkFBcUI7UUFDckIsa0JBQVksR0FBRyxJQUFJLENBQUMsQ0FBQSxFQUFFO1FBRXRCLGtCQUFZLEdBQUMsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBQyxHQUFHLENBQUMsQ0FBQSxXQUFXO1FBRTVCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLHFCQUFlLEdBQWtCLElBQUksQ0FBQztRQUN0QyxtQkFBYSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7O0lBOEY3QixDQUFDO0lBNUZHLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwRixDQUFDO0lBQ0QsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVELHVDQUFrQixHQUFsQixVQUFtQixLQUFLLEVBQUUsTUFBTTtRQUM1QixJQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUM7WUFDdEIsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFBO1lBQzNELFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1lBQzFCLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDNUI7SUFDTCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUE7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUE7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFFRCxtQ0FBYyxHQUFkO1FBQ0ksSUFBRyxRQUFRLENBQUMsYUFBYSxFQUFDO1lBQ3RCLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFBRSxPQUFPO1lBQzdCLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE1BQU0sQ0FBQTtZQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ2hGO0lBQ0wsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQ3pEO0lBQ0wsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELFNBQVM7SUFDVCxnQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFFLElBQVMsRUFBRSxNQUFXO1FBQXRCLHFCQUFBLEVBQUEsV0FBUztRQUFFLHVCQUFBLEVBQUEsYUFBVztRQUN0QyxJQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUM7WUFDdEIsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1lBQ3BELGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBQyxNQUFNO2FBQ2hCLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDViw2QkFBUSxHQUFSLFVBQVMsS0FBSyxFQUFDLFFBQVEsRUFBQyxLQUFVO1FBQVYsc0JBQUEsRUFBQSxZQUFVO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBQyxvQkFBSyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUNELE1BQU07SUFDTixnQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFVO1FBQVYsc0JBQUEsRUFBQSxZQUFVO1FBQzlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUM1RjtJQUNMLENBQUM7SUFqSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNNO0lBYlAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFIOUI7SUFBRCxpQkFBQztDQXJIRCxBQXFIQyxDQXJIdUMsRUFBRSxDQUFDLFNBQVMsR0FxSG5EO2tCQXJIb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBDb25zdHMgPSB7XHJcblx0T3BlbkRhdGFLZXlzOiB7XHJcblx0XHRJbml0S2V5OiBcImluaXRLZXlcIixcclxuXHRcdEdyYWRlOiBcInRlc3RrZXlcIixcclxuXHRcdExldmVsS2V5OiBcInJlYWNobGV2ZWxcIixcclxuXHRcdFNjb3JlS2V5OiBcImxldmVsU2NvcmVcIiwgLy8ganNvbi5zdHJpbmdcclxuXHR9LFxyXG5cdERvbWFpbkFjdGlvbjoge1xyXG5cdFx0RmV0Y2hGcmllbmQ6IFwiRmV0Y2hGcmllbmRcIixcclxuXHRcdEZldGNoR3JvdXA6IFwiRmV0Y2hHcm91cFwiLFxyXG5cdFx0RmV0Y2hGcmllbmRMZXZlbDogXCJGZXRjaEZyaWVuZExldmVsXCIsIC8v5aW95Y+L5YWz5Y2h6L+b5bqm5o6S6KGMXHJcblx0XHRGZXRjaEZyaWVuZFNjb3JlOiBcIkZldGNoRnJpZW5kU2NvcmVcIiwgLy/lpb3lj4vlhbPljaHlvpfliIbmjpLooYxcclxuXHRcdEhvckNvbm1wYXI6IFwiSG9yQ29ubXBhclwiLCAvL+aoquWQkeavlOi+gyBob3Jpem9udGFsIGNvbXBhcmlzb25cclxuXHRcdFBhZ2luZzogXCJQYWdpbmdcIixcclxuICAgICAgICBTY3JvbGxpbmc6IFwiU2Nyb2xsaW5nXCIsXHJcbiAgICAgICAgU3VtYml0U2NvcmU6IFwiU3VtYml0U2NvcmVcIiwvL+aPkOS6pOWIhuaVsFxyXG5cdFx0U2hvd1Jhbms6IFwiU2hvd1JhbmtcIi8v5pi+56S65o6S5ZCNXHJcblx0fSxcclxufVxyXG5cclxud2luZG93LlBsYXRmb3JtPXt9O1xyXG5QbGF0Zm9ybS5DQ19XRUNIQVRHQU1FPWNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FLy/lnKjlvq7kv6HlubPlj7BcclxuXHJcbi8vIOi/meS4quaNouaIkOiHquW3seeahOmAu+i+kVxyXG5sZXQgdXRpbHMgPSB7XHJcbiAgICBjdXJMZXZlbCA6IDEsXHJcbiAgICBnZXRTY29yZSA6IF89PntyZXR1cm4gMX1cclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHd4UmFua0xpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcmFua1JlbmRlcjpjYy5TcHJpdGU9bnVsbDsgLy8gcmVuZGVyIHNwclxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByYW5rTGlzdE5vZGU6Y2MuTm9kZT1udWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmFua0JnTm9kZTpjYy5Ob2RlPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxUaXRsZTpjYy5MYWJlbD1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b3VjaExheWVyOmNjLk5vZGU9bnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGVuYWJsZVNjcm9sbCA9IHRydWU7Ly9cclxuXHJcbiAgICBfdGltZUNvdW50ZXI9MDtcclxuICAgIHJlbmRJbnRlcnZhbD0wLjU7Ly/liLfmlrDmjpLooYznlLvluIPpl7TpmpRzXHJcblxyXG4gICAgcmFua1RleHR1cmU6Y2MuVGV4dHVyZTJEPW51bGw7XHJcbiAgICByYW5rU3ByaXRlRnJhbWUgOiBjYy5TcHJpdGVGcmFtZT1udWxsO1xyXG4gICAgY2xvc2VCYWNrUmFuaz0wOyAvLyDlhbPpl63lkI7mk43kvZxcclxuXHJcbiAgICBvbkxvYWQoKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLl90aW1lQ291bnRlciA9IDBcclxuICAgICAgICB0aGlzLnJhbmtUZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRoaXMucmFua1Nwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVTaGFyZWRDYW52YXModGhpcy5yYW5rUmVuZGVyLm5vZGUud2lkdGgsIHRoaXMucmFua1JlbmRlci5ub2RlLmhlaWdodClcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFua0xpc3QoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZVNoYXJlZENhbnZhcyh3aWR0aCwgaGVpZ2h0KXtcclxuICAgICAgICBpZihQbGF0Zm9ybS5DQ19XRUNIQVRHQU1FKXtcclxuICAgICAgICAgICAgbGV0IHNoYXJlZENhbnZhcyA9IHdpbmRvd1tcInd4XCJdLmdldE9wZW5EYXRhQ29udGV4dCgpLmNhbnZhc1xyXG4gICAgICAgICAgICBzaGFyZWRDYW52YXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgICAgICBzaGFyZWRDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoYXJlZENhbnZhcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUmVuZGVyKHJlbmRlck5vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgdGhpcy5yYW5rTGlzdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJhbmtCZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5rUmVuZGVyLm5vZGUud2lkdGggPSByZW5kZXJOb2RlLndpZHRoXHJcbiAgICAgICAgdGhpcy5yYW5rUmVuZGVyLm5vZGUuaGVpZ2h0ID0gcmVuZGVyTm9kZS5oZWlnaHRcclxuICAgICAgICB0aGlzLnJhbmtSZW5kZXIubm9kZS5wb3NpdGlvbiA9IHJlbmRlck5vZGUucG9zaXRpb25cclxuICAgICAgICB0aGlzLnJlc2l6ZVNoYXJlZENhbnZhcyhyZW5kZXJOb2RlLndpZHRoLCByZW5kZXJOb2RlLmhlaWdodClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSYW5rTGlzdCgpIHtcclxuICAgICAgICBpZihQbGF0Zm9ybS5DQ19XRUNIQVRHQU1FKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMucmFua1RleHR1cmUpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHNoYXJlZENhbnZhcyA9IHdpbmRvd1tcInd4XCJdLmdldE9wZW5EYXRhQ29udGV4dCgpLmNhbnZhc1xyXG4gICAgICAgICAgICB0aGlzLnJhbmtUZXh0dXJlLmluaXRXaXRoRWxlbWVudChzaGFyZWRDYW52YXMpO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmtUZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgdGhpcy5yYW5rU3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0aGlzLnJhbmtUZXh0dXJlKTtcclxuICAgICAgICAgICAgdGhpcy5yYW5rUmVuZGVyLnNwcml0ZUZyYW1lID0gdGhpcy5yYW5rU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFua1JlbmRlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5rUmVuZGVyLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KENvbnN0LkNMT1NFKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmdldERlbHRhWSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmFuayB0b3VjaG1vdmU6XCIsIGRlbHRhWSk7XHJcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZShcIlNjcm9sbGluZ1wiLCBkZWx0YVkpXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8v5ZCR5a2Q5Z+f5Y+R6YCB5raI5oGvXHJcbiAgICBwb3N0TWVzc2FnZShhY3Rpb24sIGRhdGE9bnVsbCwgZGF0YUV4PW51bGwpIHtcclxuICAgICAgICBpZihQbGF0Zm9ybS5DQ19XRUNIQVRHQU1FKXtcclxuICAgICAgICAgICAgbGV0IG9wZW5EYXRhQ29udGV4dCA9IHdpbmRvdy53eC5nZXRPcGVuRGF0YUNvbnRleHQoKVxyXG4gICAgICAgICAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YUV4OmRhdGFFeCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blhbPljaHlvpfliIbmjpLooYxcclxuICAgIHNob3dSYW5rKGxldmVsLGdhbWVOYW1lLGlzTWF4PXRydWUpe1xyXG4gICAgICAgIHRoaXMubGFiZWxUaXRsZS5zdHJpbmcgPSBnYW1lTmFtZStg5o6S6KGM5qacYFxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5vbkVuYWJsZSgpXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VSZW5kZXIodGhpcy5yYW5rTGlzdE5vZGUpICAgICAgICBcclxuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKENvbnN0cy5Eb21haW5BY3Rpb24uU2hvd1JhbmssIHtsZXZlbDpsZXZlbCxpc01heDppc01heH0pXHJcbiAgICB9XHJcbiAgICAvL+aPkOS6pOWIhuaVsFxyXG4gICAgc3VtYml0U2NvcmUobGV2ZWwsc2NvcmUsaXNNYXg9dHJ1ZSkge1xyXG4gICAgICAgIGNjLmxvZyhsZXZlbCxzY29yZSxpc01heCk7XHJcbiAgICAgICAgaWYoUGxhdGZvcm0uQ0NfV0VDSEFUR0FNRSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5TdW1iaXRTY29yZSwge2xldmVsOmxldmVsLHNjb3JlOnNjb3JlLGlzTWF4OmlzTWF4fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
