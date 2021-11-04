import { Client, Message } from '@open-wa/wa-automate';
import GetMenu4CommandService from '../services/GetMenu4CommandService';

class Menu4Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu4CommandService();
        await service.execute(client, message);
    };
};

export default Menu4Controller;