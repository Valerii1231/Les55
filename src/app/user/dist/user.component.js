"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var name_service_1 = require("../service/name.service");
var status_service_1 = require("../service/status.service");
var UserComponent = /** @class */ (function () {
    function UserComponent(groupService, nameService, statusService) {
        this.groupService = groupService;
        this.nameService = nameService;
        this.statusService = statusService;
        this.img = '';
        this.name = '';
        this.status = '';
        this.id = '';
    }
    UserComponent.prototype.editName = function (userId) {
        this.nameService.editName(userId);
    };
    UserComponent.prototype.editStatus = function (userId) {
        this.statusService.editStatus(userId);
    };
    __decorate([
        core_1.Input()
    ], UserComponent.prototype, "img");
    __decorate([
        core_1.Input()
    ], UserComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], UserComponent.prototype, "status");
    __decorate([
        core_1.Input()
    ], UserComponent.prototype, "id");
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss'],
            providers: [name_service_1.NameService, status_service_1.StatusService]
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
