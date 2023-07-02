import { getUploadUrl } from "../http.js";
import { relativeDate, renderMarkdown, humanFileSize } from "../utils.js";

export class Model {
    constructor(json) {
        this.fromJson(json);
    }

    convertFile(name) {
        return getUploadUrl(name);
    }
    convertFileSize(size) {
        return humanFileSize(size);
    }
    convertDate(date) {
        return relativeDate(date);
    }
    convertMarkdown(markdown) {
        return renderMarkdown(markdown);
    }

    fromJson(json) {}

    getId(id) {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }
}