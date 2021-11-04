import { Client, Message } from "@open-wa/wa-automate";
import Get5MembersCommandService from '../services/Get5MembersCommandService';

class Get5MembersController {
    async execute(client: Client, message: Message) {
        const service = new Get5MembersCommandService();
        await service.execute(client, message);
    }
};

export default Get5MembersController;