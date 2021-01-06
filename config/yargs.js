const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea por hacer'
    },
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borrar una tarea', opts)
    .help()
    .argv;


module.exports = {
    argv
}