import { Client, Message } from '@open-wa/wa-automate';
import GetMenu3CommandService from '../services/GetMenu3CommandService';

class Menu3Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu3CommandService();
        await service.execute(client, message);
    };
};

export default Menu3Controller;