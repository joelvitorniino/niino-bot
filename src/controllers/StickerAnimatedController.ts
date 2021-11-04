import { Client, Message } from '@open-wa/wa-automate';
import StickerAnimatedService from '../services/StickerAnimatedService';

class StickerAnimatedController {
    async execute(client: Client, message: Message) {
        const service = new StickerAnimatedService();
        await service.execute(client, message);
    };
};

export default StickerAnimatedController;