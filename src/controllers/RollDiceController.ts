import { Client, Message } from '@open-wa/wa-automate';
import RollDiceCommandService from '../services/RollDiceCommandService';

class RollDiceController {
    async execute(client: Client, message: Message) {
        const service = new RollDiceCommandService();
        await service.execute(client, message);
    };
};

export default RollDiceController;