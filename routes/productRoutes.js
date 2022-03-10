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
router.route("/getSingleProduct").get(getSingleProduct);
router.route("/createProduct").post(createProduct);
router.route("/updateProduct").post(updateProduct);
router.route("/deleteProduct").post(deleteProduct);
router.route("/uploadImage").post(uploadImage);

module.exports = router;
