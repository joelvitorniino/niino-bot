import { Client, Message } from '@open-wa/wa-automate';
import DeleteMessageService from '../services/DeleteMessageService';

class DeleteMessageController {
    async execute(client: Client, message: Message) {
        const service = new DeleteMessageService();
        await service.execute(client, message);
    };
};

export default DeleteMessageController;