const Sequelize =  require("sequelize")

const sequelize = new Sequelize('cadastro2','joaoone','jv2702015', {
    host: 'localhost',
    dialect: 'mysql'

});

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize
}