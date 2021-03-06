
const argv=require('yargs')
.command('crear','Crear un elemento por hacer',{
	descripcion:{
		alias:'d',
		demand:true,
		desc:'Descripción de la tarea por hacer'
	}
})
.command('actualizar','Actualiza el estado completado de una tarea',{
	descripcion:{
		alias:'d',
		demand:true,
		desc:'Descripción de la tarea por hacer'
	},
	completado:{
		alias:'c',
		default:true,
		desc:'Marca como completado o pendiente la tarea'
	}
})
.command('borrar','Borra tareas completadas del listado',{
	descripcion:{
		alias:'d',
		demand:true,
		desc:'Descripción de la tarea por borrar'
	}
})
.help()
.argv;

module.exports={
	argv
}



