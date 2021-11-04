import { Client, Message } from '@open-wa/wa-automate';
import DogCommandService from '../services/DogCommandService';

class DogController {
    async execute(client: Client, message: Message) {
        const service = new DogCommandService();
        await service.execute(client, message);
    };
};

export default DogController;