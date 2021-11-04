import { Client, Message } from '@open-wa/wa-automate';
import GetMenu2CommandService from '../services/GetMenu2CommandService';

class Menu2Controller {
    async execute(client: Client, message: Message) {
        const service = new GetMenu2CommandService();
        await service.execute(client, message);
    };
};

export default Menu2Controller;