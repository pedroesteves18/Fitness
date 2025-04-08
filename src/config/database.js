import { Sequelize } from "sequelize";



const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/config/banco'
})

const testarConexao = async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados!');
    } catch (error) {
      console.log('Erro ao conectar ao banco de dados', error);
    }
  };
  
  testarConexao();

export default sequelize