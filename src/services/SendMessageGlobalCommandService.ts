import { Client, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';

class SendMessageGlobalCommandService {
    async execute(client: Client, message: Message) {
        const body = String(message.body).toLowerCase();
        if(message.author === '5521969693229@c.us') {
            await client.getAllChats(false)
            .then(async (chats) => {
                chats.forEach((chat) => client.sendText(chat.id, `📡 [NIINOBOT] Transmissão:\n${commandSlice(body, 11)}`));
            });
        } else {
            await client.sendText(message.from, 'Apenas o dono do BOT pode realizar esta operação!');
        };
    };
};

export default SendMessageGlobalCommandService;