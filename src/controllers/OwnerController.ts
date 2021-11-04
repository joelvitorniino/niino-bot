import { Client, Message } from '@open-wa/wa-automate';
import OwnerCommandService from '../services/OwnerCommandService';

class OwnerController {
    async execute(client: Client, message: Message) {
        const service = new OwnerCommandService();
        await service.execute(client, message);
    }
};

export default OwnerController;