import { Client, GroupChatId, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';

class SuperArray extends Array {
    randomMember(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class Get5MembersCommandService {
    async execute(client: Client, message: Message) {
        const body = String(message.body).toLowerCase();
        await client.getGroupMembers(<GroupChatId>message.chatId)
            .then(async (members) => {
                const array = [];
                members.forEach((member, i) => array[i] = `@${member.id}`.split(',').join('\n').split('@c.us').join(''));
                const Super = new SuperArray();
                const memberOne = Super.randomMember(array);
                const memberTwo = Super.randomMember(array);
                const memberThree = Super.randomMember(array);
                const memberFour = Super.randomMember(array);
                const memberFive = Super.randomMember(array);

                await client.sendReplyWithMentions(message.from, `Top 5 ${commandSlice(body, 4)}\n${memberOne}\n${memberTwo}\n${memberThree}\n${memberFour}\n${memberFive}`, false || null);
            })
            .catch(err => console.log(err));
    };
};

export default Get5MembersCommandService;