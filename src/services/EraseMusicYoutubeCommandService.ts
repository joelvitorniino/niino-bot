import { Client, Message } from '@open-wa/wa-automate';
import { exec } from 'shelljs';

const sleep = (ms: number) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

class EraseMusicYouTubeCommandService {
    async execute(client: Client, message: Message) {
        exec(`cd /home/joel/Documents/niino-bot/public/music && rm *.mp3`);
        await sleep(2000);
        await client.sendText(message.from, 'Apagado as músicas.');
    };
};

export default EraseMusicYouTubeCommandService;