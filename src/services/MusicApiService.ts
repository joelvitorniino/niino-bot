import { Client, Message } from "@open-wa/wa-automate";
import { commandSlice } from "../commands/commands";
import axios from "axios";

interface IMusic {
  art: {
    id: string;
  };

  mus: [
    {
      id: string;
      text: string;
    }
  ];
}

interface IURL {
  images: [
    {
      url: string;
    }
  ];
}

class MusicApiService {
  async execute(client: Client, message: Message) {
    try {
      const body = String(message.body).toLowerCase();
      const bodySlice = commandSlice(body, 6);
      const artistAndMusic = bodySlice.split("|");
      const { data } = await axios.get<IMusic>(
        `https://api.vagalume.com.br/search.php?art=${artistAndMusic[0]}&mus=${artistAndMusic[1]}&apikey=0910fe833fc998194782ed8aed60fdf5`
      );
      const responseImage = await axios.get<IURL>(
        `https://api.vagalume.com.br/image.php?bandID=${data.art.id}&limit=1&apikey=0910fe833fc998194782ed8aed60fdf5`
      );
      await client.sendImage(
        message.from,
        responseImage.data.images[0].url,
        "music.png",
        data.mus[0].text
      );
    } catch {
      await client.sendText(
        message.from,
        "Algo de errado aconteceu, tente novamente!"
      );
    }
  }
}

export default MusicApiService;
