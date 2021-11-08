import { Client, Message } from '@open-wa/wa-automate';
import Get1MemberCommandService from '../services/Get1MemberCommandService';

class Get1MemberController {
    async execute(client: Client, message: Message) {
        const service = new Get1MemberCommandService();
        await service.execute(client, message);
    };
};

export default Get1MemberController;