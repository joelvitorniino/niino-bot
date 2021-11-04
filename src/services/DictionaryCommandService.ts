import { Client, Message } from '@open-wa/wa-automate';
import axios from 'axios';
import { commandSlice } from '../commands/commands';

class DictionaryCommandService {
    async execute(client: Client, message: Message) {
        try {
            const body = String(message.body).toLowerCase();
            const bodySlice = commandSlice(body, 11);
            const response = await axios.get(`https://significado.herokuapp.com/${bodySlice}`);
            await client.sendText(message.from, `Classe Gramatical: ${response.data[0].class}\nSignificado: ${response.data[0].meanings[0]}`);    
        } catch {
            await client.sendText(message.from, 'Olá aconteceu algo de errado, tente novamente.');
        };
    };
};

export default DictionaryCommandService;