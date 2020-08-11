
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