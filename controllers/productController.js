const createProduct = (req, res) => {
  res.send("Create product");
};

const getAllProducts = (req, res) => {
  res.send("get all products");
};

const getSingleProduct = (req, res) => {
  res.send("get single product");
};

const updateProduct = (req, res) => {
  res.send("update product");
};

const deleteProduct = (req, res) => {
  res.send("delete product");
};

const uploadImage = (req, res) => {
  res.send("upload image");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
