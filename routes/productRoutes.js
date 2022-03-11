const express = require("express");
const {
  authenticatedUser,
  authorizePermissions,
} = require("../middleware/authentication");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

router.route("/getAllProducts").get(getAllProducts);

router
  .route("/createProduct")
  .post(authenticatedUser, authorizePermissions("admin"), createProduct);

router
  .route("/uploadImage")
  .post(authenticatedUser, authorizePermissions("admin"), uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch(authenticatedUser, authorizePermissions("admin"), updateProduct)
  .delete(authenticatedUser, authorizePermissions("admin"), deleteProduct);

module.exports = router;
