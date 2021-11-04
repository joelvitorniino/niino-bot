import { Client, Message } from "@open-wa/wa-automate";
import BrainlyCommandService from "../services/BrainlyCommandService";
import { commandSlice } from "../commands/commands";

class BrainlyController {
    async execute(client: Client, message: Message) {
        const body = String(message.body).toLowerCase();
        const bodySlice = commandSlice(body, 8)
        const service = new BrainlyCommandService();
        await service.execute(client, message, bodySlice);
    };
};

export default BrainlyController;