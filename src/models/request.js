import { Model } from "./model.js";

export class Request extends Model {
    fromJson(json) {
        if (json.id) {
            this.setId(json.id);
        }
        this.requestedBy = json.requestedBy;
        this.requestedAt = this.convertDate(json.requestedAt);
        this.requestText = json.requestText;
        if (json.consideredBy) {
            this.consideredBy = json.consideredBy;
        }
        if (json.consideredAt) {
            this.consideredAt = this.convertDate(json.consideredAt);
        }
        this.status = json.status;
    }
}