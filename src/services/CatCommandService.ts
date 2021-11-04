import { Client, Message } from '@open-wa/wa-automate';
import axios from 'axios';

class CatCommandService {
    async execute(client: Client, message: Message) {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        await client.sendImage(message.from, response.data[0].url, 'cat.png', '');
    };
};

export default CatCommandService