import { Client, Message } from "@open-wa/wa-automate";
import StickerQuotedCommandService from "../services/StickerQuotedCommandService";

class StickerQuotedController {
    async execute(client: Client, message: Message) {
        const service = new StickerQuotedCommandService();
        await service.execute(client, message);
    };
};

export default StickerQuotedController;