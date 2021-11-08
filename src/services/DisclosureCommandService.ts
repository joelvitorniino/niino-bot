import { Client, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';

class DisclosureCommandService {
    async execute(client: Client, message: Message) {
        const body = String(message.body);
        const bodySlice = commandSlice(body, 9);

        if(message.author === '5521969693229@c.us') {
            await client.getAllChats(false)
            .then(async (chats) => {
              chats.forEach((chat) => client.sendText(chat.id, bodySlice));
            });
            
            await client.sendText('5521969693229@c.us', 'Feita a divulgação com sucesso!');
        } else {
            await client.sendText(message.from, 'Você não tem permissão para executar este comando!');
        };
    };
};

export default DisclosureCommandService;