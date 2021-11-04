import { Client, Message, decryptMedia } from "@open-wa/wa-automate";

class StickerAnimatedService {
  async execute(client: Client, message: Message) {
    const uaOverride =
      "WhatsApp/2.2108.8 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36";
    const media = await decryptMedia(message, uaOverride);
    try {
      await client.sendMp4AsSticker(
        message.from,
        media,
        {
          crop: true,
          startTime: `00:00:00.0`,
          endTime: `00:00:11.0`,
        },
        {
          author: "NiinoBot",
          pack: "Feito por NiinoBot",
        }
      );
    } catch {
      await client.sendText(
        message.from,
        "Tente diminuir o vídeo ou tente com outro gif. Lembrando que suportamos até 11 segundos de vídeo!"
      );
    }
  }
}

export default StickerAnimatedService;
