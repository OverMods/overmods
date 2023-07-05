import { Request } from "./request.js";

export class RequestRole extends Request {
    fromJson(json) {
        super.fromJson(json);
        this.role = json.role;
    }
}