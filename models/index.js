// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

ProductTag.belongsTo(Product, {
  foreignKey: "product_id",
});
ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id",
});

Product.hasMany(ProductTag, {
  onDelete: "CASCADE",
});

Tag.hasMany(ProductTag, {
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: "product_tag",
    unique: "true",
  },
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: "product_tag",
    unique: "true",
  },
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
