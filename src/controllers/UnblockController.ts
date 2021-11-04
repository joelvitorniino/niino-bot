import { Client, Message } from '@open-wa/wa-automate';
import UnblockCommandService from '../services/UnblockCommandService';

class UnblockController {
    async execute(client: Client, message: Message) {
        const service = new UnblockCommandService();
        await service.execute(client, message);
    };
};

export default UnblockController;