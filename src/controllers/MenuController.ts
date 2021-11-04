import { Client, Message } from '@open-wa/wa-automate';
import MenuCommandService from '../services/MenuCommandService';

class Menu4Controller {
    async execute(client: Client, message: Message) {
        const service = new MenuCommandService();
        await service.execute(client, message);
    };
};

export default Menu4Controller;