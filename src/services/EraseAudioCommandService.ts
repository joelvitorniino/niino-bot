import { Client, Message } from '@open-wa/wa-automate';
import { exec } from 'shelljs';

const sleep = (ms: number) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

class EraseAudioCommandService {
    async execute(client: Client, message: Message) {
        if(message.author === '5521969693229@c.us') {
            exec(`cd /home/joel/Documents/niino-bot/public/audio/ && rm *.mp3`);
            await sleep(2000);
            await client.sendText(message.from, 'Apagado os audios!');    
        } else {
            await client.sendText(message.from, 'Você não tem permissão para executar este comando!')
        };
    };
};

export default EraseAudioCommandService;