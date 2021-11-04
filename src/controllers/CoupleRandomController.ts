import { Client, Message } from '@open-wa/wa-automate';
import CoupleRandomCommandService from '../services/CoupleRandomCommandService';

class CoupleRandomController {
    async execute(client: Client, message: Message) {
        const service = new CoupleRandomCommandService();
        await service.execute(client, message);
    };
};

export default CoupleRandomController;