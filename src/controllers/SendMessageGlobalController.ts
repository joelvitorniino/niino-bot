import { Client, Message } from '@open-wa/wa-automate';
import SendMessageGlobalCommandService from '../services/SendMessageGlobalCommandService';

class SendMessageGlobalController {
    async execute(client: Client, message: Message) {
        const service = new SendMessageGlobalCommandService();
        await service.execute(client, message);
    };
};

export default SendMessageGlobalController;