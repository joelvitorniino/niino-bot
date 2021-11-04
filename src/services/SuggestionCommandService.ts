import { Client, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';

class SuggestionCommandService {
    async execute(client: Client, message: Message) {
        const body = String(message.body).toLowerCase();
        const bodySlice = commandSlice(body, 9);
        await client.sendText('5521969693229@c.us', `Sugestão: ${bodySlice}\n`);
        await client.sendText(message.from, 'Sugestão enviada com sucesso!');
    };
};

export default SuggestionCommandService;