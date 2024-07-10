import { DataTypes } from 'sequelize';
import sequelize from '../database/conectionDb.js';
import User from './userModel.js';

const menssage = sequelize.define('Mensaje', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contenido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'User',
      key: 'nombreUsuario'
    }
  }
}, {
  tableName: 'MENSAJE',
  timestamps: false,
},);

menssage.belongsTo(User, { foreignKey: 'usuario' });
User.hasMany(menssage, { foreignKey: 'usuario' });

export default menssage;