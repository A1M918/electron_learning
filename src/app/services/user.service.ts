import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRoles } from '../constants/user.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  isAdmin: Boolean = false;
  userObservable: Observable<User>;

  constructor() {
    const self = this;

    this.userObservable = new Observable((observer) => {
      observer.next(this.getUserInfo());

      return {
        unsubscribe() {
          console.log('Unsub User');
        }
      }
    });

    this.user = {
      name: 'Aamir Mughal',
      assignedRoles: [{
        roleName: 'admin',
        canAccessAdmin: true,
      }],
      email: '',
      phone: '',
      details: ''
    };
   };

  getUserInfo(): User {


    return this.user;
  }

  checkIfAdmin(user: User): Boolean {
    return (user.assignedRoles.filter((role: UserRoles) => role.canAccessAdmin)).length > 0;
  }
}
