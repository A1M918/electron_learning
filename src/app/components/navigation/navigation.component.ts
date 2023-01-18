import { Component } from '@angular/core';
import { User, UserRoles } from 'src/app/constants/user.constants';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isAdmin: Boolean = false;
  public constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    const user = this.userService.userObservable.subscribe((userData) => {
      this.checkIfAdmin(userData);
      return userData;
    });
  }

  checkIfAdmin(user: User) {
    user.assignedRoles.forEach((role: UserRoles) => {
      if(role.canAccessAdmin){
        this.isAdmin = role.canAccessAdmin;
      }
    })
  }
}
