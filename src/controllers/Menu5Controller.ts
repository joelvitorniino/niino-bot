import { Client, Message } from '@open-wa/wa-automate';
import GetMenu5CommandService from '../services/GetMenu5CommandService';

class Menu5Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu5CommandService();
        await service.execute(client, message);
    };
};

export default Menu5Controller;