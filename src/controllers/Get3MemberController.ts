import { Client, Message } from '@open-wa/wa-automate';
import Get3MemberCommandService from '../services/Get3MemberCommandService';

class Get3MemberController {
    async execute(client: Client, message: Message) {
        const service = new Get3MemberCommandService();
        await service.execute(client, message);
    };
};

export default Get3MemberController;