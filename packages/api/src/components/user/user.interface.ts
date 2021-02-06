import { Document } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { IPayload } from '../../middleware/interfaces.middlewares';

export interface IProduct {
  productName: string;
  ProductDescription: string;
  productPrice: number;
  productImage: string;
}

export interface IUser extends Document {
  username?: string;
  email: string;
  password: string;
  cart?: IProduct[];
  productsBought?: IProduct[];
}

export interface IController {
  (req: Request, res: Response, next: NextFunction): Promise<void | Response>;
}

export interface IDataForToken extends IPayload {
  err?: { msg: string; statusCode: number };
}

export interface IResponse {
  data: null | object | [] | string;
  msg: string;
  err: any;
  statusCode: number;
}
