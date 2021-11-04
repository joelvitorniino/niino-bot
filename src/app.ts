import  { create } from "@open-wa/wa-automate";
import { start } from './commands/commands';

create({
    sessionId: "niino-bot",
    useChrome: true,
    headless: true,
    cacheEnabled: false,
    autoRefresh: true,
    customUserAgent: "WhatsApp/2.2108.8 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
})
    .then(client => start(client))
    .catch((err) => console.error(err));