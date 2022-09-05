let producto1 = Number(prompt(`Ingrese en forma numerica el producto solitado:
 1. Juego de arandanos X 1L $200
 2. Leche de almendras X 1L $300
 3. Leche de coco X 1L $450
 4. Aceite de coco x 500g $500 `))

 let cantidades2 = Number(prompt ("Ingrese en forma numerica las cantidades de productos que solicita"))
 
 function precio(producto,cantidades){

     switch(producto){
        case 1:
            return cantidades*200
        break
        case 2:
            return cantidades*300
        break
        case 3:
            return cantidades*450
        break
        case 4:
            return cantidades* 500
        break
        default :
        return "Falta ingresar Producto o cantidades"
        break
     }
   }

    let total= precio(producto1,cantidades2)

   
 alert (`El precio a abonar es de $ ${total}`)


