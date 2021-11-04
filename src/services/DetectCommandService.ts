import { Client, Message } from '@open-wa/wa-automate';

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class DetectCommandService {
    async execute(client: Client, message: Message) {
        const array = [
          "Ih ala KKKKKKKKKKKKKKKKKKKK mó caô mano, para que tá feio",
          "Meteu essa mano?",
          "Mano eu não sou viado, mas esse cara é muito bicha e ainda por cima é muito mentiroso pqp",
          "CAÔ MENOR",
          "Sim isso é verdade",
          "mano tu é mano? porra deixa de ser viado",
          "kkkkkkkkkkkkkkkkkkkkk ala muito otário, mó caô",
          "Tu tá escaldado porra? para de meter caô",
          "mentira da braba pqp, mt troxa",
          "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Otário pra crlh",
        ];

        const Super = new SuperArray();
        const randomDetect = Super.randomWord(array);
        if(message.quotedMsg) {
            await client.reply(message.from, randomDetect, message.quotedMsg.id);
        } else {
            await client.sendText(message.from, randomDetect);
        };
    };
};

export default DetectCommandService;