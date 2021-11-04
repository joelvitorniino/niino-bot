import { Client, Message } from '@open-wa/wa-automate';
import UnBanCommandService from '../services/UnbanCommandService';

class UnbanController {
    async execute(client: Client, message: Message) {
        const service = new UnBanCommandService();
        await service.execute(client, message);
    };
};

export default UnbanController;