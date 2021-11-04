import {
  Client,
  decryptMedia,
  Message,
  StickerMetadata,
} from "@open-wa/wa-automate";

class StickerQuotedCommandService {
  async execute(client: Client, message: Message) {
    if (message.quotedMsg && message.quotedMsg.isMedia) {
      const encryptMedia = message.quotedMsg.isMedia
        ? message.quotedMsg
        : message;
      const mediaData = await decryptMedia(
        encryptMedia,
        "WhatsApp/2.2108.8 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
      );
      const configSticker = {
        author: "NiinoBot",
        pack: "Feito por NiinoBot",
        cropPosition: "center",
        keepScale: true,
      } as StickerMetadata;

      try {
        await client.sendImageAsSticker(message.from, mediaData, configSticker);
      } catch {
        await client.sendText(
          message.from,
          "Algo de errado aconteceu! Talvez você tenha digitado .fig em um gif."
        );
      }
    }
  }
}

export default StickerQuotedCommandService;
