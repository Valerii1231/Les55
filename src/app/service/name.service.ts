
import { Injectable } from '@angular/core';
import { UserService, User } from '../service/users.service';

@Injectable()
export class NameService {
  newName = '';
  constructor(private userService: UserService) {}
  editName(userId: number) {
    const user = this.userService.getUsers().find(u => u.id === userId);  
    if (user && this.newName !== '') {
      user.name = this.newName;
      this.newName = '';
    }
  }
}


