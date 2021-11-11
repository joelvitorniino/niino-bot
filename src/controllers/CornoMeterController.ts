import { Client, Message } from '@open-wa/wa-automate';
import CornoMeterCommandService from '../services/CornoMeterCommandService';

class CornoMeterController {
    async execute(client: Client, message: Message) {
        const service = new CornoMeterCommandService();
        await service.execute(client, message);
    };
};

export default CornoMeterController;