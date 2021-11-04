import { Client, Message } from '@open-wa/wa-automate';
import GetMenu8CommandService from '../services/GetMenu8CommandService';

class Menu8Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu8CommandService();
        await service.execute(client, message);
    };
};

export default Menu8Controller;