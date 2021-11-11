import { Client, ContactId, GroupChatId, Message } from '@open-wa/wa-automate';
import axios from 'axios';
import {isAdmin} from "../utils/isAdmin";

export class BlockAdsService {
  async execute(client: Client, message: Message) {
    if (await isAdmin(client, message)) {
      const groupId = message.chatId;

      try {
        await axios.post("https://localhost:3000/blockad", {
          groupId,
        });

        await client.sendText(message.from, "Anúncios bloqueados com súcesso!");
      } catch (error) {
        console.error(error);
        await client.sendText(message.from, "Ocorreu um erro! Contate o administrador");
      }
    } else {
      await client.sendText(message.from, "Você não tem permissão para executar esse comando");
    }
  }
}