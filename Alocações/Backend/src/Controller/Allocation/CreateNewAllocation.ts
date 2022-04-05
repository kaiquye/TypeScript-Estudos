import { NextFunction } from "express";
import { Service } from '../../service/allocation/CreateAllocationIntern'


export function Create(req: Request, res: Response, next: NextFunction) {

    let CreateNewAllocationIntern = await new Service().Create({});

}