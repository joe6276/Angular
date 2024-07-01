import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { Blog } from '../Models/Blog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export class MyBlogsComponent implements OnInit {
  blogs:Blog[]=[]
  
  constructor(private blogServices:BlogService, private store:Store<any>){ }
  showParagraph$=this.store.select(state=>state.dummy.showParagraph)
  count$= this.store.select(state=>state.counter.count)
  onChange(){
    // this.showParagraph= !this.showParagraph
    this.store.dispatch({type:'Toggle'})
  }
  ngOnInit(): void {
    this.blogServices.getmyBlogs().subscribe(res=>{
      this.blogs=res
    })
  }

  onIncrement(){
      this.store.dispatch({type:'Increment'})
  }

  onDecrement(){
    this.store.dispatch({type:'Decrement'})
  }

  onReset(){
    this.store.dispatch({type:'Reset'})
  }
}
