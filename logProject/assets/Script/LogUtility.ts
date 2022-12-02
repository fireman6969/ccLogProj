
import { _decorator, Component, Node, log } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('LogUtility')
export class LogUtility {
 
    public static log(str : string) : void{
        log(str);
    }

    public static logWarning(str : string) : void{
        log("Warning: " + str);
    }
}
