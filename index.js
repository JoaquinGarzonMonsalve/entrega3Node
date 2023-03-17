import fs from 'fs'
import {producto1, producto2,producto3,producto4,producto5,producto6,producto7,producto8} from'./datos.js';
 let productoExpres;
 
 //Class container
class UserManager {
    constructor(filename) {
        this.filename = filename;
        this.producto = [];
    }

    createUSer=async(newUser)=>{

        const filenameExists = fs.existsSync(this.nameFile);
        if(!filenameExists){
            await fs.promises.writeFile(this.filename,"[]");
        }
    }

    //Actualizamos modificaciones
    async actualizarArchivo(){
        fs.promises.writeFile('./Usuarios.json', JSON.stringify(this.producto, null, 2), 'utf-8');
    }

    async getAll() {

        const data = await this.obtenerJson();
        return data

    }

    
    async addProduct(dataImpor){
        
        
        this.producto.push(dataImpor)
        
        
        return await this.producto;
    }

    // Metodo Save(Object)

    async saveProducto(){
        
        const productos2=JSON.stringify(this.producto)
         console.log(productos2)
        const productoExpres=JSON.parse(productos2);
        
        
        
        return await productos2;
    }

     //Traemos el Producto con la ID 
     async getProductById(id){
        //Traemos los archivos en formato JSON para poder realizar la busqueda del ID
        const productos = await this.obtenerJson();

        //Buscamos si el ID existe, si no existe enviamos NOT FOUND, si existe mostramos cual es el producto
        const busqueda = productos.find(dato => dato.id === id);
        if(!busqueda){
            throw new Error('Not found')
        }else{
            console.log(`El producto con id ${id} es:`);
            console.log(busqueda)
        }
    }

  
    

    // Metodo deleteById(Number)
    async deleteById(id) {

    }

    async deleteAll() {

    }

    main(){
        console.log("creando archivo.jsonpor si no existe");
        producto11.createUSer();
        producto11.addProduct(producto1);
        producto11.addProduct(producto2);
        producto11.addProduct(producto3);
        producto11.addProduct(producto4);
        producto11.addProduct(producto5);
        producto11.addProduct(producto6);
        producto11.addProduct(producto7);
        producto11.addProduct(producto8);
        producto11.saveProducto(this.producto)
        producto11.actualizarArchivo()
        
        
    }
} 


const FILENAME_PATH = "./Usuarios.json";

const producto11 = new UserManager(FILENAME_PATH);


 producto11.main();

//console.log(producto1.producto);
//producto1.saveProducto(this.producto)
const nuevonuevo=JSON.stringify(producto1.producto)

// const app =expres();
// const PORT=8080;

// app.get('/', (req, res) => {
//     res.send(producto1.producto)
// })

console.log(` prueba producto1.producto${productoExpres}`);

