import { Client, Message } from '@open-wa/wa-automate';
import YoutubeCommandService from '../services/YoutubeCommandService';

class YoutubeController {
    async execute(client: Client, message: Message) {
        const service = new YoutubeCommandService();
        await service.execute(client, message);
    };
};

export default YoutubeController;