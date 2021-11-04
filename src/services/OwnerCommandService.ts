import { Client, ContactId, GroupChatId, Message } from '@open-wa/wa-automate';

class OwnerCommandService {
    async execute(client: Client, message: Message) {
        await client.sendContact(<GroupChatId>message.chatId, <ContactId>'5521969693229@c.us');
        await client.sendText(message.from, 'Caso não possuir v-card: wa.me/5521969693229');
        await client.sendText(message.from, 'O dono tem 15 anos e mora no RJ!');
    };
};

export default OwnerCommandService;