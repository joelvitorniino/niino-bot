import Niino from "../models/Niino";
import { Request, Response } from 'express';

class NiinoController {
    async create(request: Request, response: Response) {
        const { groupId, command } = request.body;

        if(command === '') {
            response.json({ data: "Comando em branco." })
        } else {
            await Niino.create({
                groupId: groupId,
                command: command
            });
    
            response.json({ data: "Criado com sucesso." });
        }
    };

    async delete(request: Request, response: Response) {
        const { groupId, command } = request.body;

        if(command === "") {
            response.json({ data: "Comando em branco." })
        } else {
            await Niino.destroy({
                where: {
                    groupId: groupId,
                    command: command
                }
            });
    
            response.json({ data: "Removido com sucesso!" });    
        }
    };
}; 

export default NiinoController;