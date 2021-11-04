import { Client, Message } from '@open-wa/wa-automate';
import axios from 'axios';

class InuCommandService {
    async execute(client: Client, message: Message) {
        const response = await axios.get('https://shibe.online/api/shibes?count=1');
        await client.sendImage(message.from, response.data[0], 'inu.png', '');
    };
};

export default InuCommandService;