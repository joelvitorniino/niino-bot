import { Client, Message } from '@open-wa/wa-automate';
import fs from 'fs';

class MenuCommandService {
    async execute(client: Client, message: Message) {
        fs.readFile(
          `/home/mateus/Documents/Projects/niino-bot/src/md/commands.md`,
          "utf-8",
          async (err, data) => {
            if (err) throw err;
            await client.sendText(message.from, data);
          }
        );
    };
};

export default MenuCommandService;