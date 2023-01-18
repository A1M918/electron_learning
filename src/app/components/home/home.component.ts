import { Component, Inject, OnInit } from '@angular/core';
import { User, UserRoles } from 'src/app/constants/user.constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin: Boolean = false;
  public constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.userService.userObservable.subscribe((userData) => {
      this.isAdmin = this.userService.checkIfAdmin(userData);
    });
  }

}
