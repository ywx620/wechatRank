import wxRankList from "./script/comp/wxRankList";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {
        cc.find("button1").zIndex = 10
        cc.find("button2").zIndex = 10
        cc.find("button3").zIndex = 10
        cc.find("button4").zIndex = 10


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
        
    }
    //从小到大提交分数
    onBtn1(){
        this.wxRankList.sumbitScore("minToMax",Math.random()*100,false);
    }
    //从大到小提交分数
    onBtn2(){
        this.wxRankList.sumbitScore("maxToMin",Math.random()*100,true);
    }
    //从小到大排名
    onBtn3(){
        this.wxRankList.showRank("minToMax","游戏",false);
    }
     //从大到小排名
     onBtn4(){
        this.wxRankList.showRank("maxToMin","游戏",true);
    }
    // update (dt) {}
}
