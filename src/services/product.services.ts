import ProductModel from '../models/products.model';
import Product from '../interfaces/product.interface';
import connection from '../models/connection';

export default class ProductService {
  public model: ProductModel;

  constructor(model: ProductModel = new ProductModel(connection)) {

  }
}

const getAll = async (): Promise<Product> => {
  const product = await this.model.getAll();
  return product;
};
  
const getById = async (id) => {

};

const create = async (product) => {

};

const update = async (product, id) => {

};

const remove = async (id) => {

};