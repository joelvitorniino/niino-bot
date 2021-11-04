import { Client, Message } from "@open-wa/wa-automate";
import StickerCommandService from "../services/StickerCommandService";

class StickerController {
    async execute(client: Client, message: Message) {
        const service = new StickerCommandService();
        await service.execute(client, message);
    };
};

export default StickerController;