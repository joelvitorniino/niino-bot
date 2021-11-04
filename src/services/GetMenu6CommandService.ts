import { Client, Message } from '@open-wa/wa-automate';
import fs from 'fs';

class GetMenu6CommandService {
    async execute(client: Client, message: Message) {
        fs.readFile(`/home/joel/Documents/niino-bot/src/md/menu6.md`, 'utf-8', async (err, data) => {
            if(err) throw err;
            await client.sendText(message.from, data);
        });
    };
};

export default GetMenu6CommandService;