import { Client, Message } from '@open-wa/wa-automate';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

class ShutdownCommandService {
    async execute(client: Client, message: Message) {
        if(message.author === '5521969693229@c.us') {
            await client.getAllChats(false)
                .then(async (chats) => {
                    chats.forEach((chat) => client.sendText(chat.id, 'Amanhã voltamos! Que Deus abençoe vocês, estaremos on-line a partir de 06:50/07:00! Bom descanso a todos.'));
                });
            await sleep(5000);
            await client.kill();
        } else {
            await client.sendText(message.from, 'Você não é o dono do bot para fazer isso! seu otário.');
        };
    };
};

export default ShutdownCommandService;