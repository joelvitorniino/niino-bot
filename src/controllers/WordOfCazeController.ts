import { Client, Message } from '@open-wa/wa-automate';
import WordsOfCazeCommandService from '../services/WordsOfCazeCommandService';

class WordOfCazeController {
    async execute(client: Client, message: Message) {
        const service = new WordsOfCazeCommandService();
        await service.execute(client, message);
    };
};

export default WordOfCazeController;