import { Client, Message } from '@open-wa/wa-automate';
import CatCommandService from '../services/CatCommandService';

class CatController {
    async execute(client: Client, message: Message) {
        const service = new CatCommandService();
        await service.execute(client, message);
    }
};

export default CatController;