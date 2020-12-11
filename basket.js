class Product{
    constructor(_name, _price ,_fname, _fprice){ 
    this.name = _name;
    this.price = _price  
 }

 get Name(){
     return this.name;
 }
 get Price(){
     return this.price
 }
}

class Basket{

    constructor(){
        this.product = [];
    }
    addProduct(amount , product){
    console.log(this.product.push(...Array(amount).fill(product)) );
    }
    get calculateTotal(){
        return this.product.map(function(product){
            return product.Price
        })
        .reduce(function(a,b){
            return a + b;
        },0);
    }
    get printShoppingInfo(){
        let total = this.calculateTotal;
        console.log('One Has To Pay Total: ' + total);
    }
}

const Pkiller = new Product('Painkiller' ,  30);
const Bread   = new Product('Bread     ' ,  65)
const Milk    = new Product('Milk      ' , 120)
const Eggs    = new Product('Eggs      ' , 180)
const Suger   = new Product('Suger     ' , 105)
const Rice    = new Product('Rice      ' , 180)
const basket  = new Basket();
basket.addProduct(1 , Pkiller)
basket.addProduct(1 , Bread)
basket.addProduct(1 , Milk)
basket.addProduct(1 , Eggs)
basket.addProduct(1 , Suger)
basket.addProduct(1 , Rice)
basket.printShoppingInfo;
console.log(basket)


