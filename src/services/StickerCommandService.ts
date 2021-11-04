import { Client, Message, decryptMedia, StickerMetadata } from '@open-wa/wa-automate';

class StickerCommandService {
    async execute(client: Client, message: Message) {
        const uaOverride =
    "WhatsApp/2.2108.8 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36";
        const mediaDataAs = await decryptMedia(message, uaOverride);
        const author = {
        author: "NiinoBot",
        pack: "Feita por NiinoBot",
        cropPosition: "center",
        keepScale: true,
      } as StickerMetadata;

      await client.sendImageAsSticker(message.from, mediaDataAs, author);
    }; 
};

export default StickerCommandService;