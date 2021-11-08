import { Client, Message } from '@open-wa/wa-automate';
import DisclosureCommandService from '../services/DisclosureCommandService';

class DisclosureController {
    async execute(client: Client, message: Message) {
        const service = new DisclosureCommandService();
        await service.execute(client, message);
    };
};

export default DisclosureController;