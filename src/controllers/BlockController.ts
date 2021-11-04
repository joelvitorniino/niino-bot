import { Client, Message } from '@open-wa/wa-automate';
import BlockCommandService from '../services/BlockCommandService';

class BlockController {
    async execute(client: Client, message: Message) {
        const service = new BlockCommandService();
        await service.execute(client, message);
    };
};  

export default BlockController;