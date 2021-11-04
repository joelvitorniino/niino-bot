import { Client, Message } from '@open-wa/wa-automate';
import StickerfromImageCommandService from '../services/StickerfromImageCommandService';

class StickerfromImageController {
    async execute(client: Client, message: Message) {
        const service = new StickerfromImageCommandService();
        await service.execute(client, message);
    };
};

export default StickerfromImageController;