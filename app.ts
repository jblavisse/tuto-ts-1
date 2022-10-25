// Ecrire un algorithme permettant d'avoir une liste de 4 produits : 
//  TV Samsung à 400€ , Ordinateur à 700 € , 
// Téléphone Huawei à 200€,  Portable à 900€

type Product = {
    name: string,
    brand?: string,
    price: number
}

let products: Product[] = [
       { name: "TV", brand: "Samsung", price: 400,},
       { name: "Ordinateur", price: 700 },
       { name: "Téléphone", price: 200},
       {  name: "Portable", price: 900 }
]