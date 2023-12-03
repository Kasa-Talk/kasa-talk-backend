'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diskusi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diskusi.init({
    isi: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diskusi',
  });
  return Diskusi;
};