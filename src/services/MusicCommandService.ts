import { exec } from 'shelljs';
import { Client, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';
import axios from 'axios';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

interface IMusic {
    links: [
        {
            
        }
    ]
}  

class MusicCommandService {
    async execute(client: Client, message: Message) {
        try {
            const body = String(message.body).toLowerCase();
            const bodySlice = commandSlice(body, 4);
            const response = await axios.get<IMusic>(`https://gvcapi.herokuapp.com/search_video?q=${bodySlice}`);
            exec(`youtube-dl --output "$HOME/Documents/niino-bot/public/music/${message.t}.%(ext)s" -x --audio-format mp3 --no-playlist '${response.data.links[0]}'`);
    
            await sleep(8000);
            await client.sendAudio(message.from, `/home/joel/Documents/niino-bot/public/music/${message.t}.mp3`, false || null);    
        } catch {
            await client.sendText(message.from, 'Olá aconteceu algo de errado, tente mandar outra música. ou com o nome parecido');
        }
    };
};

export default MusicCommandService;