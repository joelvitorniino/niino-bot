import { Client, Message } from "@open-wa/wa-automate";
import PQueue from "p-queue";
import MusicController from "../controllers/MusicController";
import StickerController from "../controllers/StickerController";
import StickerAnimatedController from "../controllers/StickerAnimatedController";
import BlockController from "../controllers/BlockController";
import UnblockController from "../controllers/UnblockController";
import StickerQuotedController from "../controllers/StickerQuotedController";
import StickerAnimatedQuotedController from "../controllers/StickerAnimatedQuotedController";
import MonkeyController from "../controllers/MonkeyController";
import GetAllMembersController from "../controllers/GetAllMembersController";
import GoogleSearchImagesController from "../controllers/GoogleSearchImagesController";
import Get5MembersController from "../controllers/Get5MembersController";
import DeleteMessageController from "../controllers/DeleteMessageController";
import StickerfromImageController from "../controllers/StickerfromImageController";
import ShutdownCommandController from "../controllers/ShutdownCommandController";
import SendMessageGlobalController from "../controllers/SendMessageGlobalController";
import MenuController from "../controllers/MenuController";
import GetDescriptionController from "../controllers/GetDescriptionController";
import WikipediaController from "../controllers/WikipediaController";
import GetAllAdminsController from "../controllers/GetAllAdminsController";
import Menu1Controller from "../controllers/Menu1Controller";
import Menu2Controller from "../controllers/Menu2Controller";
import Menu3Controller from "../controllers/Menu3Controller";
import Menu4Controller from "../controllers/Menu4Controller";
import Menu5Controller from "../controllers/Menu5Controller";
import Menu6Controller from "../controllers/Menu6Controller";
import TTSController from "../controllers/TTSController";
import BanController from "../controllers/BanController";
import UnbanController from "../controllers/UnbanController";
import DictionaryController from "../controllers/DictionaryController";
import CatController from "../controllers/CatController";
import InuController from "../controllers/InuController";
import DogController from "../controllers/DogController";
import SuggestionController from "../controllers/SuggestionController";
import DetectController from "../controllers/DetectController";
import GayMetterController from "../controllers/GayMetterController";
import CoupleRandomController from "../controllers/CoupleRandomController";
import GroupToAdminsOnlyController from "../controllers/GroupToAdminsOnlyController";
import UndoToAdminsOnlyController from "../controllers/UndoToAdminsOnlyController";
import Menu7Controller from "../controllers/Menu7Controller";
import OwnerController from "../controllers/OwnerController";
import YoutubeController from "../controllers/YoutubeController";
import Menu8Controller from "../controllers/Menu8Controller";
import EraseController from "../controllers/EraseAudioController";
import EraseMusicController from "../controllers/EraseMusicController";
import DisclosureController from "../controllers/DisclosureController";
import WordOfCazeController from "../controllers/WordOfCazeController";
import Get1MemberController from "../controllers/Get1MemberController";
import Get3MemberController from "../controllers/Get3MemberController";
import RollDiceController from "../controllers/RollDiceController";
import prisma from "../prisma";
import RouletteRussianController from "../controllers/RouletteRussianController";
import MeterofDickController from "../controllers/MeterofDickController";
import CornoMeterController from "../controllers/CornoMeterController";
import BlockAdsController from '../controllers/BlockAdsController';

const queue = new PQueue({
  concurrency: 4,
  autoStart: false,
});

const proc = async (message: Message) => {
  if (message.isGroupMsg === false) {
    console.log(`Mensagem: ${message.content}, Author: ${message.from}`);
  }
  return true;
};

const processMessage = (message: Message) => queue.add(() => proc(message));

export const commandSlice = (body: string, number: number) => {
  return String(body).slice(number).trim();
};

const getCommand = (body: string) => {
  const regex = /^\.[A-Za-z0-9]+/;

  const command = regex.exec(body)[0].split(".")[1];

  return command;
};

const getCaption = (caption: string) => {
  const regex = /^\.[\S\A-Za-z]+$/;

  const command = regex.exec(caption)[0].split(".")[1];

  return command;
};

