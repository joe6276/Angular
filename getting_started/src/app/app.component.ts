import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPeopleComponent } from './add-people/add-people.component';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';
import { Product } from './Models/Product';
import { ShortenDescription } from './Pipes/ShortenDescription';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPeopleComponent,FormsModule,ProductComponent, CommonModule, DisplayComponent, ShortenDescription, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'getting_started';
  searchTerm=""
  products:Product[]=[
    {
      Id:1,
      Name:"Laptop",
      Description:"Lenovo Laptop with 16 Gb RAM ",
      price:3000
    },

    {
      Id:2,
      Name:"Flash Disk",
      Description:" SanDisk Flash ",
      price:30
    },
    {
      Id:3,
      Name:" HP Mouse",
      Description:"Mouse",
      price:30
    }
  ]

  addProduct(){
    this.products=[]
      }
  todaysDate= new Date()
  money =330030
  percent =0.8

  greeting= new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Hello There")
    }, 2000)
  })
  peoples:{Name:string,Age:number}[]=[{Name:"John", Age:12}]
  addNewPerson(eventData:{Name:string, Age:number}){
    this.peoples.push(eventData)
  }

  deletePerson(eventData:{id:number}){
    this.peoples.splice(eventData.id, 1)
  }
}
