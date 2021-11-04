import { Client, ContactId, GroupChatId, Message } from '@open-wa/wa-automate';

class BanCommandService {
    async execute(client: Client, message: Message) {
        if(message.quotedMsg) {
            await client.getGroupAdmins(<GroupChatId>message.chatId)
                .then(async(admins) => {
                    if(admins.includes(<ContactId>`${message.author}`)) {
                        await client.removeParticipant(<GroupChatId>message.chatId, <ContactId>message.quotedMsg.author);
                    } else {
                        await client.sendText(message.from, 'Você não tem permissão para executar este comando!');
                    }
                });
        };
    };
};

export default BanCommandService;