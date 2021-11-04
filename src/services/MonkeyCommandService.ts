import { Client, Message } from '@open-wa/wa-automate';
import axios from 'axios';

interface IMonkey {
    monkey: string;
};

class MonkeyCommandService {
    async execute(client: Client, message: Message) {
        const { data } = await axios.get<IMonkey>("https://api-monkey-cute01.herokuapp.com/api/v1/monkey");
        await client.sendImage(message.from, data.monkey, 'monkey.png', '');
    };
};

export default MonkeyCommandService;