import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../model/userinformation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userInfo : UserInformation;

  constructor(public userService: UserService) { 
    this.userInfo = {} as UserInformation;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
        this.userInfo = response;
    });
  }

}
