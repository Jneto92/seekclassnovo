const db = require('./db');
const Grade = db.sequelize.define('grade', {
    
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    professor:{
        type: db.Sequelize.STRING
    },
    turno:{
        type: db.Sequelize.STRING
    },
    semestre:{
        type: db.Sequelize.INTEGER
    },
    carga_horaria:{
        type: db.Sequelize.INTEGER
    }
});
/*Grade.create(
{
    nome: 'REDES DE COMPUTADORES E INTERNET',
    professor: 'DIOGENES REIS',
    turno: 'V',
    semestre: 1
}
);*/

//Grade.sync({force: true});
module.exports = Grade;