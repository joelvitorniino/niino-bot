import { Client, Message } from '@open-wa/wa-automate';
import BanCommandService from '../services/BanCommandService';

class BanController {
    async execute(client: Client, message: Message) {
        const service = new BanCommandService();
        await service.execute(client, message);
    };
};

export default BanController;