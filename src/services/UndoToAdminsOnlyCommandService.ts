import { Client, ContactId, GroupChatId, Message } from '@open-wa/wa-automate';

class UndoToAdminsOnlyCommandService {
    async execute(client: Client, message: Message) {
        client.getGroupAdmins(<GroupChatId>message.chatId).then(async admins => {
            if(admins.indexOf(<ContactId>`${message.author}`) >= 0) {
              await client.setGroupToAdminsOnly(<GroupChatId>message.chatId, false);
            } else {
              client.sendText(message.from, 'Você não tem permissão para executar este comando!');
            };
        });
    };
};

export default UndoToAdminsOnlyCommandService;