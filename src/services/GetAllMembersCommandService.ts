import { Client, Message, GroupChatId, ContactId } from '@open-wa/wa-automate';

class GetAllMembersCommandService {
    async execute(client: Client, message: Message) {
        await client.getGroupMembers(message.chatId as GroupChatId)
            .then(async (members) => {
                const array = [];
                members.forEach((member, i) => array[i] = `@${member.id}`);
                const allMembers = array.toString().split(',').join('\n').split('@c.us').join('');
                await client.getGroupAdmins(<GroupChatId>message.chatId)
                    .then(async (admins) => {
                        if(admins.includes(<ContactId>`${message.author}`)) {
                            await client.sendReplyWithMentions(message.from, allMembers, false || null);
                        } else {
                            await client.sendText(message.from, 'Você não tem permissão para executar este comando!');
                        }
                    });
            });
    };
};

export default GetAllMembersCommandService;