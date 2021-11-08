import { Client, Message } from '@open-wa/wa-automate';

class SuperArray extends Array {
    randomDice(value) {
        value[Math.floor(Math.random() * value.length)];
    }; 
};

class RollDiceCommandService {
    async execute(client: Client, message: Message) {
        const Super = new SuperArray();
        const dice = [
            "https://i.imgur.com/xGo4ehW.png",
            "https://i.imgur.com/BlxEHLX.png",
            "https://i.imgur.com/L3vb4fH.png",
            "https://i.imgur.com/q1MnsVo.png",
            "https://i.imgur.com/O4ZNQdk.png",
            "https://i.imgur.com/s6LFVVQ.png",
            "https://i.imgur.com/tuAhio3.png",
            "https://i.imgur.com/GxGXeoF.png",
            "https://i.imgur.com/uFzB5XE.png",
            "https://i.imgur.com/tcmHNyF.png",
            "https://i.imgur.com/7XhfYX3.png",
            "https://i.imgur.com/sZYdUC4.png",
            "https://i.imgur.com/heybshZ.png",
            "https://i.imgur.com/9prpaBn.png"
        ];

        const dices = Super.randomDice(dice);

        await client.sendImage(message.from, `${dices}`, '', '');
    };
};

export default RollDiceCommandService;