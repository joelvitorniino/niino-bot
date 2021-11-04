import fs from "fs";
import { Client, Message } from "@open-wa/wa-automate";
import TextToSpeechV1 from "ibm-watson/text-to-speech/v1";
import { IamAuthenticator } from "ibm-watson/auth";
import { exec } from "child_process";
import "dotenv/config";
import { commandSlice } from "../commands/commands";
import { Readable } from "ibm-watson/lib/synthesize-stream";
import axios from "axios";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

interface ITTS {
  data: string;
}

class TTSCommandService {
  async execute(client: Client, message: Message) {
    const apiKey = process.env.IBM_WATSON_API_KEY;
    const serviceUrl = process.env.IBM_WATSON_SERVICE_URL;
    const body = String(message.body).toLowerCase();
    const bodySlice = commandSlice(body, 6);
    const bodySplit = bodySlice.split(" ");
    const textBody = commandSlice(body, 9);

    const textToSpeech = new TextToSpeechV1({
      authenticator: new IamAuthenticator({
        apikey: apiKey,
      }),

      serviceUrl: serviceUrl,
    });

    const voices = [
      {
        br: "pt-BR_IsabelaV3Voice",
        es: "es-ES_EnriqueVoice",
        fr: "fr-FR_NicolasV3Voice",
        us: "en-US_MichaelVoice",
        jp: "ja-JP_EmiV3Voice",
        ch: "zh-CN_ZhangJingVoice",
        ar: "ar-AR_OmarVoice",
        ko: "ko-KR_YoungmiVoice",
        it: "it-IT_FrancescaV3Voice",
        al: "de-DE_DieterV3Voice",
      },
    ];

    for (let attr in voices) {
      if (voices[attr][bodySplit[0]]) {
        const synthesizeParams = {
          text: textBody,
          accept: "audio/wav",
          voice: voices[attr][bodySplit[0]],
        };

        await textToSpeech
          .synthesize(synthesizeParams)
          .then((response) =>
            textToSpeech.repairWavHeaderStream(<Readable>response.result)
          )
          .then((buffer) =>
            fs.writeFileSync(
              `/home/joel/Documents/niino-bot/public/audio/${message.t}.wav`,
              buffer
            )
          )
          .catch((err) => console.log(err));

        if (textBody.length >= 201) {
          await client.sendText(
            message.from,
            "Epa! Isso tem que mais 200 caracteres."
          );
        } else {
          exec(
            `lame /home/joel/Documents/niino-bot/public/audio/${message.t}.wav /home/joel/Documents/niino-bot/public/audio/${message.t}.mp3 -b 192`
          );
          await sleep(3000);
          await client
            .sendAudio(
              message.from,
              `/home/joel/Documents/niino-bot/public/audio/${message.t}.mp3`,
              false || null
            )
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
      }

      if (bodySplit[0] === "pt") {
        const { data } = await axios.get<ITTS>(
          encodeURI(`http://localhost:5000/api/v1/word=${textBody}&lang=pt&archive=${message.t}`)
        );
        await client
          .sendAudio(
            message.from,
            `/home/joel/Documents/niino-bot/public/audio/${message.t}.mp3`,
            false || null
          )
          .then(() => console.log(data.data));
      }
    }
  }
}

export default TTSCommandService;
