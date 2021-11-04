import { Client, ContactId, GroupChatId, Message } from "@open-wa/wa-automate";
import axios from "axios";
import { commandSlice } from "../commands/commands";
import Niino from "../db/models/Niino";

class BlockCommandService {
  async execute(client: Client, message: Message) {
    const body = String(message.body).toLowerCase();
    const bodySlice = commandSlice(body, 3);

    await client
      .getGroupAdmins(<GroupChatId>message.chatId)
      .then(async (admins) => {
        if (
          admins.includes(<ContactId>`${message.author}`) ||
          message.author === "5521969693229@c.us"
        ) {
          if (bodySlice === "") {
            await client.sendText(
              message.from,
              "Não foi passado nenhum comando para ser bloqueado."
            );
          } else {
            try {
              axios
                .post("http://localhost:3000/block", {
                  groupId: message.chatId,
                  command: bodySlice,
                })
                .then(() => console.log("Feito com sucesso"))
                .catch((err) => console.error(err));
              await client.sendText(message.from, "Proibido com sucesso!");
            } catch {
              await client.sendText(
                message.from,
                "Você não tem permissão para executar este comando!"
              );
            }
          }
        }
      });
  }
}

export default BlockCommandService;
