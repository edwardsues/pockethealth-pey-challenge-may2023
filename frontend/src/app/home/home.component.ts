import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cur_user_info = this.userService.getUserDetails();
  current_name = this.cur_user_info?.name
  current_userID = this.cur_user_info?.userId
  current_favcolour = this.cur_user_info?.favColour.toLowerCase()

  constructor(
    // we need the user service
    private userService: UserService,
  ) { }

  ngOnInit(): void { }

  // ngOnInit() {

  //   // console.log(this.cur_user_info)

  //   // make sure that the page doesn't print an empty string for favourite colour (this is from when i had the user enter their favourite colour in a text box)
  //   // if (this.current_favcolour == ""){
  //   //   this.current_favcolour = "(not specified)"
  //   // }
  // }

}