import { Client, Message, decryptMedia } from "@open-wa/wa-automate";

class StickerfromImageCommandService {
  async execute(client: Client, message: Message) {
    const uaOverride =
      "WhatsApp/2.2108.8 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36";
    if (message.quotedMsg && message.quotedMsg.type === "sticker") {
      const mediaData = await decryptMedia(message.quotedMsg, uaOverride);
      const imageBase64 = `data:${
        message.quotedMsg.mimetype
      };base64,${mediaData.toString("base64")}`;
      await client.sendFile(
        message.from,
        imageBase64,
        "sticker.jpg",
        "",
        message.quotedMsg.id
      );
    };
  }
}

export default StickerfromImageCommandService;
