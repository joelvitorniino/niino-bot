import { Client, Message } from '@open-wa/wa-automate';

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class WordsOfCazeCommandService {
    async execute(client: Client, message: Message) {
        const words = [
            "Que papinho em?",
            "Isso aí me pegou mané",
            "Eh duro!",
            "eh o q",
            "porra cara tá falando sério?",
            "IH",
            "METEU ESSA?",
            "tu tá de sacanagem doidão",
            "ELE CRAVA TÁ"
        ];

        const Super = new SuperArray();
        const word = Super.randomWord(words);

        if(message.quotedMsg) {
            await client.reply(message.from, word, message.quotedMsg.id);
        } else {
            await client.sendText(message.from, word);
        };
    };
};

export default WordsOfCazeCommandService;