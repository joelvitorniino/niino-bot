import { Client, Message } from "@open-wa/wa-automate";

const { BrainlyAPI, Server } = require("brainly-api");

class BrainlyCommandService {
  async execute(client: Client, message: Message, text: string) {
    BrainlyAPI.startWorker(
      { experimental: true, server: Server.PT },
      async (brainly) => {
        const JSONBrainly = JSON.stringify(
          await brainly.findQuestion(`${text}`)
        );
        const JSONParse = JSON.parse(JSONBrainly);

        const brainlyQuestion = JSONParse.raw.map((fn) =>
          fn.data.questionSearch.edges.map((fn) => fn.node.content)
        );

        const brainlyAnswer = JSONParse.raw.map((fn) =>
          fn.data.questionSearch.edges.map((fn) =>
            fn.node.answers.nodes.map((fn) => fn.content)
          )
        );

        const JSONQuestion = JSON.stringify(brainlyQuestion);
        const JSONQuestionParsed = JSON.parse(
          JSONQuestion.replace(/<(?:.|\n)*?>/gm, "")
        );

        const JSONAnswer = JSON.stringify(brainlyAnswer);
        const JSONAnswerParsed = JSON.parse(
          JSONAnswer.replace(/<(?:.|\n)*?>/gm, "")
        );
        
        try {
          await client.sendText(
            message.from,
            `Pergunta: ${JSONQuestionParsed[0][1]}\nResposta: ${JSONAnswerParsed[0][0][0]}`
          );
          await client.sendText(
            message.from,
            `Pergunta: ${JSONQuestionParsed[0][1]}\nResposta: ${JSONAnswerParsed[0][0][1]}`
          );   
        } catch {
          await client.sendText(message.from, 'Algo de errado aconteceu, tente novamente!');
        }
      }
    );
  }
}

export default BrainlyCommandService;
