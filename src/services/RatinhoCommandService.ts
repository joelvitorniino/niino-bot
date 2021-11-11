import { Client, Message } from '@open-wa/wa-automate';

export class RatinhoCommandService {
  async execute(client: Client, message: Message) {
    await client.sendFileFromUrl(
      message.from,
      "http://31.220.20.119/niino-bot/ratinho.mp3",
      "ratinho.mp3",
      ""
    );
  }
}