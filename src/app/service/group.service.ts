import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupName = 'Healthy lifestyle';
  newGroupName = '';
  editGroupName() {
    if (this.newGroupName !== '') {
      this.groupName = this.newGroupName;
      this.newGroupName = '';
    }
  }
}        