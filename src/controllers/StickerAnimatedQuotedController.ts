import { Client, Message } from '@open-wa/wa-automate';
import StickerAnimatedQuotedCommandService from '../services/StickerAnimatedQuotedCommandService';

class StickerAnimatedQuotedController {
    async execute(client: Client, message: Message) {
        const service = new StickerAnimatedQuotedCommandService();
        await service.execute(client, message);
    };
}; 

export default StickerAnimatedQuotedController;