"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", id: 1 },
            { name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", id: 2 },
            { name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", id: 3 },
            { name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", id: 4 },
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
