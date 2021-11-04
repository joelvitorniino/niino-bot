import { Client, Message } from '@open-wa/wa-automate';
import GetMenu1CommandService from '../services/GetMenu1CommandService';

class Menu1Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu1CommandService();
        await service.execute(client, message);
    };
};

export default Menu1Controller;