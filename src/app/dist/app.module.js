"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user/user.component");
var header_component_1 = require("./header/header.component");
var users_service_1 = require("./service/users.service");
var group_service_1 = require("./service/group.service");
var name_service_1 = require("./service/name.service");
var status_service_1 = require("./service/status.service");
var pop_up_component_1 = require("./pop-up/pop-up.component");
var forms_2 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                header_component_1.HeaderComponent,
                pop_up_component_1.PopUpComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule
            ],
            providers: [group_service_1.GroupService, users_service_1.UserService, name_service_1.NameService, status_service_1.StatusService, pop_up_component_1.PopUpComponent],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [pop_up_component_1.PopUpComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
