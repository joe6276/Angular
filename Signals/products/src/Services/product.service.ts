import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

interface Product{
  id:number
  image:string
  title:string
  price:number
}

interface Cart{
  id:number
  image:string
  title:string
  coupon:{name:string, amount:number}
  price:number
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  cars:Product[]=[
    {
      id:1,
      title:"Mercedes Benz",
      price:2000,
      image:'https://cdn.pixabay.com/photo/2016/12/03/18/58/amg-1880384_1280.jpg'
    },
    {
      id:2,
      title:"Range Rover",
      price:2100,
      image:'https://cdn.pixabay.com/photo/2017/01/28/16/04/range-rover-2015661_1280.jpg'
    },
    {
      id:3,
      title:"Mustang",
      price:3500,
      image:'https://cdn.pixabay.com/photo/2017/05/23/20/07/mustang-2338358_1280.jpg'
    }, {
      id:4,
      title:"Audi",
      price:3000,
      image:'https://cdn.pixabay.com/photo/2022/11/28/08/46/traffic-7621527_1280.jpg'
    },
    {
      id:5,
      title:"BMW",
      price:3000,
      image:'https://cdn.pixabay.com/photo/2016/04/21/22/48/bmw-1344713_1280.jpg'
    }


    
  ]

  cart:WritableSignal<Cart[]>=signal([])
  ///quantity
  quantity:Signal<number>=computed(()=> this.cart().reduce((acc, item)=>acc +item.quantity,0))
  subTotal:Signal<number>= computed(()=> this.cart().reduce((acc,item)=> acc + (item.price *item.quantity-(
    item.coupon.name!=''? item.coupon.amount:0
  )),0))
  deliveryFee:Signal<number> = computed(()=> this.subTotal()>10000? 0 : this.subTotal() *0.05)
  tax:Signal<number> = computed(()=> this.subTotal() *0.16)
  total:Signal<number> =computed(()=> this.subTotal() + this.deliveryFee() + this.tax())


  addToCart(id:number){
    let product= this.cars.find(x=>x.id==id)

    if(product){
      //add to cart
      //should i update quantity or just add
      let index= this.cart().findIndex(x=>x.id === product.id)
      if(index>=0){
        let array= [...this.cart()]
        array[index].quantity++
        this.cart.set(array)
      }else{
        this.cart.update(items=> [...items,{...product, quantity:1, coupon:{name:'10OFF', amount:1000}} ])
      }
    }

    console.log(this.cart());
    
  }
  removeFromCart(id:number){
    this.cart.update(items=>items.filter(x=>x.id !== id))
  }

}
