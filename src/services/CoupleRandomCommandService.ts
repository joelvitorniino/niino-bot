import { Client, GroupChatId, Message } from '@open-wa/wa-automate';

class SuperArray extends Array {
    randomCouple(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class CoupleRandomCommandService {
    async execute(client: Client, message: Message) {
        await client.getGroupMembers(<GroupChatId>message.chatId)
            .then(async (members) => {
                const array = [];
                members.forEach((member, i) => array[i] = `${member.id.split(",").join("\n").split("@c.us").join("")}`);
                const Super = new SuperArray();
                const randomCoupleOne = Super.randomCouple(array);
                const randomCoupleTwo = Super.randomCouple(array);

                await client.sendReplyWithMentions(message.from, `Está rolando um clima entre: @${randomCoupleOne} & @${randomCoupleTwo}`, false || null);
            });
    };
};

export default CoupleRandomCommandService;