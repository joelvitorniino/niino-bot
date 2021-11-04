import { Client, Message } from '@open-wa/wa-automate';
import DictionaryCommandService from '../services/DictionaryCommandService';

class DictionaryController {
    async execute(client: Client, message: Message) {
        const service = new DictionaryCommandService();
        await service.execute(client, message);
    };
};

export default DictionaryController;