import { Client, Message } from '@open-wa/wa-automate';
import UndoToAdminsOnlyCommandService from '../services/UndoToAdminsOnlyCommandService';

class UndoToAdminsOnlyController {
    async execute(client: Client, message: Message) {
        const service = new UndoToAdminsOnlyCommandService();
        await service.execute(client, message);
    }
};

export default UndoToAdminsOnlyController;