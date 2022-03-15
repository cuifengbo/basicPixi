import EventEmitter from "events";
import contorller from "../contorl/index"
class commando extends EventEmitter {
    constructor() {
        super();
    }
}
let commandCenter = new commando();
export default commandCenter;