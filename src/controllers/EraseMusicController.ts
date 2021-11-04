import { Client, Message } from '@open-wa/wa-automate';
import EraseMusicYoutubeCommandService from '../services/EraseMusicYoutubeCommandService';

class EraseMusicController {
    async execute(client: Client, message: Message) {
        const service = new EraseMusicYoutubeCommandService();
        await service.execute(client, message);
    };
};

export default EraseMusicController;