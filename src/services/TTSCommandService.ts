import { Client, Message } from "@open-wa/wa-automate";
import axios from "axios";
import { commandSlice } from "../commands/commands";

const gtts = require("node-gtts");

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

interface ITTS {
  data: string;
};

class TTSCommandService {
  async execute(client: Client, message: Message) {
    const body = String(message.body).toLowerCase();
    const bodySlice = commandSlice(body, 6);
    const bodySplit = bodySlice.split(" ");
    const bodySliceWord = commandSlice(body, 9);

    const languages = [
      {
        af: "af",
        ar: "ar",
        ca: "ca",
        ch: "zh",
        us: "en",
        fr: "fr",
        al: "de",
        hu: "hu",
        it: "it",
        jp: "ja",
        ko: "ko",
        br: "pt-br",
        ru: "ru",
        es: "es",
        sv: "sv",
        tr: "tr",
      },
    ];

    for (let attr in languages) {
      if (languages[attr][bodySplit[0]]) {
        gtts(languages[attr][bodySplit[0]]).save(`/home/joel/Documents/niino-bot/public/audio/${message.t}.mp3`, bodySliceWord);
        await sleep(2000);

        if (bodySliceWord.length >= 201) {
          await client.sendText(
            message.from,
            "Epa! Isso tem mais de 200 caracteres, tente diminuir."
          );
        } else {
          await client.sendAudio(
            message.from,
            `/home/joel/Documents/niino-bot/public/audio/${message.t}.mp3`,
            false || null
          );
        };
      };
    };

    if (bodySplit[0] === "pt") {
      const { data } = await axios.get<ITTS>(
        encodeURI(
          `http://localhost:5000/api/v1/word=${bodySliceWord}&lang=pt&archive=${message.t}`
        )
      );
      await client
        .sendAudio(
          message.from,
          `/home/joel/Documents/niino-bot/public/audio/${message.t}.mp3`,
          false || null
        )
        .then(() => console.log(data.data));
    };
  };
};

export default TTSCommandService;
