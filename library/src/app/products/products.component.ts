import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products!:any

  constructor(private ps:ProductService, private route:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.products= this.ps.products
  }
  loadProduct(id:number){
    // this.router.navigate([id], {relativeTo:this.route})// relative
    this.router.navigate(['products',id])// absolute

  }
}
