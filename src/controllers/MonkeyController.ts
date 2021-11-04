import { Client, Message } from "@open-wa/wa-automate";
import MonkeyCommandService from "../services/MonkeyCommandService";

class MonkeyController {
    async execute(client: Client, message: Message) {
        const service = new MonkeyCommandService();
        await service.execute(client, message);
    }
};

export default MonkeyController;