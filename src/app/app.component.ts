
import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UserService, User } from './service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { GroupService } from './service/group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];

  constructor(
    private userService: UserService,
    public groupService: GroupService,
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.groupName = this.groupService.groupName;
    this.componentRef.instance.num = this.users.length;
    this.componentRef.instance.close.subscribe(() => {
      this.componentRef.destroy();
    });
  }
}