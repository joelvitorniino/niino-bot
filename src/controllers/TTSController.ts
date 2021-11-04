import { Client, Message } from '@open-wa/wa-automate';
import TTSCommandService from '../services/TTSCommandService';

class TTSController {
    async execute(client: Client, message: Message) {
        const service = new TTSCommandService();
        await service.execute(client, message);
    };
};

export default TTSController;