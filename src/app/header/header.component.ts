import { Component, Input } from '@angular/core';
import { GroupService } from '../service/group.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() newGroupName = '';
  constructor(public groupService: GroupService){}
}