const fs = require('fs')


/*
Leer el contenido de a ruta (rraddir)
del arreglo generado por readdri eliminar todo el contenido
*/

const deleteAll = () => {
    fs.readdir('./newDir', 'utf8', (error, data) => {
        if (error) {
            console.log('Falló al leer el archivo', error)
            return
        }
    
        data.forEach(element => {
    
            fs.stat(`./newDir/${element}`, (err, stats) => {
                if (err) {
                    console.log('Falló al identificar el archivo', err)
                  return
                }
                //console.log(stats.isFile())
                if (stats.isFile()) {
                    console.log('Es un archivo', element)
                    fs.unlink(`./newDir/${element}`, (error) => {
                        if (error) {
                            console.log('Falló al eliminar el archivo', error)
                            return
                        }
                        console.log('El archivo ha sido eliminado')
                    })
                }

                // if (stats.isDirectory()) {
                //     console.log('Es un directorio', element)
                //     deleteAll()
                //     return
                // }
              })            
        });

        fs.stat(`./newDir`, (err, stats) => {
            if (err) {
                console.log('Falló al identificar el archivo', err)
              return
            }

            if (stats.isDirectory()) {
                console.log('Es un directorio')
                fs.rmdir('./newDir', error => { 
                    if (err) {
                        console.log('Falló al eliminar el directorio', error)
                      return
                    }
                    console.log('El directorio ha sido eliminado')
                  }); 
                return
                }
        })

        console.log('El archivo contiene', data)
    
    })
}

deleteAll()