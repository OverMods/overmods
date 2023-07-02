import { Model } from "./model.js";

export class Game extends Model {
    fromJson(json) {
        this.setId(json.id);
        this.title = json.title;
        this.shortTitle = json.title.replace(/[:\s]/g, '').length > 13
            ? json.title.substring(0,13) + "..."
            : json.title;
        this.shortName = json.shortName;
        this.logo = this.convertFile(json.logo);
    }
}