import { Client, Message } from '@open-wa/wa-automate';
import GetMenu6CommandService from '../services/GetMenu6CommandService';

class Menu6Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu6CommandService();
        await service.execute(client, message);
    };
};

export default Menu6Controller;