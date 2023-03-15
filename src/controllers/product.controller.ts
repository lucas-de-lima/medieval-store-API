import { Request, Response } from 'express';
import ProductService from '../services/product.services';
import statusCodes from './statusCodes';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(statusCodes.OK).json(products);
  };
      
  // public getById = async (req: Request, res: Response) => {
  //   const { body } = req;
  //   return res.status(200).json();
  // };
    
  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productService.create(product);
    return res.status(statusCodes.CREATED).json(newProduct);
  };
    
  // public update = async (req: Request, res: Response) => {
  //   const { body } = req;
  //   return res.status(200).json();
  // };
    
  // public remove = async (req: Request, res: Response) => {
  //   const { body } = req;
  //   return res.status(200).json();
  // };
}