import { Client, Message } from '@open-wa/wa-automate';
import EraseAudioCommandService from '../services/EraseAudioCommandService';

class EraseAudioController {
    async execute(client: Client, message: Message) {
        const service = new EraseAudioCommandService();
        await service.execute(client, message);
    };
};

export default EraseAudioController;