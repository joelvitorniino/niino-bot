import axios from "axios";
import { Client, ContactId, GroupChatId, Message } from "@open-wa/wa-automate";
import { commandSlice } from "../commands/commands";

class UnblockCommandService {
  async execute(client: Client, message: Message) {
    const body = String(message.body).toLowerCase();
    const bodySlice = commandSlice(body, 5);

    if (bodySlice === "") {
      await client.sendText(
        message.from,
        "Nenhum comando foi passado para se desbloquear."
      );
    } else {
      await client
        .getGroupAdmins(<GroupChatId>message.chatId)
        .then(async (admins) => {
          if (
            admins.includes(<ContactId>`${message.author}`) ||
            message.author === "5521969693229@c.us"
          ) {
            try {
              await axios
                .delete("http://localhost:3000/delete", {
                  data: {
                    groupId: message.chatId,
                    command: bodySlice,
                  },
                })
                .then(() => console.log("Comando excluído com sucesso!"))
                .catch(() => console.log("Erro"));

              await client.sendText(
                message.from,
                "Comando desbloqueado com sucesso neste grupo!"
              );
            } catch {
              await client.sendText(
                message.from,
                "Você não tem permissão para executar este comando!"
              );
            }
          }
        });
    }
  }
}

export default UnblockCommandService;
