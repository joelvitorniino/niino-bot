import { Client, Message } from '@open-wa/wa-automate';
import GayMetterCommandService from '../services/GayMetterCommandService';

class GayMetterController {
    async execute(client: Client, message: Message) {
        const service = new GayMetterCommandService();
        await service.execute(client, message);
    };
};

export default GayMetterController;