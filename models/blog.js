'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      blog.hasMany(models.comment, { foreignKey: 'postId', as: 'comment' });
    }
  }
  blog.init({
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};