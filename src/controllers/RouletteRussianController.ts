import { Client, Message } from '@open-wa/wa-automate';
import RouletteRussianCommandService from '../services/RouletteRussianCommandService';

class RouletteRussianController {
    async execute(client: Client, message: Message) {
        const service = new RouletteRussianCommandService();
        await service.execute(client, message);
    };
};

export default RouletteRussianController;