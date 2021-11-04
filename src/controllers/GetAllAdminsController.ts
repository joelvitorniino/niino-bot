import { Client, Message } from '@open-wa/wa-automate';
import GetAllAdminsCommandService from '../services/GetAllAdminsCommandService';

class GetAllAdminsController {
    async execute(client: Client, message: Message) {
        const service = new GetAllAdminsCommandService();
        await service.execute(client, message);
    };
};

export default GetAllAdminsController;