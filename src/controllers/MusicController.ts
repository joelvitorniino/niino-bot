import { Client, Message } from "@open-wa/wa-automate";
import MusicApiService from "../services/MusicApiService";

class MusicController {
    async execute(client: Client, message: Message) {
        try {
            const service = new MusicApiService();
            await service.execute(client, message);    
        } catch {
            return;
        }
    };
};

export default MusicController;