import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customFormatParse from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { marked } from "marked";

dayjs.extend(utc);
dayjs.extend(customFormatParse);
dayjs.extend(relativeTime);

export function relativeDate(date) {
    return dayjs.utc(date, "YY-MM-DD HH:mm:ss").fromNow();
}

marked.use({
    breaks: true
});

export function renderMarkdown(markdown) {
    return marked.parse(markdown);
}

export function humanFileSize(bytes, si=false, dp=1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


    return bytes.toFixed(dp) + ' ' + units[u];
}
