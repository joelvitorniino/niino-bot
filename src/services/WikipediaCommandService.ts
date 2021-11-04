import { Client, Message } from "@open-wa/wa-automate";
import axios from 'axios';
import { commandSlice } from "../commands/commands";

interface IWikipedia {
    data: string;
}

class WikipediaCommandService {
    async execute(client: Client, message: Message) {
        const body = String(message.body).toLowerCase();
        const { data } = await axios.get<IWikipedia>(`https://api-wikipedia01.herokuapp.com/api/v1/search=${commandSlice(body, 10)}&lang=pt`);
        await client.sendText(message.from, data.data);
    };
};

export default WikipediaCommandService;