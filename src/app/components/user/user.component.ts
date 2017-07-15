import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'Tony Stark';
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Posts[];

  constructor(private dataService:DataService) { 
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.name = 'Peter Parker'
    this.age = 30;
    this.email = 'parker@gmail.com';
    this.address = {
      street: '50 st avenue',
      city: 'Boston',
      state: 'CA'
    }
    this.hobbies = ['swing', 'climb', 'design'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts.title);
      this.posts = posts;
    });
  }

  onClick(){
    this.name = 'Spider-Man';
    this.hobbies.push('fight');
  }

  addHobby(hobbyAdd){
    console.log(hobbyAdd);
    this.hobbies.unshift(hobbyAdd);
    return false;
  }

  deleteHobby(hobbyDel){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobbyDel){
        this.hobbies.splice(i ,1);
      }
    }
  }

}

interface Address{
    street:string,
    city:string,
    state:string
  }

  interface Posts{
    id:number,
    title:string,
    body:string,
    userId:number
  }