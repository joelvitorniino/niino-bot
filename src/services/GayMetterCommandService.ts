import { Client, Message } from '@open-wa/wa-automate';
import { commandSlice } from '../commands/commands';

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class GayMetterCommandService {
    async execute(client: Client, message: Message) {
        const words = [
            "Você é como um chocolate, 50% cacau e 50% leite de pica",
            "Bom este rapaz tem 25% de chance de ser um viadão assumido.",
            "Ele tem 35% de chance de ser um viadão daqueles boiola",
            "Ele usa pronome neutre, ou seja é um viadão da porra",
            "Ele tem 10% de chance de ser, aliás puta rola em irmão slk",
            "Bom este rapaz é nazista, ou seja MORRA SEU GAY",
            "Bom ele tem 40% de chance de ser.",
            "Ele tem 60% de chance de ser.",
        ];

        const Super = new SuperArray();
        const randomWord = Super.randomWord(words);

        const body = String(message.body).toLowerCase();
        const bodySlice = commandSlice(body, 11);
        
        await client.sendReplyWithMentions(message.from, `${randomWord} ${bodySlice}`, false || null);
    };
};

export default GayMetterCommandService