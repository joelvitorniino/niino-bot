import { Client, Message } from '@open-wa/wa-automate';
import { GoogleApis } from 'googleapis';
import { commandSlice } from '../commands/commands';
import "dotenv/config";

const google = new GoogleApis();
const customSearch = google.customsearch('v1');
const apiKey = process.env.GOOGLE_API_KEY;
const searchEngineID = process.env.GOOGLE_SEARCH_ENGINE_ID;

class GoogleSearchImagesService {
    async execute(client: Client, message: Message, ) {
        try {
            const msgBody = String(message.body).toLowerCase();
            const response = await customSearch.cse.list({
                auth: apiKey,
                cx: searchEngineID,
                q: commandSlice(msgBody, 4),
                searchType: 'image',
                num: 3,
                safe: 'medium'
            });

            const responseImage = response.data.items.map(item => item.link)[1];

            await client.sendImage(message.from, responseImage, 'image.png', '');
        } catch {
            await client.sendText(message.from, 'Algo de errado aconteceu no processamento da imagem!');
        }
    }
}

export default GoogleSearchImagesService;