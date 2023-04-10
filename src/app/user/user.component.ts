

import { Component, Input } from '@angular/core';
import { GroupService } from '../service/group.service';
import { NameService } from '../service/name.service';
import { StatusService } from '../service/status.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [NameService, StatusService]
})

export class UserComponent {
  @Input() img = '';
  @Input() name = '';
  @Input() status = '';
  @Input() id = '';
  user: any;

  constructor(
    public groupService: GroupService,
    public nameService: NameService,
    public statusService: StatusService
  ) {}

editName(userId: number) {
  this.nameService.editName(userId);  
}
editStatus(userId: number) {
  this.statusService.editStatus(userId);  
}
  }