export async function start(client: Client) {
  // await client.getAllChats(false)
  // .then(async (chats) => {
  // chats.forEach((chat) => client.sendText(chat.id, 'Iniciando expediente, um grande dia a todos!!'));
  // });

  const unreadMessages = await client.getAllUnreadMessages();
  unreadMessages.forEach(processMessage);

  await client.onMessage(async (message: Message) => {
    const niino = await prisma.notallow_commands.findMany({
      where: {
        groupId: message.chatId,
      },
    });

    const groupId = niino.map((field) => field.groupId);
    const command = niino.map((field) => field.command);
    const validCommandRegex = /^\.[\sA-Za-z0-9]+\s.+/;
    const validCommandCaptionRegex = /^\.[\S\A-Za-z]+$/;
    const msgBody = String(message.body).toLowerCase();
    const msgCaption = String(message.caption).toLowerCase();

    const regex = new RegExp(
      "(desisto|desistir|desistindo|desisti|recaindo|recaída|recaida|jogar no vasco|Jogar no Vasco|quero parar tudo| quero jogar tudo pro alto)"
    );
    const regexCharcoal = new RegExp("(carvão|carvao)");

    if (regex.test(message.body)) {
      await client.sendText(
        message.from,
        "Não desista amigo, confie no seu potencial!"
      );
    }

    if (regexCharcoal.test(message.body)) {
      await client.sendText(message.from, "Biri ou Biru?");
    }

    if (
      groupId.includes(`${message.chatId}`) &&
      command.includes(`${message.body.split(" ").shift()}`)
    ) {
      client.sendText(message.from, "Proibido este comando neste grupo!");
    } else {
      const commands = {
        letra: MusicController,
        pb: BlockController,
        desb: UnblockController,
        fig: StickerQuotedController,
        gif: StickerAnimatedQuotedController,
        monkey: MonkeyController,
        mt: GetAllMembersController,
        img: GoogleSearchImagesController,
        top5: Get5MembersController,
        apg: DeleteMessageController,
        fimg: StickerfromImageController,
        kill: ShutdownCommandController,
        encaminhar: SendMessageGlobalController,
        menu: MenuController,
        regras: GetDescriptionController,
        wikipedia: WikipediaController,
        admins: GetAllAdminsController,
        menu1: Menu1Controller,
        menu2: Menu2Controller,
        menu3: Menu3Controller,
        menu4: Menu4Controller,
        menu5: Menu5Controller,
        menu6: Menu6Controller,
        menu7: Menu7Controller,
        menu8: Menu8Controller,
        audio: TTSController,
        ban: BanController,
        unban: UnbanController,
        dicionario: DictionaryController,
        cat: CatController,
        inu: InuController,
        dog: DogController,
        sugestao: SuggestionController,
        detectar: DetectController,
        viadometro: GayMetterController,
        casal: CoupleRandomController,
        fechar: GroupToAdminsOnlyController,
        abrir: UndoToAdminsOnlyController,
        dono: OwnerController,
        youtube: YoutubeController,
        rm: EraseController,
        rmMusic: EraseMusicController,
        divulgar: DisclosureController,
        casimiro: WordOfCazeController,
        top1: Get1MemberController,
        top3: Get3MemberController,
        rolla: RollDiceController,
        roletarussa: RouletteRussianController,
        pica: MeterofDickController,
        cornometro: CornoMeterController,
        adblock: BlockAdsController,
      };

      if (
        validCommandRegex.test(msgBody) ||
        validCommandCaptionRegex.test(msgBody)
      ) {
        try {
          const service = new commands[getCommand(msgBody)]();
          await service.execute(client, message);
        } catch {
          if (message.isGroupMsg === false) {
            await client.sendText(
              message.from,
              "Olá este comando não existe ou está escrito errado!"
            );
          }
        }
      }
    }

    const commandsCaption = {
      fig: StickerController,
      gif: StickerAnimatedController,
    };

    if (validCommandCaptionRegex.test(msgCaption)) {
      try {
        const service = new commandsCaption[getCaption(msgCaption)]();
        await service.execute(client, message);
      } catch {
        return null;
      }
    }
  });

  await client.onMessage(processMessage);
  queue.start();
}
