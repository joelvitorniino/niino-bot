import { Client, Message } from '@open-wa/wa-automate';
import GroupToAdminsOnlyCommandService from '../services/GroupToAdminsOnlyCommandService';

class GroupToAdminsOnlyController {
    async execute(client: Client, message: Message) {
        const service = new GroupToAdminsOnlyCommandService();
        await service.execute(client, message);
    };
};

export default GroupToAdminsOnlyController;