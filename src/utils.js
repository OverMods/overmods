import dayjs from "dayjs";
import customFormatParse from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { marked } from "marked";

dayjs.extend(customFormatParse);
dayjs.extend(relativeTime);

export function relativeDate(date) {
    return dayjs(date, "YY-MM-DD HH:mm:ss").fromNow();
}

marked.use({
    breaks: true
});

export function renderMarkdown(markdown) {
    return marked.parse(markdown);
}