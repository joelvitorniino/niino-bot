import { Client, Message } from '@open-wa/wa-automate';
import GetMenu7CommandService from '../services/GetMenu7CommandService';

class Menu7Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu7CommandService();
        await service.execute(client, message);
    };
};

export default Menu7Controller;