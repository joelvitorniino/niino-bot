import { Client, Message } from '@open-wa/wa-automate';
import { BlockAdsService } from '../services/BlockAdsService';

class BlockAdsController {
  async execute(client: Client, message: Message) {
    const service = new BlockAdsService();
    await service.execute(client, message);
  }
}

export default BlockAdsController;