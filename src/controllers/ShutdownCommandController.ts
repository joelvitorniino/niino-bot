import { Client, Message } from '@open-wa/wa-automate';
import ShutdownCommandService from '../services/ShutdownCommandService';

class ShutdownCommandController {
    async execute(client: Client, message: Message) {
        const service = new ShutdownCommandService();
        await service.execute(client, message);
    };
};

export default ShutdownCommandController;