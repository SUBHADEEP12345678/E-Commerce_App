import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddlewares.js";
import {
  ProductCountController,
  ProductListController,
  ProductPhotoController,
  ProductfiltersController,
  SearchProductsController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  relatedProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
//import ExpressFormidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", ProductPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

//filter product
router.post("/product-filters", ProductfiltersController);

//product count
router.get("/products-count", ProductCountController);

//product per page
router.get("/product-list/:page", ProductListController);

//Search product
router.get("/search/:keryword", SearchProductsController);

//Smiller Product
router.get("/related-poduct/:pid/:cid",relatedProductController);

//Category wise product
router.get('/product-category/:slug',productCategoryController)
export default router;
