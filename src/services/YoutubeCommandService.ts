import { Client, Message } from '@open-wa/wa-automate';
import axios from 'axios';
import { commandSlice } from '../commands/commands';

interface IYoutube {
    links: [
        {

        }
    ];
};

class YoutubeCommandService {
    async execute(client: Client, message: Message) {
        const body = String(message.body).toLowerCase();
        const bodySlice = commandSlice(body, 8);
        const youtubeResponse = await axios.get<IYoutube>(`https://gvcapi.herokuapp.com/search_video?q=${bodySlice}`);
        client.sendYoutubeLink(message.from, `${youtubeResponse.data.links[0]}`);
    };
};

export default YoutubeCommandService;