# mutaciónes y querys Crud venta armas albion
#NOMBRE DE LA BDD: "ventas"

mutation CrearWeapon1{
  createWeapon(
    data: {
      nombre: "Hoja Clarent",
      rama: "Maestro",
      calidad: "Bueno",
      encantamiento: 3,
      precio:750000,
      stock: 1
    }  
  )
  {
    id
    nombre
    rama
    calidad
    encantamiento
    precio
    stock
  }
}

mutation CrearWeapon2{
  createWeapon(
    data: {
      nombre: "Espada ancha",
      rama: "Experto",
      calidad: "Normal",
      encantamiento: 1,
      precio:59000,
      stock: 4
    }  
  )
  {
    id
    nombre
    rama
    calidad
    encantamiento
    precio
    stock
  }
}

query Listar{
  weaponList{
    nombre
    calidad
    precio
  }
}

query Buscar{
  weaponFind(id: 1){
    nombre
    calidad
    precio
    stock
  }
}

mutation Actualizar{
  updateWeapon(
    id: 2,
    data: {
      nombre:"Espada larga"
      precio:100000
    }
  )
  {
    id
    nombre
    rama
    calidad
    encantamiento
    precio
    stock
    
  }
}

mutation Eliminar{
  deleteWeapon(id: 2)
}




