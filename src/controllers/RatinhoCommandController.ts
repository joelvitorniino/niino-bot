import { Client, Message } from '@open-wa/wa-automate';
import { RatinhoCommandService } from '../services/RatinhoCommandService';


export class RatinhoCommandController {
  async execute(client: Client, message: Message) {
    const service = new RatinhoCommandService();
    await service.execute(client, message)
  }
}