import { Client, Message, decryptMedia, StickerMetadata, Mp4StickerConversionProcessOptions } from '@open-wa/wa-automate';

class StickerAnimatedQuotedCommandService {
    async execute(client: Client, message: Message) {
        if(message.quotedMsg && message.quotedMsg.isMedia) {
            const encryptMedia = message.quotedMsg.isMedia ? message.quotedMsg : message;
            const mediaData = await decryptMedia(encryptMedia, "WhatsApp/2.2108.8 Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36");
            const configSticker = {
                author: "NiinoBot",
                pack: "Feito por NiinoBot",
            } as StickerMetadata;

            const configStickerAnimated = {
                crop: true,
                startTime: `00:00:00.0`,
                endTime: `00:00:11.0`
            } as Mp4StickerConversionProcessOptions;

            client.sendMp4AsSticker(message.from, mediaData, configStickerAnimated, configSticker);
          };
    };
};

export default StickerAnimatedQuotedCommandService;