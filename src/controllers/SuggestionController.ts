import { Client, Message } from '@open-wa/wa-automate';
import SuggestionCommandService from '../services/SuggestionCommandService';

class SuggestionController {
    async execute(client: Client, message: Message) {
        const service = new SuggestionCommandService();
        await service.execute(client, message);
    };
};

export default SuggestionController;