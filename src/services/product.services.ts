import ProductModel from '../models/products.model';
import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public getAll = async (): Promise<IProduct[]> => {
    const product = await this.model.getAll();
    return product;
  };
    
  // public getById = async (id) => {
  
  // };
  
  public create = async (product: IProduct): Promise<IProduct> => {
    const newProduct = await this.model.create(product);    
    return newProduct;
  };
  
  // public update = async (product, id) => {
  
  // };
  
  // public remove = async (id) => {
  
  // };
}
