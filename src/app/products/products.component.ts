import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public name:string='';
  public price:number=0;
  public rating:number=0;
  public freedelivery:string='';
  public searchItem:string = '';

  public products :any[]=[
    {
      name:'pen',
      price:50,
      rating:4,
      freedelivery:'yes'
    },
    {
      name:'laptop',
      price:50000,
      rating:5,
      freedelivery:'yes'
    },
    {
      name:'phone',
      price:5000,
      rating:4,
      freedelivery:'no'
    },
  ]

  

  term(){
    var result1 = this.products.filter((product:any) => product.name.includes(this.searchItem))
     this.products = result1
  }

  showOnlyFreeDelivery(){
    var result = this.products.filter((product:any) => product.freedelivery=='yes')
    this.products = result
  }

  lowtohigh(){
    var result2 = this.products.sort((a:any,b:any) => a.price-b.price)
    this.products=result2

  }
  hightolow(){

  }
  ratinghightolow(){

  }
  ratinglowtohigh(){

  }
  discount(){
    var result3 = this.products.map((p:any) => {
      p.price= p.price/2
      return p
    })
    
  }
  pricewithdelivery(){
    var result4 = this.products.map((p:any) => {
      p.price= p.price+20
      return p
    })

  }
  totalprice(){
    var result5=this.products.reduce((sum:number,product:any)=>sum+product.price,0)
    alert(result5)
  }
  Totalcartitems(){
   alert(this.products.length)
  }
  delete(i:number){
     this.products.splice(i,1)
  }
  Addtocart(){

    var product={
      name:this.name,
      price:this.price,
      rating:this.rating,
      freedelivery:this.freedelivery,
    }

    this.products.push(product)
  }
}
