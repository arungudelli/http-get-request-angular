import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
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
    this.userService.getUsers().subscribe((response:UserInformation) => {
      debugger;
      this.userInfo = response;
      return;
      console.log(response);
      this.userInfo.page = response?.page;
      this.userInfo.per_page = response?.per_page;
      //this.userInfo.support = response.support;
      this.userInfo.total = response?.total;
      this.userInfo.total_pages = response?.total_pages;
      this.userInfo.data = response?.data?.map(item => {
        var user = {} as User;
        user.avatar = item?.avatar;
        user.email = item?.email;
        user.first_name = item?.first_name;
        user.last_name = item?.last_name;
        user.id = item?.id;
        return user;
      });
    });
  }

}
