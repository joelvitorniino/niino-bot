import { Client, GroupChatId, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';

class SuperArray extends Array {
    randomMember(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class Get3MemberCommandService {
    async execute(client: Client, message: Message) {
        const Super = new SuperArray();
        const array = [];
        const body = String(message.body).toLowerCase();
        const bodySlice = commandSlice(body, 5);

        client.getGroupMembers(<GroupChatId>message.chatId)
            .then(async (members) => {
                members.forEach((member, i) => array[i] = `@${member.id}`.split(',').join('\n').split('@c.us').join(''));

                const memberOne = Super.randomMember(array);
                const memberTwo = Super.randomMember(array);
                const memberThree = Super.randomMember(array);

                await client.sendTextWithMentions(message.from, `Top 1 ${bodySlice}\n${memberOne}\n${memberTwo}\n${memberThree}`);
            })
            .catch((err) => console.log(err));
    };
};

export default Get3MemberCommandService;