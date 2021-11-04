import { Client, Message } from '@open-wa/wa-automate';
import GetAllMembersCommandService from '../services/GetAllMembersCommandService';

class GetAllMembersController {
    async execute(client: Client, message: Message) {
        const service = new GetAllMembersCommandService();
        await service.execute(client, message);
    };
};

export default GetAllMembersController;