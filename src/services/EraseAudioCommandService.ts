import { Client, Message } from '@open-wa/wa-automate';
import { exec } from 'shelljs';

const sleep = (ms: number) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

class EraseAudioCommandService {
    async execute(client: Client, message: Message) {
        exec(`cd /home/joel/Documents/niino-bot/public/audio/ && rm *.mp3`);
        await sleep(2000);
        await client.sendText(message.from, 'Apagado os audios!');
    };
};

export default EraseAudioCommandService;