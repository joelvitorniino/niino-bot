import { Client, Message } from '@open-wa/wa-automate';
import MusicCommandService from '../services/MusicCommandService';

class MusicDownloadController {
    async execute(client: Client, message: Message) {
        const service = new MusicCommandService();
        await service.execute(client, message);
    };
};

export default MusicDownloadController;