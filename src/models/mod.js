import { Model } from "./model.js";

export class ModScreenshot extends Model {
    fromJson(json) {
        if (json.id) {
            this.setId(json.id);
        }
        this.mod = json.mod;
        this.screenshot = this.convertFile(json.screenshot);
        this.title = json.title;
        this.description = json.description;
    }
}

export class ModComment extends Model {
    fromJson(json) {
        if (json.id) {
            this.setId(json.id);
        }
        this.mod = json.mod;
        this.user = json.user;
        if (json.commentedAt) {
            this.commentedAt = this.convertDate(json.commentedAt);
        }
        this.comment = json.comment;
    }
}

export class ModRating extends Model {
    fromJson(json) {
        this.mod = json.mod;
        this.user = json.user;
        this.rating = json.rating;
    }
}

export class Mod extends Model {
    fromJson(json) {
        if (json.id) {
            this.setId(json.id);
        }
        this.game = json.game;
        this.title = json.title;
        if (json.logo) {
            this.logo = this.convertFile(json.logo);
        }
        this.author = json.author;
        this.authorTitle = json.authorTitle;
        this.rating = json.rating;
        this.uploadedAt = this.convertDate(json.uploadedAt);
        this.description = json.description;
        if (json.description) {
            this.descriptionHtml = this.convertMarkdown(json.description);
        }
        this.gameVersion = json.gameVersion;
        this.modVersion = json.modVersion;
        this.instruction = json.instruction;
        if (json.instruction) {
            this.instructionHtml = this.convertMarkdown(json.instruction);
        }
        this.downloaded = json.downloaded;
        this.file = json.file ? this.convertFile(json.file) : json.file;
        this.fileSize = json.fileSize ? this.convertFileSize(json.fileSize) : null;
    }
}