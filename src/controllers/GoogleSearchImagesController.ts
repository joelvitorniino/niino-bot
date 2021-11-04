import { Client, Message } from '@open-wa/wa-automate';
import GoogleSearchImagesService from '../services/GoogleSearchImagesService';

class GoogleSearchImagesController {
    async execute(client: Client, message: Message) {
        const service = new GoogleSearchImagesService();
        await service.execute(client, message);
    };
};

export default GoogleSearchImagesController;