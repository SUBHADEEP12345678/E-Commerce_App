import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  CreateCategoryController,
  categoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/CategoryController.js";
const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CreateCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get All Category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//Delete Ctaegory
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
