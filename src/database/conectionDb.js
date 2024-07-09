import  Sequelize from 'sequelize';
import {config} from 'dotenv';
config();

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: 'mysql',
});
sequelize.authenticate()
  .then(() => {
    console.log('Conection successfully')
  })
  .catch(err => {
    console.log('error in the connection')
  });

  export default sequelize;