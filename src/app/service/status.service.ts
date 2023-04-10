
import { Injectable } from '@angular/core';
import { UserService, User } from './users.service';

@Injectable()
export class StatusService {
  newStatus = '';
  constructor(private userService: UserService) {}
  editStatus(userId: number) {
    const user = this.userService.getUsers().find(u => u.id === userId);  
    if (user && this.newStatus !== '') {
      user.status = this.newStatus;
      this.newStatus = '';
    }
  }
}

