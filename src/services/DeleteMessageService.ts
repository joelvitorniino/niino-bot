import { Client, GroupChatId, Message } from '@open-wa/wa-automate';

class DeleteMessageService {
    async execute(client: Client, message: Message) {
        if(message.quotedMsg) {
            await client.deleteMessage(<GroupChatId>message.chatId, message.quotedMsg.id);
        };
    };
};

export default DeleteMessageService;