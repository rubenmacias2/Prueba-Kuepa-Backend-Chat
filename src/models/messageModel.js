import { DataTypes } from 'sequelize';
import sequelize from '../database/conectionDb.js';
import User from './userModel.js'; // Importar User después de que esté definido

const Mensaje = sequelize.define('Mensaje', {
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
  tableName: 'MENSAJE'
});

Mensaje.belongsTo(User, { foreignKey: 'usuario' });
User.hasMany(Mensaje, { foreignKey: 'usuario' });

export default Mensaje;