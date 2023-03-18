import express from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/validate.product';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get('/', productController.getAll);
productRouter.post('/', validateProduct, productController.create);

export default productRouter;