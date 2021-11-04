import { Client, Message } from '@open-wa/wa-automate';
import InuCommandService from '../services/InuCommandService';

class InuController {
    async execute(client: Client, message: Message) {
        const service = new InuCommandService();
        await service.execute(client, message);
    };
};

export default InuController;