import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'products';

  productService= inject(ProductService)
  cars= this.productService.cars

  addToCart(id:number){
this.productService.addToCart(id)
  }

  removeItem(id:number){
    this.productService.removeFromCart(id)
  }
 

}
