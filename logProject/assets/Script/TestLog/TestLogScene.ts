
import { _decorator, Component, Node } from 'cc';
import { LogUtility } from '../LogUtility';
const { ccclass, property } = _decorator;
 
@ccclass('TestLogScene')
export class TestLogScene extends Component {
   
    public hehe() : void{
        LogUtility.log("hehe hehe hehe");
    }
}


