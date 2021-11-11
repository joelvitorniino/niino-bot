import { Client, Message } from '@open-wa/wa-automate';
import MeterofDickCommandService from '../services/MeterofDickCommandService';

class MeterofDickController {
    async execute(client: Client, message: Message) {
        const service = new MeterofDickCommandService();
        await service.execute(client, message);
    };
};

export default MeterofDickController;