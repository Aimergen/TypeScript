import { Request, Response } from "express";
import UserModel, {IUser} from "../models/userModel"

export const countAllUsers =async (req:Request, res: Response) => {
    res.json(await UserModel.count({}));
};

//bugdiin avah
export const findAllUsers= async(req: Request, res: Response)=>{
       const {limit ='10', skip = '0'}= req.query;
       const result: IUser[]= await UserModel.find()
            .limit(Number(limit))
            .skip(Number(skip));
           res.json(result);
};

//neg shirhegiig avah
export const findUserById =async(req: Request, res: Response)=>{
    const {_id}= req.params;
    const result: IUser | null =await UserModel.findById(_id);
    res.json(result);
};

//shineer nemeh
export const createUser =async(req:Request, res: Response)=>{
    const newUser =await UserModel.create(req.body);
    res.json(newUser);
}

//update hiih 
export const updateUser =async(req:Request, res: Response)=>{
    const{_id}= req.params;
    const body= req.body;
    const result:IUser[] | null= await UserModel.findByIdAndUpdate(_id,body);
    res.json(result);
}

//ustgah
export const deleteUser =async(req: Request, res: Response)=>{
    const {_id}= req.params;
    const result: IUser | null=await UserModel.findByIdAndDelete(_id);
    res.json(result);
}
