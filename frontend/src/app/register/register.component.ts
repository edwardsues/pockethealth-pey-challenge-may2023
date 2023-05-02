import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }
  favColour = 'Red';
  onSelected(value:string) : void {
    this.favColour = value;
  }

  ngOnInit(): void { }

  onFormSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;

    
    this.userService.postRegister(name, email, this.favColour).subscribe((data) => {
      // console.log(data)
      // console.log(this.favColour)
      // Once we've received a response, take the user to the home page
      this.router.navigateByUrl('/home');
    })
  }

}
