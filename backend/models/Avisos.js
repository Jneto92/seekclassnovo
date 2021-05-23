const db = require('./db');
const Avisos = db.sequelize.define('avisos', {
    professor:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    materia:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    turma:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    aviso:{
        type: db.Sequelize.STRING
    }
});
//Avisos.sync({force: true});
module.exports = Avisos;