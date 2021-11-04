import { Client, Message } from '@open-wa/wa-automate';
import DetectCommandService from '../services/DetectCommandService';

class DetectController {
    async execute(client: Client, message: Message) {
        const service = new DetectCommandService();
        await service.execute(client, message);
    };
};

export default DetectController;