import { Client, Message } from '@open-wa/wa-automate';

class SuperArray extends Array {
    randomWord(value) {
        return value[Math.floor(Math.random() * value.length)];
    };
};

class MeterofDickCommandService {
    async execute(client: Client, message: Message) {
        const arrayWords = [
            "Bom a pica deste ser humano é: 40CM, vulgo arrombador de xotas",
            "CARALHO A PICA DO MLK MEDE 30CM, vulgo kid bengala",
            "ih pequeninho, vulgo fimose, mede 4cm",
            "mano esse cara tem um micro pênis mede 2cm, slk",
            "coitado dele, é um trap, n tem pau :(",
            "17 cm aí sim, na média parceiro, só vai pro abate",
            "O CARA TEM 50CM FI, VULGO ESTOURADOR DE PETRÓLEO",
            "10cm, bom dá pra comer uma cega de boa!"
        ];

        const Super = new SuperArray();
        const wordRandom = Super.randomWord(arrayWords);

        await client.sendText(message.from, wordRandom);
    };
};

export default MeterofDickCommandService;