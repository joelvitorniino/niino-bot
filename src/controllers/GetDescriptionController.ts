import { Client, Message } from '@open-wa/wa-automate';
import GetDescriptionCommandService from '../services/GetDescriptionCommandService';

class GetDescriptionController {
    async execute(client: Client, message: Message) {
        const service = new GetDescriptionCommandService();
        await service.execute(client, message);
    };
};

export default GetDescriptionController;