import { Client, Message } from '@open-wa/wa-automate';
import WikipediaCommandService from '../services/WikipediaCommandService';

class WikipediaController {
    async execute(client: Client, message: Message) {
        const service = new WikipediaCommandService();
        await service.execute(client, message);
    };
};

export default WikipediaController;