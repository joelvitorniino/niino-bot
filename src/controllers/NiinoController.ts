import { Request, Response } from 'express';
import prisma from "../prisma";

class NiinoController {
  async create(request: Request, response: Response) {
    const { groupId, command } = request.body;

    if (command === "") {
      response.json({ data: "Comando em branco." });
    } else {
      await prisma.notallow_commands.create({
        data: {
          command,
          groupId,
        },
      });

      response.json({ data: "Criado com sucesso." });
    }
  }

  async delete(request: Request, response: Response) {
    const { groupId, command } = request.body;

    if (command === "") {
      response.json({ data: "Comando em branco." });
    } else {

        const commandId = await prisma.notallow_commands.findFirst({
            where: {
                groupId,
                command
            }
        })

        await prisma.notallow_commands.delete({
          where: {
            id: commandId.id,
          },
        });

      response.json({ data: "Removido com sucesso!" });
    }
  }
}; 

export default NiinoController;