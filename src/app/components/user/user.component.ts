import { Component, OnInit } from '@angular/core';

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

  constructor() { 
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
  }

  onClick(){
    this.name = 'Spider-Man';
    this.hobbies.push('New Hobby');
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