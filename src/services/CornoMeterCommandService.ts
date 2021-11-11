import { Client, Message } from '@open-wa/wa-automate';

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class CornoMeterCommandService {
    async execute(client: Client, message: Message) {
        const arrayWords = [
            "bom o nivel de corno é MAIS DE 8000!",
            "o nivel de corno dele é de 50%",
            "nivel de corno dele é de 30%, até que é bom!",
            "o nivel de corno dele é de 25%, ih, mas usa pronome neutre, MORRA!",
            "opakdsadksaoksdadsaksadksadkadskadskdsa que cara corno mano slk",
            "Ele não é corno.",
            "mano esse cara é mt corno ele tem chance de ser 85%",
            "90% até que é bom!"
        ];

        const Super = new SuperArray();

        const randomWord = Super.randomWord(arrayWords);

        await client.sendText(message.from, randomWord);
    };
};

export default CornoMeterCommandService;