import { Request, Response } from "express";
import MovieModel, {IMovie} from "../models/movieModel"

export const countAllMovies =async (req:Request, res: Response) => {
    res.json(await MovieModel.count({}));
};

//bugdiin avah
export const findAllMovies= async(req: Request, res: Response)=>{
       const {limit ='10', skip = '0', ordering="releasedAsc"}= req.query;

        let sort = "";
        switch (ordering) {
            case 'releasedDesc':
                sort ="-released";
                break;
            case 'imdbRatingDesc':
                sort ="-awards.wins";
                break; 
            case 'titleAsc':
                    sort ="title";
                    break;    
            case 'titleDesc':
                        sort ="-title";
                        break;
            default:
                sort = 'released';
                break;            
        }

       const result: IMovie[]= await MovieModel.find({})
            .sort(sort)
            .limit(Number(limit))
            .skip(Number(skip));
            res.json(result);
};

//neg shirhegiig avah
export const findMovieById=async(req: Request, res: Response)=>{
    const {_id}= req.params;
    const result: IMovie | null =await MovieModel.findById(_id);
    res.json(result);
};

//shineer nemeh
export const createMovie =async(req:Request, res: Response)=>{
    const newUser =await MovieModel.create(req.body);
    res.json(newUser);
}

//update hiih 
export const updateMovie =async(req:Request, res: Response)=>{
    const{_id}= req.params;
    const body= req.body;
    const result:IMovie[] | null= await MovieModel.findByIdAndUpdate(_id,body);
    res.json(result);
}

//ustgah
export const deleteMovie =async(req: Request, res: Response)=>{
    const {_id}= req.params;
    const result: IMovie | null=await MovieModel.findByIdAndDelete(_id);
    res.json(result);
}
