import { Model } from "./model.js";

export class User extends Model {
    fromJson(json) {
        this.setId(json.id);
        this.username = json.username;
        this.email = json.email;
        this.color = json.color;
        this.avatar = json.avatar ? this.convertFile(json.avatar) : json.avatar;
        this.registeredAt = json.registeredAt ? this.convertDate(json.registeredAt) : json.registeredAt;
        this.role = json.role;
        this.siteRating = json.siteRating;
        this.updatedAt = json.updatedAt ? this.convertDate(json.updatedAt) : json.updatedAt;
        this.passwordChanged = json.passwordChanged ? this.convertDate(json.passwordChanged) : json.passwordChanged;
    }
}