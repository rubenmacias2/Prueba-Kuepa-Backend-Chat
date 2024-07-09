import { DataTypes } from 'sequelize';
import sequelize from '../database/conectionDb.js';

const User = sequelize.define('User', {
  nombreUsuario: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'USUARIO'
});

export default User;