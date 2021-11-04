import { Client, Message } from '@open-wa/wa-automate';
import axios from 'axios';

interface IDog {
    message: string;
}

class DogCommandService {
    async execute(client: Client, message: Message) {
        const { data } = await axios.get<IDog>('https://dog.ceo/api/breeds/image/random');
        await client.sendImage(message.from, data.message, 'inu.png', '');
    }
};

export default DogCommandService;