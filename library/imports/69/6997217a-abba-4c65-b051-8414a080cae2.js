"use strict";
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