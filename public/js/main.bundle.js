webpackJsonp(["main"],{

/***/ "./resources/assets/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./resources/assets/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./resources/assets/src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<alert-bar [options]=\"options\"></alert-bar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./resources/assets/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__["AlertBarOptions"]({
            textPlacement: __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__["TextPlacement"].left,
            duration: 8000
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./resources/assets/src/app/app.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ui_auth__ = __webpack_require__("./node_modules/ng2-ui-auth/ng2-ui-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_alert_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./resources/assets/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_index__ = __webpack_require__("./resources/assets/src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_index__ = __webpack_require__("./resources/assets/src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_module__ = __webpack_require__("./resources/assets/src/app/components/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cadastro_cadastro_module__ = __webpack_require__("./resources/assets/src/app/components/cadastro/cadastro.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_recuperar_senha_recuperar_senha_module__ = __webpack_require__("./resources/assets/src/app/components/recuperar-senha/recuperar-senha.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_card_professional_card_professional_module__ = __webpack_require__("./resources/assets/src/app/components/card-professional/card-professional.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dropdown_enterprise_dropdown_enterprise_module__ = __webpack_require__("./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_date_picker_date_picker_module__ = __webpack_require__("./resources/assets/src/app/components/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__screens_marketing_marketing_module__ = __webpack_require__("./resources/assets/src/app/screens/marketing/marketing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__screens_compras_compras_module__ = __webpack_require__("./resources/assets/src/app/screens/compras/compras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__screens_servicos_servicos_module__ = __webpack_require__("./resources/assets/src/app/screens/servicos/servicos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__screens_jogos_jogos_module__ = __webpack_require__("./resources/assets/src/app/screens/jogos/jogos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__screens_financeiro_financeiro_module__ = __webpack_require__("./resources/assets/src/app/screens/financeiro/financeiro.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__screens_final_final_module__ = __webpack_require__("./resources/assets/src/app/screens/final/final.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__screens_dashboard_dashboard_module__ = __webpack_require__("./resources/assets/src/app/screens/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__screens_cadastrar_cadastrar_module__ = __webpack_require__("./resources/assets/src/app/screens/cadastrar/cadastrar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__screens_access_access_module__ = __webpack_require__("./resources/assets/src/app/screens/access/access.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__screens_perfil_perfil_module__ = __webpack_require__("./resources/assets/src/app/screens/perfil/perfil.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__screens_recuperar_recuperar_module__ = __webpack_require__("./resources/assets/src/app/screens/recuperar/recuperar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__screens_recuperar_feito_recuperar_feito_module__ = __webpack_require__("./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__screens_recursos_humanos_recursos_humanos_module__ = __webpack_require__("./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__screens_saga_saga_module__ = __webpack_require__("./resources/assets/src/app/screens/saga/saga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__screens_redefinir_redefinir_module__ = __webpack_require__("./resources/assets/src/app/screens/redefinir/redefinir.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Router

// Util




Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_9__angular_common_locales_pt__["a" /* default */]);
// Components



// Modules
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_30__screens_access_access_module__["a" /* AccessModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_ui_auth__["b" /* Ng2UiAuthModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__guards_index__["a" /* AuthConfig */]),
                __WEBPACK_IMPORTED_MODULE_6_ng2_alert_bar__["AlertBarModule"],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_cadastro_cadastro_module__["a" /* CadastroModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_recuperar_senha_recuperar_senha_module__["a" /* RecuperarSenhaModule */],
                __WEBPACK_IMPORTED_MODULE_33__screens_recuperar_feito_recuperar_feito_module__["a" /* RecuperarFeitoModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
                __WEBPACK_IMPORTED_MODULE_18__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_19__components_card_professional_card_professional_module__["a" /* CardProfessionalModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_dropdown_enterprise_dropdown_enterprise_module__["a" /* DropdownEnterpriseModule */],
                __WEBPACK_IMPORTED_MODULE_21__components_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_22__screens_marketing_marketing_module__["a" /* MarketingModule */],
                __WEBPACK_IMPORTED_MODULE_23__screens_compras_compras_module__["a" /* ComprasModule */],
                __WEBPACK_IMPORTED_MODULE_24__screens_servicos_servicos_module__["a" /* ServicosModule */],
                __WEBPACK_IMPORTED_MODULE_25__screens_jogos_jogos_module__["a" /* JogosModule */],
                __WEBPACK_IMPORTED_MODULE_26__screens_financeiro_financeiro_module__["a" /* FinanceiroModule */],
                __WEBPACK_IMPORTED_MODULE_27__screens_final_final_module__["a" /* FinalModule */],
                __WEBPACK_IMPORTED_MODULE_28__screens_dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_29__screens_cadastrar_cadastrar_module__["a" /* CadastrarModule */],
                __WEBPACK_IMPORTED_MODULE_31__screens_perfil_perfil_module__["a" /* PerfilModule */],
                __WEBPACK_IMPORTED_MODULE_32__screens_recuperar_recuperar_module__["a" /* RecuperarModule */],
                __WEBPACK_IMPORTED_MODULE_34__screens_recursos_humanos_recursos_humanos_module__["a" /* RecursosHumanosModule */],
                __WEBPACK_IMPORTED_MODULE_35__screens_saga_saga_module__["a" /* SagaModule */],
                __WEBPACK_IMPORTED_MODULE_36__screens_redefinir_redefinir_module__["a" /* RedefinirModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__guards_index__["b" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_index__["a" /* AuthenticationService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-PT' },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"],
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("./resources/assets/src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screens_access_access_component__ = __webpack_require__("./resources/assets/src/app/screens/access/access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screens_cadastrar_cadastrar_component__ = __webpack_require__("./resources/assets/src/app/screens/cadastrar/cadastrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screens_perfil_perfil_component__ = __webpack_require__("./resources/assets/src/app/screens/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__screens_recuperar_recuperar_component__ = __webpack_require__("./resources/assets/src/app/screens/recuperar/recuperar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__screens_recuperar_feito_recuperar_feito_component__ = __webpack_require__("./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__screens_recursos_humanos_recursos_humanos_component__ = __webpack_require__("./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__screens_saga_saga_component__ = __webpack_require__("./resources/assets/src/app/screens/saga/saga.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__screens_marketing_marketing_component__ = __webpack_require__("./resources/assets/src/app/screens/marketing/marketing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__screens_compras_compras_component__ = __webpack_require__("./resources/assets/src/app/screens/compras/compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__screens_servicos_servicos_component__ = __webpack_require__("./resources/assets/src/app/screens/servicos/servicos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__screens_jogos_jogos_component__ = __webpack_require__("./resources/assets/src/app/screens/jogos/jogos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__screens_financeiro_financeiro_component__ = __webpack_require__("./resources/assets/src/app/screens/financeiro/financeiro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__screens_final_final_component__ = __webpack_require__("./resources/assets/src/app/screens/final/final.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__screens_dashboard_dashboard_component__ = __webpack_require__("./resources/assets/src/app/screens/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__screens_redefinir_redefinir_component__ = __webpack_require__("./resources/assets/src/app/screens/redefinir/redefinir.component.ts");


// Screens Components















var APP_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__screens_access_access_component__["a" /* AccessComponent */] },
    { path: 'cadastrar/:email/:token', component: __WEBPACK_IMPORTED_MODULE_3__screens_cadastrar_cadastrar_component__["a" /* CadastrarComponent */] },
    { path: 'recuperar', component: __WEBPACK_IMPORTED_MODULE_5__screens_recuperar_recuperar_component__["a" /* RecuperarComponent */] },
    { path: 'recuperar-feito', component: __WEBPACK_IMPORTED_MODULE_6__screens_recuperar_feito_recuperar_feito_component__["a" /* RecuperarFeitoComponent */] },
    { path: 'redefinir/:email/:token', component: __WEBPACK_IMPORTED_MODULE_16__screens_redefinir_redefinir_component__["a" /* RedefinirComponent */] },
    // rotas protegidas...
    { path: 'perfil/:codigoJogo', component: __WEBPACK_IMPORTED_MODULE_4__screens_perfil_perfil_component__["a" /* PerfilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'recursos-humanos', component: __WEBPACK_IMPORTED_MODULE_7__screens_recursos_humanos_recursos_humanos_component__["a" /* RecursosHumanosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'saga', component: __WEBPACK_IMPORTED_MODULE_8__screens_saga_saga_component__["a" /* SagaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'saga/:state', component: __WEBPACK_IMPORTED_MODULE_8__screens_saga_saga_component__["a" /* SagaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__screens_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'marketing', component: __WEBPACK_IMPORTED_MODULE_9__screens_marketing_marketing_component__["a" /* MarketingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'compras', component: __WEBPACK_IMPORTED_MODULE_10__screens_compras_compras_component__["a" /* ComprasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'financeiro', component: __WEBPACK_IMPORTED_MODULE_13__screens_financeiro_financeiro_component__["a" /* FinanceiroComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'servicos', component: __WEBPACK_IMPORTED_MODULE_11__screens_servicos_servicos_component__["a" /* ServicosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'jogos', component: __WEBPACK_IMPORTED_MODULE_12__screens_jogos_jogos_component__["a" /* JogosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: 'final', component: __WEBPACK_IMPORTED_MODULE_14__screens_final_final_component__["a" /* FinalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["b" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__screens_access_access_component__["a" /* AccessComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./resources/assets/src/app/components/cadastro/cadastro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/cadastro/cadastro.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"formulario\">\n\n  <fieldset class=\"form__fieldset\">\n    <app-text-field type=\"user\" [refForm]=\"formulario\" #user></app-text-field>\n    <app-text-field type=\"email\" [refForm]=\"formulario\" #email></app-text-field>\n    <app-text-field type=\"password\" [refForm]=\"formulario\" #password></app-text-field>\n  </fieldset>\n\n  <footer class=\"form__footer form__footer--align-right\">\n    <!--<app-saga-button [bare]=\"true\" [label]=\"'Voltar'\" [goTo]=\"'/'\"></app-saga-button>-->\n    <app-saga-button [bare]=\"false\" [label]=\"'Cadastrar'\" (click)=\"register()\"></app-saga-button>\n  </footer>\n  \n</form>"

/***/ }),

/***/ "./resources/assets/src/app/components/cadastro/cadastro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroComponent = (function () {
    function CadastroComponent(formBuilder, route, routeActive, http, alert) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.routeActive = routeActive;
        this.http = http;
        this.alert = alert;
        this.email = "";
        this.token = "";
        this.loading = false;
        this.isValidToken = false;
    }
    CadastroComponent.prototype.ngOnInit = function () {
        this.email = this.routeActive.snapshot.params['email'];
        this.token = this.routeActive.snapshot.params['token'];
        this.defineForm();
        this.verifyToken();
    };
    /**
     * Define os campos e os validadores do formulário
     */
    CadastroComponent.prototype.defineForm = function () {
        this.formulario = this.formBuilder.group({
            user: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    /**
     * Verifica os dados do formulário e caso válidos redireciona para
     * pagina de login.
     */
    CadastroComponent.prototype.register = function () {
        var _this = this;
        // Visualização dos dados do formulário no console
        console.log(JSON.stringify(this.formulario.value));
        if (this.formulario.valid) {
            this.loading = true;
            var params = {
                email: this.email,
                token: this.token,
                password: this.formulario.get('password').value,
                nome: this.formulario.get('user').value
            };
            this.http.post("api/auth/register", params).subscribe(function (data) {
                _this.loading = false;
                var dataStr = JSON.stringify(data);
                var dataJson = JSON.parse(dataStr);
                _this.alert.success("", dataJson.mensagem);
                _this.route.navigate(['/login']);
            }, function (error) {
                _this.loading = false;
                if (error.status === 422) {
                    for (var msg in error.error.messages) {
                        return _this.alert.error("Falha ao atualizar cadastro", error.error.messages[msg]);
                    }
                }
                _this.alert.error("Falha ao atualizar cadastro", error.error);
            });
        }
        else {
            this.alert.error("", "Por favor, preencha todos os campos com dados validos");
        }
    };
    CadastroComponent.prototype.verifyToken = function () {
        var _this = this;
        this.loading = true;
        var params = {
            email: this.email,
            token: this.token
        };
        this.http.get('api/auth/confirm-token/verify', { params: params }).subscribe(function (data) {
            _this.loading = false;
            _this.isValidToken = true;
            _this.formulario.patchValue({
                user: data,
                email: _this.email
            });
        }, function (error) {
            _this.loading = false;
            _this.isValidToken = false;
            if (error.status === 422) {
                for (var msg in error.error.messages) {
                    return _this.alert.error("Ops :)", error.error.messages[msg]);
                }
            }
            _this.alert.error("Ops :)", error.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('user'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CadastroComponent.prototype, "inputUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CadastroComponent.prototype, "inputEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CadastroComponent.prototype, "inputSenha", void 0);
    CadastroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__("./resources/assets/src/app/components/cadastro/cadastro.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__["AlertBar"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/cadastro/cadastro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_component__ = __webpack_require__("./resources/assets/src/app/components/cadastro/cadastro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var CadastroModule = (function () {
    function CadastroModule() {
    }
    CadastroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__cadastro_component__["a" /* CadastroComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__cadastro_component__["a" /* CadastroComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], CadastroModule);
    return CadastroModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/card-professional/card-professional.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/card-professional/card-professional.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <header class=\"card__header\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">{{work}}</h3>\n  </header>\n  <div class=\"card__content\">\n    <div class=\"media media--v-align-center\">\n      <div class=\"media__figure\">\n        <div class=\"picture picture--xhuge picture--rounded\">\n          <img [src]=\"avatar\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"media__body\">\n        <div class=\"counter\">\n          <span class=\"counter__number\">\n            {{quantity}}\n          </span>\n          <span class=\"counter__body\">\n            Quantidade <br> atual\n          </span>\n        </div>\n\n        <div class=\"u-vspace-xsmall\"></div>\n\n        <app-progress-bar \n          [label]=\"'Capacidade produtiva'\"\n          [actual]=\"production.actualHours\"\n          [progress]=\"production.progress\"\n          [finish]=\"production.totalHours\"\n          [type]=\"production.type\">\n        </app-progress-bar>\n\n        <div class=\"u-vspace-xsmall\"></div>\n\n        <p class=\"text text--small is-light\">Custo total</p>\n        <p class=\"text text--xlarge is-semibold\">{{value | currency:'BRL'}}</p>\n        \n      </div>\n    </div>\n  </div>\n  <footer class=\"card__footer\">\n    <p class=\"text text--small is-inverse\">Precisa contratar ou demitir um ou mais colaboradores?</p>\n    <div class=\"buttom-group-vertical\">\n\n      <app-saga-button [bare]=\"false\" [label]=\"'Contratar'\" (click)=\"hireButton()\"></app-saga-button>\n\n      <app-saga-button [bare]=\"true\" [label]=\"'Demitir'\" [inverse]=\"true\" (click)=\"dismissButton()\"></app-saga-button>\n      \n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/card-professional/card-professional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardProfessionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardProfessionalComponent = (function () {
    function CardProfessionalComponent() {
        this.hireButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dismissButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CardProfessionalComponent.prototype.ngOnInit = function () {
    };
    /**
     * Evento emitido ao clicar no botão 'Contratar'
     */
    CardProfessionalComponent.prototype.hireButton = function () {
        this.hireButtonClicked.emit({
            id: this.id,
            state: true,
            button: 'hire'
        });
    };
    /**
     * Evento emitido ao clicar no botão 'Demitir'
     */
    CardProfessionalComponent.prototype.dismissButton = function () {
        this.dismissButtonClicked.emit({
            id: this.id,
            state: true,
            button: 'dismiss'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'),
        __metadata("design:type", Number)
    ], CardProfessionalComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('work'),
        __metadata("design:type", String)
    ], CardProfessionalComponent.prototype, "work", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('quantity'),
        __metadata("design:type", Number)
    ], CardProfessionalComponent.prototype, "quantity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Number)
    ], CardProfessionalComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('production'),
        __metadata("design:type", Object)
    ], CardProfessionalComponent.prototype, "production", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('avatar'),
        __metadata("design:type", String)
    ], CardProfessionalComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CardProfessionalComponent.prototype, "hireButtonClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CardProfessionalComponent.prototype, "dismissButtonClicked", void 0);
    CardProfessionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-professional',
            template: __webpack_require__("./resources/assets/src/app/components/card-professional/card-professional.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/card-professional/card-professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardProfessionalComponent);
    return CardProfessionalComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/card-professional/card-professional.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardProfessionalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_professional_component__ = __webpack_require__("./resources/assets/src/app/components/card-professional/card-professional.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var CardProfessionalModule = (function () {
    function CardProfessionalModule() {
    }
    CardProfessionalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__card_professional_component__["a" /* CardProfessionalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__card_professional_component__["a" /* CardProfessionalComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"],
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], CardProfessionalModule);
    return CardProfessionalModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-compras/dashboard-compras.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-compras/dashboard-compras.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n  <header class=\"card__header card__header--no-padding-bottom\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Compras</h3>\n    <p class=\"text text--small is-light\">{{responsible}}</p>\n\n    <a routerLink=\"/compras\" class=\"card__header-button is-desktop\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-arrow-right\"></use>\n      </svg>\n    </a>\n\n  </header>\n  <div class=\"card__content\">\n\n    <div class=\"scroll-container scroll-container--default\">\n\n      <table class=\"table table--divided\">\n        <tbody class=\"table__body\">\n          <tr class=\"table__row\" *ngFor=\"let item of arrayShop\">\n            <td class=\"table__cell\">\n              <app-modal\n                [visible]=\"item.modalOpen\"\n                [type]=\"'shop'\"\n                [shopDatas]=\"item\"\n                (modalClosed)=\"closedModal($event, item.id)\">\n              </app-modal>\n              <div class=\"media media--v-align-center\">\n                <div class=\"media__figure\">\n                  <div class=\"picture\">\n                    <img [src]=\"item.thumbnail\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"media__body\">\n                  <p class=\"text is-semibold\">{{item.product_name}}</p>\n                </div>\n              </div>\n            </td>\n            <td class=\"table__cell\">\n              <p class=\"text text--small is-light\">Qnt. atual</p>\n              <p *ngIf=\"item.status === 'success'\" \n                 class=\"text text--small is-semibold is-success\" >\n                {{item.actualQuant}} unidades\n              </p>\n              <div *ngIf=\"item.status === 'danger'\" class=\"tooltip tooltip--danger\" role=\"tooltip\">\n                <p class=\"text text--small is-semibold is-danger\">{{item.actualQuant}} unidades</p>\n                <div class=\"tooltip__content\">Produto insuficiente</div>\n              </div>\n            </td>\n            <td class=\"table__cell\">\n\n              <button class=\"overlaid-button overlaid-button--xsmall overlaid-button--relative\" \n                      data-toggle=\"\" \n                      data-toggle-target=\"#modal-compra-01\"\n                      (click)=\"openModal(item.id)\">\n                <div class=\"overlaid-button__child\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n                    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-plus\"></use>\n                  </svg>\n                </div>\n              </button>\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-compras/dashboard-compras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComprasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComprasComponent = (function () {
    function DashboardComprasComponent() {
        this.responsible = 'Ana Maria';
        this.arrayShop = [
            {
                id: 0,
                product_name: 'Post-it',
                thumbnail: 'js/assets/icons/icon-papers-line.svg',
                actualQuant: 120,
                modalOpen: false,
                status: 'success',
                providers: [
                    {
                        id: 0,
                        name: 'Papelaria A',
                        logo: 'js/assets/icons/icon-store.svg',
                        unit_value_product: 0.50,
                        send_time: 23 // days
                    },
                    {
                        id: 1,
                        name: 'Papelaria B',
                        logo: 'js/assets/icons/icon-store.svg',
                        unit_value_product: 0.70,
                        send_time: 17 // days
                    }
                ]
            }, {
                id: 1,
                product_name: 'Papel',
                thumbnail: 'js/assets/icons/icon-papers-line.svg',
                actualQuant: 8,
                modalOpen: false,
                status: 'danger',
                providers: [
                    {
                        id: 2,
                        name: 'Papelaria A',
                        logo: 'js/assets/icons/icon-store.svg',
                        unit_value_product: 0.50,
                        send_time: 23 // days
                    },
                    {
                        id: 3,
                        name: 'Papelaria B',
                        logo: 'js/assets/icons/icon-store.svg',
                        unit_value_product: 0.70,
                        send_time: 17 // days
                    }
                ]
            }, {
                id: 2,
                product_name: 'Anotações',
                thumbnail: 'js/assets/icons/icon-papers-line.svg',
                actualQuant: 12,
                modalOpen: false,
                status: 'danger',
                providers: [
                    {
                        id: 4,
                        name: 'Papelaria A',
                        logo: 'js/assets/icons/icon-store.svg',
                        unit_value_product: 0.30,
                        send_time: 13 // days
                    },
                    {
                        id: 5,
                        name: 'Papelaria B',
                        logo: 'js/assets/icons/icon-store.svg',
                        unit_value_product: 0.20,
                        send_time: 10 // days
                    }
                ]
            },
        ];
    }
    DashboardComprasComponent.prototype.ngOnInit = function () {
    };
    /**
     * Evento que define a variável de controle do modal como 'false'
     * @param  $event Objeto recebido sempre que o modal é fechado
     * @param idProduct Id do produto que teve seu modal fechado
     */
    DashboardComprasComponent.prototype.closedModal = function ($event, idProduct) {
        if ($event.state === 'close') {
            for (var _i = 0, _a = this.arrayShop; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id === idProduct) {
                    item.modalOpen = false;
                    return;
                }
            }
        }
    };
    /**
     * Evento que define a variável de controle do modal como 'true'
     * @param idProduct Id do modal a ser aberto
     */
    DashboardComprasComponent.prototype.openModal = function (idProduct) {
        for (var _i = 0, _a = this.arrayShop; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === idProduct) {
                item.modalOpen = true;
                return;
            }
        }
    };
    DashboardComprasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-compras',
            template: __webpack_require__("./resources/assets/src/app/components/dashboard-compras/dashboard-compras.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dashboard-compras/dashboard-compras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComprasComponent);
    return DashboardComprasComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-compras/dashboard-compras.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComprasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_compras_component__ = __webpack_require__("./resources/assets/src/app/components/dashboard-compras/dashboard-compras.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Components

var DashboardComprasModule = (function () {
    function DashboardComprasModule() {
    }
    DashboardComprasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_compras_component__["a" /* DashboardComprasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_compras_component__["a" /* DashboardComprasComponent */]
            ]
        })
    ], DashboardComprasModule);
    return DashboardComprasModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n  <header class=\"card__header card__header--no-padding-bottom\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Financeiro</h3>\n    <p class=\"text text--small is-light\">{{responsible}}</p>\n\n    <a routerLink=\"/financeiro\" class=\"card__header-button is-desktop\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-arrow-right\"></use>\n      </svg>\n    </a>\n\n  </header>\n  <div class=\"card__content\">\n\n      <table class=\"table table--divided\">\n        <tbody class=\"table__body\">\n          <tr class=\"table__row\">\n            <td class=\"table__cell\">\n              <app-static-card\n                [icon]=\"'js/assets/icons/icon-debit-line.svg'\"\n                [label]=\"'Valor atual em débitos'\"\n                [value]=\"finances.debit\"\n                [inBox]=\"false\"\n                [type]=\"'money'\"\n                [size]=\"'md'\"\n                [status]=\"null\">\n              </app-static-card>\n            </td>\n            <td class=\"table__cell\"></td>\n          </tr>\n          <tr class=\"table__row\">\n            <td class=\"table__cell\">\n              <app-static-card\n                [icon]=\"'js/assets/icons/icon-chart-line.svg'\"\n                [label]=\"'Valor total aplicado'\"\n                [value]=\"finances.apply\"\n                [inBox]=\"false\"\n                [type]=\"'money'\"\n                [size]=\"'md'\"\n                [status]=\"null\">\n              </app-static-card>\n            </td>\n            <td class=\"table__cell\">\n              <app-yield \n                [size]=\"'md'\"\n                [unit]=\"'mês'\"\n                [description]=\"'Rendimento atual'\"\n                [value]=\"finances.yield\"\n                [status]=\"finances.yieldStatus\">\n              </app-yield>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFinanceiroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardFinanceiroComponent = (function () {
    function DashboardFinanceiroComponent() {
        this.responsible = 'Camila Queiroz';
        this.finances = {
            debit: 53000,
            apply: 150000,
            yield: 780,
            yieldStatus: 'success'
        };
    }
    DashboardFinanceiroComponent.prototype.ngOnInit = function () {
    };
    DashboardFinanceiroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-financeiro',
            template: __webpack_require__("./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardFinanceiroComponent);
    return DashboardFinanceiroComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFinanceiroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_financeiro_component__ = __webpack_require__("./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Components

var DashboardFinanceiroModule = (function () {
    function DashboardFinanceiroModule() {
    }
    DashboardFinanceiroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_financeiro_component__["a" /* DashboardFinanceiroComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_financeiro_component__["a" /* DashboardFinanceiroComponent */]
            ]
        })
    ], DashboardFinanceiroModule);
    return DashboardFinanceiroModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-geral/dashboard-geral.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-geral/dashboard-geral.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n  <header class=\"card__header card__header--no-padding-bottom\">\n    <div class=\"row row--gutter-md row--v-align-center\">\n      <div class=\"col-xs-12 col-md-6\">\n        <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Geral</h3>\n      </div>\n      <div class=\"col-xs-12 col-md-6\">\n\n        <div class=\"row row--gutter-sm row--v-align-center\">\n          \n          <div class=\"col-xs-6\">\n            <div class=\"media media--v-align-center media--small\">\n              <div class=\"media__figure\">\n                <div class=\"picture picture--small\">\n                  <img src=\"js/assets/icons/icon-calendar-2.svg\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"text text--xxsmall is-semibold\">Início</p>\n                <p class=\"text text--xxsmall is-light\">01/12/2017</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-6\">\n            <div class=\"media media--v-align-center media--small\">\n              <div class=\"media__figure\">\n                <div class=\"picture picture--small\">\n                  <img src=\"js/assets/icons/icon-calendar-2.svg\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"text text--xxsmall is-semibold\">Término</p>\n                <p class=\"text text--xxsmall is-light\">21/12/2017</p>\n              </div>\n            </div>             \n          </div>\n\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"card__content\">\n\n    <div class=\"row row--gutter-md row--v-align-center\">\n\n      <div class=\"col-xs-12 col-md-6\">\n\n        <h4 class=\"text text--small text--secondary is-semibold is-light\">Minha empresa</h4>\n\n        <table class=\"table table--divided\">\n          <tbody class=\"table__body\">\n            <tr class=\"table__row\" *ngFor=\"let item of myEnterprise\" >\n              <td class=\"table__cell\">\n                <app-static-card\n                  [icon]=\"item.icon\"\n                  [label]=\"item.label\"\n                  [value]=\"item.value\"\n                  [inBox]=\"item.inBox\"\n                  [type]=\"item.type\"\n                  [size]=\"item.size\"\n                  [status]=\"item.status\">\n                </app-static-card>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-xs-12 col-md-6\">\n\n        <h4 class=\"text text--small text--secondary is-semibold is-light\">Mercado</h4>\n\n        <table class=\"table table--divided\">\n          <tbody class=\"table__body\">\n            <tr class=\"table__row\" *ngFor=\"let item of market\" >\n              <td class=\"table__cell\">\n                <p class=\"text text--small is-light\">{{item.enterprise}}</p>\n              </td>\n              <td class=\"table__cell\">\n                <p class=\"text-small is-strongest\">{{item.value}}%</p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-geral/dashboard-geral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardGeralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardGeralComponent = (function () {
    function DashboardGeralComponent() {
        this.myEnterprise = [
            {
                icon: 'js/assets/icons/icon-user-stars.svg',
                label: 'Clientes em potencial',
                value: 10000,
                inBox: false,
                type: 'quantity',
                size: 'md',
                status: null
            }, {
                icon: 'js/assets/icons/icon-chart-2.svg',
                label: 'Meu mercado',
                value: 5,
                inBox: false,
                type: 'percent',
                size: 'md',
                status: 'success'
            },
        ];
        this.market = [
            {
                enterprise: 'Samsung LTDA.',
                value: 20
            }, {
                enterprise: 'SKT Telecom T1',
                value: 20
            }, {
                enterprise: 'Flash Wolves',
                value: 20
            }
        ];
    }
    DashboardGeralComponent.prototype.ngOnInit = function () {
    };
    DashboardGeralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-geral',
            template: __webpack_require__("./resources/assets/src/app/components/dashboard-geral/dashboard-geral.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dashboard-geral/dashboard-geral.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardGeralComponent);
    return DashboardGeralComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-geral/dashboard-geral.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardGeralModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_geral_component__ = __webpack_require__("./resources/assets/src/app/components/dashboard-geral/dashboard-geral.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var DashboardGeralModule = (function () {
    function DashboardGeralModule() {
    }
    DashboardGeralModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_geral_component__["a" /* DashboardGeralComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_geral_component__["a" /* DashboardGeralComponent */]
            ]
        })
    ], DashboardGeralModule);
    return DashboardGeralModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n    <header class=\"card__header card__header--no-padding-bottom\">\n      <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Marketing</h3>\n      <p class=\"text text--small is-light\">Adrielle Garcez</p>\n  \n      <a routerLink=\"/marketing\" class=\"card__header-button is-desktop\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-arrow-right\"></use>\n        </svg>      \n      </a>\n  \n    </header>\n    <div class=\"card__content\">\n  \n      <table class=\"table table--divided\">\n  \n        <tbody class=\"table__body\">\n          <tr class=\"table__row\">\n            <td class=\"table__cell\" colspan=\"1000\" >\n              <div class=\"media media--small media--v-align-center\">\n                <div class=\"media__figure\">\n                  <div class=\"picture picture--medium\">\n                    <img src=\"js/assets/icons/icon-users-line.svg\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"media__body\">\n                  <app-yield\n                    [description]=\"'Alcance de pessoas'\"\n                    [value]=\"marketingDatas.reach\"\n                    [type]=\"'quantity'\"\n                    [status]=\"marketingDatas.status\"\n                    [unit]=\"'mês'\"\n                    [size]=\"'md'\">\n                  </app-yield>\n                </div>          \n              </div>\n            </td>\n            \n          </tr>\n\n          <tr class=\"table__row\">\n\n            <td class=\"table__cell\" *ngFor=\"let item of marketingDatas.products\" >\n              <div class=\"media media--small media--v-align-center\">\n                <div class=\"media__figure\">\n                  <div class=\"picture picture--medium\">\n                    <img [src]=\"item.thumbnail\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"media__body\">\n                  <p class=\"text text--small is-semibold\">{{item.value | currency: 'BRL'}}</p>\n                </div>\n              </div>\n            </td>\n\n          </tr>\n         \n        </tbody>\n      \n      </table>\n  \n    </div>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMarketingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardMarketingComponent = (function () {
    function DashboardMarketingComponent() {
        this.responsible = 'Adrielle Garcez';
        this.marketingDatas = {
            reach: 50000,
            status: 'danger',
            products: [
                {
                    thumbnail: 'js/assets/icons/icon-mobile-line.svg',
                    value: '20500'
                }, {
                    thumbnail: 'js/assets/icons/icon-pc.svg',
                    value: '14500'
                }
            ]
        };
    }
    DashboardMarketingComponent.prototype.ngOnInit = function () {
    };
    DashboardMarketingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-marketing',
            template: __webpack_require__("./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardMarketingComponent);
    return DashboardMarketingComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMarketingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_marketing_component__ = __webpack_require__("./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Components

var DashboardMarketingModule = (function () {
    function DashboardMarketingModule() {
    }
    DashboardMarketingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_marketing_component__["a" /* DashboardMarketingComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_marketing_component__["a" /* DashboardMarketingComponent */]
            ]
        })
    ], DashboardMarketingModule);
    return DashboardMarketingModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n  <header class=\"card__header card__header--no-padding-bottom\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Recursos Humanos</h3>\n    <p class=\"text text--small is-light\">{{responsible}}</p>\n\n    <a routerLink=\"/recursos-humanos\" class=\"card__header-button is-desktop\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-arrow-right\"></use>\n      </svg>\n    </a>\n\n  </header>\n  <div class=\"card__content\">\n\n    <table class=\"table table--divided\">\n      <tbody class=\"table__body\">\n        <tr class=\"table__row\">\n          <td class=\"table__cell\" *ngFor=\"let item of rhPeoples\">\n            <app-modal \n              [type]=\"'contratar'\"\n              [visible]=\"item.modalOpen\"\n              [professionalDatas]=\"item.professionalDatas\"\n              (modalClosed)=\"closedModal($event, item.professionalDatas.id)\">\n            </app-modal>\n            <div class=\"media media--small media--v-align-center\">\n              <div class=\"media__figure is-desktop\">\n                <div class=\"picture picture--medium\">\n                  <img src=\"js/assets/icons/icon-user.svg\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"text text--small is-light\">{{item.work}}</p>\n                <div class=\"tooltip tooltip--danger\" role=\"tooltip\">\n                  <p class=\"text-small is-stronger\"\n                      [class.is-danger]=\"item.status === 'danger'\"\n                      [class.is-success]=\"item.status === 'success'\"\n                      [class.is-atention]=\"item.status === 'atenttion'\">\n                    {{item.quantity}} {{item.description}}\n                  </p>\n                  <div class=\"tooltip__content\" *ngIf=\"item.status === 'danger'\" >{{item.tooltip}}</div>\n                </div>\n              </div>\n              <button class=\"overlaid-button overlaid-button--xsmall overlaid-button--relative is-desktop\" \n                      data-toggle=\"\" \n                      data-toggle-target=\"#modal-trigger-01\"\n                      (click)=\"openModal(item.professionalDatas.id)\">\n                <div class=\"overlaid-button__child\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n                    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-plus\"></use>\n                  </svg>\n                </div>\n              </button>\n            </div>\n          </td>\n        </tr>\n        <tr class=\"table__row\">\n          <td class=\"table__cell\" *ngFor=\"let item of rhHours\" >\n            <div class=\"media media--small media--v-align-center\">\n              <div class=\"media__figure is-desktop\">\n                <div class=\"picture picture--medium\">\n                  <img [src]=\"item.icon\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <app-yield\n                  [description]=\"item.title\"\n                  [value]=\"item.value\"\n                  [status]=\"item.status\"\n                  [unit]=\"item.frequency\"\n                  [size]=\"'md'\">\n                </app-yield>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRecursosHumanosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardRecursosHumanosComponent = (function () {
    function DashboardRecursosHumanosComponent() {
        this.responsible = 'João Pedro';
        this.rhPeoples = [
            {
                work: 'Desenvolvedor',
                quantity: 12,
                description: 'contratados',
                status: 'danger',
                tooltip: 'Mão de obra insuficiente',
                modalOpen: false,
                professionalDatas: {
                    id: 0,
                    avatar: 'js/assets/pictures/avatar-1.png',
                    work: 'Desenvolvedor',
                    mensal: 4500,
                    cProductive: 160,
                    total_mensal: 13500,
                    total_cProductive: 320
                }
            }, {
                work: 'Designer',
                quantity: 9,
                description: 'contratados',
                status: 'success',
                tooltip: null,
                modalOpen: false,
                professionalDatas: {
                    id: 1,
                    avatar: 'js/assets/pictures/avatar-2.png',
                    work: 'Designer',
                    mensal: 4500,
                    cProductive: 160,
                    total_mensal: 13500,
                    total_cProductive: 320
                }
            }
        ];
        this.rhHours = [
            { icon: 'js/assets/icons/icon-paycheck-line.svg', title: 'Holerite', value: 81000, frequency: 'mês', status: 'success' },
            { icon: 'js/assets/icons/icon-produtivity-line.svg', title: 'Capacidade Produtiva', value: 48500, status: 'danger' },
        ];
    }
    DashboardRecursosHumanosComponent.prototype.ngOnInit = function () {
    };
    /**
     * Define a variável de controle do modal como 'true'
     * @param idModal Id do modal que será aberto
     */
    DashboardRecursosHumanosComponent.prototype.openModal = function (idModal) {
        for (var _i = 0, _a = this.rhPeoples; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.professionalDatas.id === idModal) {
                item.modalOpen = true;
                return;
            }
        }
    };
    /**
     * Evento executado quando o modal é fechado, define a variável de
     * controle do modal como 'false'
     * @param $event Objeto recebido quando o modal é fechado
     * @param idModal Id do modal que foi fechado
     */
    DashboardRecursosHumanosComponent.prototype.closedModal = function ($event, idModal) {
        if ($event.state === 'close') {
            for (var _i = 0, _a = this.rhPeoples; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.professionalDatas.id === idModal) {
                    item.modalOpen = false;
                    return;
                }
            }
        }
    };
    DashboardRecursosHumanosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-recursos-humanos',
            template: __webpack_require__("./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardRecursosHumanosComponent);
    return DashboardRecursosHumanosComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRecursosHumanosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_recursos_humanos_component__ = __webpack_require__("./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Componenets

var DashboardRecursosHumanosModule = (function () {
    function DashboardRecursosHumanosModule() {
    }
    DashboardRecursosHumanosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_recursos_humanos_component__["a" /* DashboardRecursosHumanosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_recursos_humanos_component__["a" /* DashboardRecursosHumanosComponent */]
            ]
        })
    ], DashboardRecursosHumanosModule);
    return DashboardRecursosHumanosModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.component.css":
/***/ (function(module, exports) {

module.exports = ".width-success {\n    width: 100%;\n}\n\n.width-danger {\n    width: 40%;\n}\n\n.width-neutral {\n    width: 67%;\n}"

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n  <header class=\"card__header card__header--no-padding-bottom\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Serviços</h3>\n    <p class=\"text text--small is-light\">{{responsible}}</p>\n\n    <a routerLink=\"/servicos\" class=\"card__header-button is-desktop\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-arrow-right\"></use>\n      </svg>\n    </a>\n\n  </header>\n  <div class=\"card__content\">\n\n    <table class=\"table table--divided\">\n      <tbody class=\"table__body\">\n        <tr class=\"table__row\" *ngFor=\"let item of arrayServices\">\n          <td class=\"table__cell\">\n            <div class=\"media media--small media--v-align-center\">\n              <div class=\"media__figure\">\n                <div class=\"picture picture--medium\">\n                  <img [src]=\"item.icon\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <h4 class=\"text text--semibold\">{{item.name}}</h4>\n              </div>\n            </div>\n          </td>\n          <td class=\"table__cell\">\n\n            <div class=\"progress progress--small\" \n                 [class.progress--success]=\"item.status === 'success'\" \n                 [class.progress--danger]=\"item.status === 'danger'\"\n                 [class.progress--neutral]=\"item.status === 'neutral'\">\n            \n              <span class=\"progress__label is-assistive\">Capacidade produtiva</span>\n              \n              <div class=\"progress__bar\" \n                   aria-valuemin=\"0\" \n                   attr.aria-valuemax=\"{{item.pecent}}\" \n                   attr.aria-valuenow=\"{{item.pecent}}\" \n                   role=\"progressbar\"\n                   title=\"Progresso: {{item.pecent}}%\">\n\n                <span class=\"progress__bar-fill\" \n                      [class.width-success]=\"item.status === 'success'\" \n                      [class.width-danger]=\"item.status === 'danger'\"\n                      [class.width-neutral]=\"item.status === 'neutral'\">\n                  <span class=\"progress__bar-info is-assistive\">{{item.pecent}}%</span>\n                </span>\n\n              </div>\n              \n              <div class=\"progress__bottom-label\">\n                <span class=\"current-info\">{{item.statusDesc}}</span>\n              </div>\n\n            </div>\n\n          </td>\n          <td class=\"table__cell table__cell--align-right\">\n\n            <button type=\"button\" \n                    class=\"button button--small\" \n                    data-toggle=\"\" \n                    data-toggle-target=\"#modal-trigger-01\" \n                    (click)=\"clickOnButton(item.buttonText)\">\n              <span class=\"button__child\">{{item.buttonText}}</span>\n            </button>\n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardServicosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardServicosComponent = (function () {
    function DashboardServicosComponent() {
        this.responsible = 'Josiane Raquel';
        this.arrayServices = [
            { name: 'Aplciativo Mobile', icon: 'js/assets/icons/icon-mobile-line.svg', status: 'success' },
            { name: 'Aplciativo Mobile', icon: 'js/assets/icons/icon-mobile-line.svg', status: 'danger' }
        ];
    }
    DashboardServicosComponent.prototype.ngOnInit = function () {
        this.defineStatus();
    };
    /**
     * Define as variáveis de controle da status bar
     */
    DashboardServicosComponent.prototype.defineStatus = function () {
        for (var _i = 0, _a = this.arrayServices; _i < _a.length; _i++) {
            var item = _a[_i];
            switch (item.status) {
                case 'success':
                    item.statusDesc = 'Pronto para entrega';
                    item.buttonText = 'Entregar';
                    item.percent = 100;
                    break;
                case 'neutral':
                    item.statusDesc = '';
                    item.buttonText = 'Ver';
                    item.percent = 67;
                    break;
                case 'danger':
                    item.statusDesc = 'Em atraso';
                    item.buttonText = 'Ver';
                    item.percent = 47;
                    break;
            }
        }
    };
    /**
     * Método chamado quando o botão da lista é clicado
     * @param nameButton Nome do botão clicado
     */
    DashboardServicosComponent.prototype.clickOnButton = function (nameButton) {
        console.log('Clique no botão - ' + nameButton);
    };
    DashboardServicosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-servicos',
            template: __webpack_require__("./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardServicosComponent);
    return DashboardServicosComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardServicosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_servicos_component__ = __webpack_require__("./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Components

var DashboardServicosModule = (function () {
    function DashboardServicosModule() {
    }
    DashboardServicosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_servicos_component__["a" /* DashboardServicosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_servicos_component__["a" /* DashboardServicosComponent */]
            ]
        })
    ], DashboardServicosModule);
    return DashboardServicosModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/date-picker/date-picker.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/date-picker/date-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n  <div class=\"col-xs-6\">\n    <div class=\"form-component form-component--icon\">\n      <label class=\"form-component__label is-assistive\">Selecione a data</label>\n      <div class=\"form-component__control\">\n        <ng-datepicker id=\"input-text1\" type=\"text\" name=\"input-base\" value=\"25/12/2017\" placeholder=\"00/00/0000\" class=\"field field--centered\" [(ngModel)]=\"date\" [position]=\"'top-right'\" [options]=\"options\"></ng-datepicker>\n        <div class=\"form-component__icon form-component__icon--secondary\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-calendar\"></use>\n          </svg>\n        </div>\n      </div>\n      <label class=\"form-component__label\">Duração padrão de 30 dias</label>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/date-picker/date-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_pt__ = __webpack_require__("./node_modules/date-fns/locale/pt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_pt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_locale_pt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'DD/MM/YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_pt__
        };
        this.date = new Date();
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    DatePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__("./resources/assets/src/app/components/date-picker/date-picker.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/date-picker/date-picker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/date-picker/date-picker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__ = __webpack_require__("./node_modules/ng2-datepicker/dist/ng2-datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_picker_component__ = __webpack_require__("./resources/assets/src/app/components/date-picker/date-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var DatePickerModule = (function () {
    function DatePickerModule() {
    }
    DatePickerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__["a" /* NgDatepickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__date_picker_component__["a" /* DatePickerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__date_picker_component__["a" /* DatePickerComponent */]
            ]
        })
    ], DatePickerModule);
    return DatePickerModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toggle-empresa\" class=\"dropdown\" [class.is-active]=\"actived\">\n  <div class=\"dropdown__trigger has-arrow\"\n       aria-haspopup=\"true\"\n       aria-expanded=\"false\"\n       data-toggle=\"\"\n       data-toggle-target=\"#toggle-empresa\" (click)=\"openDropdown()\">\n\n    <span class=\"dropdown__trigger-arrow\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--inverse\">\n        <use xlink:href=\"js/assets/sprite.svg#icon-arrow-down\"></use>\n      </svg>                       \n    </span>\n    <div class=\"media media--v-align-center\">\n      <div class=\"media__figure\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--inverse\">\n          <use attr.xlink:href=\"{{img}}\"></use>\n        </svg>       \n      </div>\n      <div class=\"media__body is-desktop\">\n        <p class=\"dropdown-text-top\">{{name}}</p>\n        <p class=\"dropdown-text-bottom\">{{subtitle}}</p>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"dropdown__content w-enterprise\" aria-labelledby=\"dropdownMenuButton\">\n\n    <header class=\"dropdown-mobile-header\">\n      <p class=\"text is-semibold\">{{name}}</p>\n      <p class=\"text\">{{subtitle}}</p>\n    </header>\n\n    <ul class=\"list list--divided list--neutral\">\n      <li class=\"list__item\" *ngFor=\"let item of options\" >\n        <span class=\"list__content\">\n\n          <a class=\"list-link\" (click)=\"isOneDropdownOption(item)\">\n            <div class=\"media media--v-align-center\">\n              <div class=\"media__figure\">\n                <div class=\"picture picture--large\">\n                  <img [src]=\"'js/assets/icons/icon-company.svg'\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"text-default-featured\">{{item.nome_jogo}}</p>\n              </div>\n            </div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"list-arrow-right\">\n              <use xlink:href=\"js/assets/sprite.svg#icon-arrow-right\"></use>\n            </svg> \n          </a>\n\n        </span>\n      </li> \n    </ul>\n\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownEnterpriseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DropdownEnterpriseComponent = (function () {
    function DropdownEnterpriseComponent(route, http, alert) {
        this.route = route;
        this.http = http;
        this.alert = alert;
        this.loading = false;
        this.actived = false;
        this.isNaturalAction = false;
        this.isDropdownOption = false;
    }
    DropdownEnterpriseComponent.prototype.ngOnInit = function () {
    };
    /**
     * Seta a propriedade ativa e inativa do dropdown
     */
    DropdownEnterpriseComponent.prototype.openDropdown = function () {
        var _this = this;
        this.isNaturalAction = true;
        if (this.actived) {
            this.actived = false;
        }
        else {
            this.actived = true;
            setTimeout(function () {
                _this.isNaturalAction = false;
            }, 100);
        }
    };
    /**
     * Evita que o listner de eventos o escute e redireciona
     * a aplicação para url inserida.
     * @param item Jogo representa jogo/empresa que foi selecionado pelo usuário
     */
    DropdownEnterpriseComponent.prototype.isOneDropdownOption = function (item) {
        var _this = this;
        this.isDropdownOption = true;
        /* atualizando perfil no backend */
        var params = this.updateJogoCorrenteInPerfil(item);
        this.http.post('api/user/perfil/save', params).subscribe(function (data) {
            _this.loading = false;
            _this.actived = false;
            var dataStr = JSON.stringify(data);
            var retorno = JSON.parse(dataStr);
            var redirect = "/dashboard";
            if (retorno.isPrimeiroAcessoJogo) {
                redirect = "/perfil/" + item.codigo;
            }
            else {
                /* jogoDefault no storage */
                localStorage.setItem('jogoDefault', JSON.stringify(item));
                /* atualizando labels */
                _this.name = item.nome_jogo;
                _this.subtitle = item.subtitulo;
            }
            /* atualizar dashboard com os dados do jogo selecionado (regra no dashboard) */
            _this.route.navigate([redirect]);
        }, function (error) {
            _this.loading = false;
            if (error.status === 422) {
                for (var msg in error.error.messages) {
                    return _this.alert.error("Ops :)", error.error.messages[msg]);
                }
            }
            _this.alert.error(" Ops :)", error.error);
        });
    };
    /**
     * Escuta qualquer envento dentro da interface e caso exitir algum click
     * o método é executado.
     * Define a variável de ativação do dropdown como falso
     */
    DropdownEnterpriseComponent.prototype.closeDropdown = function () {
        if (!this.isNaturalAction && this.isDropdownOption === false) {
            this.actived = false;
        }
    };
    /*
     * Atualiza novo jogo selecionado no perfil do usuario
     */
    DropdownEnterpriseComponent.prototype.updateJogoCorrenteInPerfil = function (item) {
        var user = JSON.parse(localStorage.getItem('user'));
        var perfil = user.perfil;
        perfil.jogo_corrente_codigo = item.codigo;
        return perfil;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('img'),
        __metadata("design:type", String)
    ], DropdownEnterpriseComponent.prototype, "img", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", String)
    ], DropdownEnterpriseComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subtitle'),
        __metadata("design:type", String)
    ], DropdownEnterpriseComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
        __metadata("design:type", Array)
    ], DropdownEnterpriseComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownEnterpriseComponent.prototype, "closeDropdown", null);
    DropdownEnterpriseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown-enterprise',
            template: __webpack_require__("./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar__["AlertBar"]])
    ], DropdownEnterpriseComponent);
    return DropdownEnterpriseComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownEnterpriseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_enterprise_component__ = __webpack_require__("./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components

var DropdownEnterpriseModule = (function () {
    function DropdownEnterpriseModule() {
    }
    DropdownEnterpriseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dropdown_enterprise_component__["a" /* DropdownEnterpriseComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dropdown_enterprise_component__["a" /* DropdownEnterpriseComponent */]
            ]
        })
    ], DropdownEnterpriseModule);
    return DropdownEnterpriseModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  id=\"toggle-profile\"\n  class=\"dropdown\"\n  data-toggle=\"\"\n  data-toggle-target=\"#toggle-profile\"\n  [class.is-active]=\"actived\">\n  <div\n    class=\"dropdown__trigger has-arrow\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    (click)=\"handlerProfile()\">\n\n    <span class=\"dropdown__trigger-arrow\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--inverse\">\n        <use xlink:href=\"js/assets/sprite.svg#icon-arrow-down\"></use>\n      </svg>              \n    </span>\n  \n    <div class=\"picture picture--large picture--rounded\">\n      <img [src]=\"srcImage\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"dropdown__content\" aria-labelledby=\"dropdownMenuButton\">\n    \n    <div class=\"media media--v-align-center\">\n      <div class=\"media__figure\">\n        <app-file-uploader \n          [activeColor]=\"'orangered'\" \n          [baseColor]=\"'lightgray'\" \n          (finishUpload)=\"seeUpload($event)\">\n        </app-file-uploader>\n      </div>\n      <div class=\"media__body\">\n        <p class=\"text-default-featured is-stronger f-uppercase\">{{getUser().nome}}</p>\n      </div>\n    </div>\n\n    <hr class=\"hr hr--small\">\n\n    <ul class=\"list list--neutral\">\n      <li class=\"list__item\">\n        <span class=\"list__content\">\n          <a routerLink=\"/jogos\">\n            <div class=\"media media--v-align-center\">\n              <div class=\"media__figure\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--light icon--small\">\n                  <use xlink:href=\"js/assets/sprite.svg#icon-gamepad\"></use>\n                </svg> \n              </div>\n              <div class=\"media__body\">\n                <p class=\"text-default-featured is-lighter\">Jogos</p>\n              </div>\n            </div>\n          </a>\n        </span>\n      </li>\n      <li class=\"list__item\">\n        <span class=\"list__content\">\n          <a (click)=\"goLogin()\">\n            <div class=\"media media--v-align-center\">\n              <div class=\"media__figure\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--light icon--small\">\n                  <use xlink:href=\"js/assets/sprite.svg#icon-sign-out\"></use>\n                </svg> \n              </div>\n              <div class=\"media__body\">\n                  <p class=\"text-default-featured is-lighter\">Sair</p>\n              </div>\n            </div>\n          </a>\n        </span>\n      </li>\n    </ul>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownPerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownPerfilComponent = (function () {
    function DropdownPerfilComponent(myComponent, router) {
        this.myComponent = myComponent;
        this.router = router;
        this.actived = false;
        this.srcImage = 'js/assets/pictures/coruja.png';
    }
    DropdownPerfilComponent.prototype.ngOnInit = function () {
    };
    /**
     * Define a variável de controle do dropdown do perfil button
     * como verdadeiro ou falso
     */
    DropdownPerfilComponent.prototype.handlerProfile = function () {
        if (this.actived) {
            this.actived = false;
        }
        else {
            this.actived = true;
        }
    };
    /**
     * Escuta qualquer envento dentro da interface e caso exitir algum click
     * fora do component o método é chamado.
     * caso identificar define a variável de ativação do dropdown como falso assim fechando o mesmo
     */
    DropdownPerfilComponent.prototype.handleClick = function ($event) {
        var clickedComponent = $event;
        var inside = false;
        do {
            if (clickedComponent === this.myComponent.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (inside) {
            // console.log('inside - ' + this.type);
        }
        else {
            // console.log('outside - ' + this.type);
            this.actived = false;
        }
    };
    /**
     * Visualiza o base64 gerado após o upload da imagem
     * @param  $event Objeto recebido após upload da imagem
     */
    DropdownPerfilComponent.prototype.seeUpload = function ($event) {
        this.srcImage = $event.base64;
        console.log($event.base64);
    };
    DropdownPerfilComponent.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    DropdownPerfilComponent.prototype.goLogin = function () {
        this.router.navigate(['login']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownPerfilComponent.prototype, "handleClick", null);
    DropdownPerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown-perfil',
            template: __webpack_require__("./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DropdownPerfilComponent);
    return DropdownPerfilComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownPerfilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_perfil_component__ = __webpack_require__("./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var DropdownPerfilModule = (function () {
    function DropdownPerfilModule() {
    }
    DropdownPerfilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dropdown_perfil_component__["a" /* DropdownPerfilComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__dropdown_perfil_component__["a" /* DropdownPerfilComponent */]
            ]
        })
    ], DropdownPerfilModule);
    return DropdownPerfilModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--full-height\">\n  <header class=\"card__header\">\n    <h3 class=\"heading heading--xsmall f-uppercase is-semibold\">Minhas aplicações</h3>\n  </header>\n  <div class=\"card__content\">\n\n    <div class=\"row row--gutter-sm row--v-align-center\">\n\n      <div class=\"col-xs-6\">\n\n        <app-static-card \n          [label]=\"'Valor total aplicado'\" \n          [icon]=\"'js/assets/icons/icon-chart.svg'\" \n          [value]=\"150000\" \n          [inBox]=\"false\">\n        </app-static-card>\n\n      </div>\n\n      <div class=\"col-xs-6\">\n\n        <app-yield [status]=\"'success'\" [unit]=\"'mês'\" [description]=\"'Rendimento atual'\" [value]=\"780\"></app-yield>\n\n      </div>\n\n    </div>\n\n    <hr class=\"hr\">\n\n    <div class=\"panel\">\n      <header class=\"panel__header\">\n        <h4 class=\"heading heading--xxsmall heading--secondary is-semibold\">Quer fazer um investimento?</h4>\n        <p class=\"text text--small is-light\">Quanto você deseja investir?</p>\n      </header>\n      <div class=\"panel__body\">\n\n        <div class=\"row row--gutter-xl\">\n\n          <div class=\"col-xs-7\">\n\n            <app-text-field [type]=\"'loan'\" [juros]=\"4\" [refForm]=\"formInvestment\"></app-text-field>\n\n          </div>\n\n          <div class=\"col-xs-5 col--align-right\">\n\n            <app-saga-button [label]=\"'Aplicar valor'\" [size]=\"'lg'\" (click)=\"applyValueMethod()\"></app-saga-button>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n    <hr class=\"hr\">\n\n    <div class=\"panel\">\n      <header class=\"panel__header\">\n        <h4 class=\"heading heading--xxsmall heading--secondary is-semibold\">Precisando resgatar um valor?</h4>\n        <p class=\"text text--small is-light\">Quanto você deseja resgatar?</p>\n      </header>\n      <div class=\"panel__body\">\n\n        <div class=\"row row--gutter-xl\">\n\n          <div class=\"col-xs-7\">\n\n            <app-text-field [type]=\"'loan'\" [refForm]=\"formRescue\"></app-text-field>\n\n          </div>\n\n          <div class=\"col-xs-5 col--align-right\">\n\n            <app-saga-button [label]=\"'Resgatar'\" [size]=\"'lg'\" (click)=\"rescueMethod()\"></app-saga-button>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroAplicacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinanceiroAplicacaoComponent = (function () {
    function FinanceiroAplicacaoComponent(builder) {
        this.builder = builder;
    }
    FinanceiroAplicacaoComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    /**
     * Cria as intâncias dos formulários a serem preenchidos
     */
    FinanceiroAplicacaoComponent.prototype.createForms = function () {
        this.formInvestment = this.builder.group({
            loan: [null]
        });
        this.formRescue = this.builder.group({
            loan: [null]
        });
    };
    /**
     * Método chamado ao clicar no botão 'Aplicar valor'
     */
    FinanceiroAplicacaoComponent.prototype.applyValueMethod = function () {
        console.log('Clique "Aplicar valor"');
    };
    /**
     * Método chamado ao clicar no botão 'Resgatar'
     */
    FinanceiroAplicacaoComponent.prototype.rescueMethod = function () {
        console.log('Clique "Resgatar"');
    };
    FinanceiroAplicacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-financeiro-aplicacao',
            template: __webpack_require__("./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FinanceiroAplicacaoComponent);
    return FinanceiroAplicacaoComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroAplicacaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__financeiro_aplicacao_component__ = __webpack_require__("./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modules

// Components

var FinanceiroAplicacaoModule = (function () {
    function FinanceiroAplicacaoModule() {
    }
    FinanceiroAplicacaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__financeiro_aplicacao_component__["a" /* FinanceiroAplicacaoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__financeiro_aplicacao_component__["a" /* FinanceiroAplicacaoComponent */]
            ]
        })
    ], FinanceiroAplicacaoModule);
    return FinanceiroAplicacaoModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <header class=\"card__header\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Meus empréstimos</h3>\n  </header>\n  <div class=\"card__content\">\n\n    <div class=\"row row--gutter-sm row--v-align-center\">\n    \n      <div class=\"col-xs-6\" *ngFor=\"let item of arrayDataCards\" >\n        <app-static-card \n          [label]=\"item.desc\" \n          [icon]=\"item.icon\"                \n          [value]=\"item.value\"\n          [inBox]=\"item.isBox\">\n        </app-static-card>\n      </div>  \n    \n    </div>\n\n    <hr class=\"hr hr--secondary\">\n    <div class=\"u-vspace-large\"></div>\n\n    <div class=\"panel\">\n      <header class=\"panel__header\">\n        <h4 class=\"heading heading--xxsmall is-semibold\">Emprestar</h4>\n      </header>\n      <div class=\"panel__body\">\n\n        <div class=\"row row--gutter-xl\">\n  \n          <div class=\"col-xs-7\">\n            <app-text-field [type]=\"'loan'\" [juros]=\"4\" [refForm]=\"formEmprestimo\"></app-text-field>\n          </div>\n\n          <div class=\"col-xs-5 col--align-right\">\n\n            <app-saga-button [label]=\"'Pegar empréstimos'\" [size]=\"'lg'\" (click)=\"getMoney()\"></app-saga-button>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Second block -->\n<div class=\"card card--small-padding\">\n\n    <div class=\"card__content\">\n      \n      <div class=\"row row--no-gutter\">\n        <div class=\"col-xs-12 col-lg-4\">\n          <h3 class=\"heading heading--xxsmall is-semibold f-uppercase\">Débito de empréstimo (4)</h3>\n        </div>\n        <div class=\"col-xs-12 col-lg-8\">\n          <div class=\"slider slider--small\">\n      \n            <div class=\"slide\">\n\n              <app-financeiro-slider-card></app-financeiro-slider-card>\n\n            </div>\n      \n          </div>\n        </div>       \n      </div>\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroEmprestimoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinanceiroEmprestimoComponent = (function () {
    function FinanceiroEmprestimoComponent(builder) {
        this.builder = builder;
        this.arrayDataCards = [
            { icon: 'js/assets/icons/icon-checkout.svg', value: 173480, desc: 'Valor atual em caixa', isBox: false },
            { icon: 'js/assets/icons/icon-debit.svg', value: 53000, desc: 'Valor atual em débitos', isBox: false }
        ];
    }
    FinanceiroEmprestimoComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    /**
     * Cria o formulário do input text com o valor do 'Emprestar'
     */
    FinanceiroEmprestimoComponent.prototype.createForm = function () {
        this.formEmprestimo = this.builder.group({
            loan: [null],
        });
    };
    /**
     * Método executado ao apertar no botão 'pegar emprestimos'
     */
    FinanceiroEmprestimoComponent.prototype.getMoney = function () {
        console.log('Clique no botão pegar empréstimo');
    };
    FinanceiroEmprestimoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-financeiro-emprestimo',
            template: __webpack_require__("./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FinanceiroEmprestimoComponent);
    return FinanceiroEmprestimoComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroEmprestimoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__financeiro_slider_card_financeiro_slider_card_module__ = __webpack_require__("./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__financeiro_emprestimo_component__ = __webpack_require__("./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modules


// Components

var FinanceiroEmprestimoModule = (function () {
    function FinanceiroEmprestimoModule() {
    }
    FinanceiroEmprestimoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__financeiro_slider_card_financeiro_slider_card_module__["a" /* FinanceiroSliderCardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__financeiro_emprestimo_component__["a" /* FinanceiroEmprestimoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__financeiro_emprestimo_component__["a" /* FinanceiroEmprestimoComponent */]
            ]
        })
    ], FinanceiroEmprestimoModule);
    return FinanceiroEmprestimoModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-carousel\n    [inputs]=\"carouselLoan\"\n    (carouselLoad)=\"carouselChange($event)\">\n      <ngx-item NgxCarouselItem *ngFor=\"let item of loans\" >\n\n          <div class=\"card card--smallpadding\">\n\n              <div class=\"card__content\">\n            \n                <div class=\"row row--gutter-md\">\n                  <div class=\"col-xs-12 col-lg-6\">\n                    <h4 class=\"text text--small is-light\">Valor do empréstimo</h4>\n                    <p class=\"text is-semibold\">{{item.loan_value | currency: 'BRL'}}</p>\n                  </div>\n                  <div class=\"col-xs-12 col-lg-6\">\n                    <h4 class=\"text text--small is-light\">Total pago</h4>\n                    <p class=\"text is-semibold\">{{item.total_payment | currency: 'BRL'}}</p>\n                  </div>\n                </div>\n            \n                <hr class=\"hr hr--small\">\n            \n                <div class=\"scroll-container scroll-container--small\">\n            \n                    <table class=\"table table--light\">\n              \n                        <thead class=\"table__head\">\n                          <tr class=\"table__row\">\n                            <th class=\"table__cell\" colspan=\"1000\">Parcelas:</th>\n                          </tr>\n                        </thead>\n                      \n                        <tbody class=\"table__body\">\n                          <tr class=\"table__row\" *ngFor=\"let partial of item.partials\" >\n                            <td class=\"table__cell\">{{partial.date}}</td>\n                            <td class=\"table__cell\">{{partial.price | currency: 'BRL'}}</td>\n                            <td class=\"table__cell\">{{partial.status}}</td>\n                          </tr>\n                        </tbody>\n                      \n                      </table>\n            \n                </div>\n                \n              </div>\n            </div>\n            \n      </ngx-item>\n\n      <span class=\"slider__arrow slider__arrow--left\" NgxCarouselPrev>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n          <use xlink:href=\"js/assets/sprite.svg#icon-left\"></use>\n        </svg>\n      </span>\n  \n      <span class=\"slider__arrow slider__arrow--right\" NgxCarouselNext>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n          <use xlink:href=\"js/assets/sprite.svg#icon-right\"></use>\n        </svg>\n      </span>\n</ngx-carousel>"

/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroSliderCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinanceiroSliderCardComponent = (function () {
    function FinanceiroSliderCardComponent() {
        this.loans = [
            {
                loan_value: 20000,
                total_payment: 8000,
                partials: [
                    { date: '05/12', price: '4000', status: 'Pago' },
                    { date: '05/01', price: '4000', status: 'Pago' },
                    { date: '05/02', price: '4000', status: 'Em aberto' },
                    { date: '05/03', price: '4000', status: 'Em aberto' },
                    { date: '05/04', price: '4000', status: 'Em aberto' }
                ]
            },
            {
                loan_value: 12000,
                total_payment: 8000,
                partials: [
                    { date: '05/12', price: '4000', status: 'Pago' },
                    { date: '05/01', price: '4000', status: 'Pago' },
                    { date: '05/02', price: '4000', status: 'Em aberto' }
                ]
            },
        ];
    }
    FinanceiroSliderCardComponent.prototype.ngOnInit = function () {
        this.startCarouselProperty();
    };
    /**
     * Inicializa o carrossel docs: https://www.npmjs.com/package/ngx-carousel
     */
    FinanceiroSliderCardComponent.prototype.startCarouselProperty = function () {
        this.carouselLoan = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: false
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    /**
     * Verifica o id do slide atual, método emitido
     * toda vez que o slide muda para o próximo
     * @param  $event Id do slide ativo no momento
     */
    FinanceiroSliderCardComponent.prototype.carouselChange = function ($event) {
        // console.log($event);
    };
    FinanceiroSliderCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-financeiro-slider-card',
            template: __webpack_require__("./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceiroSliderCardComponent);
    return FinanceiroSliderCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroSliderCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__financeiro_slider_card_component__ = __webpack_require__("./resources/assets/src/app/components/financeiro-slider-card/financeiro-slider-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var FinanceiroSliderCardModule = (function () {
    function FinanceiroSliderCardModule() {
    }
    FinanceiroSliderCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__financeiro_slider_card_component__["a" /* FinanceiroSliderCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__financeiro_slider_card_component__["a" /* FinanceiroSliderCardComponent */]
            ]
        })
    ], FinanceiroSliderCardModule);
    return FinanceiroSliderCardModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"formulario\">\n  <fieldset class=\"form__fieldset\">\n\n    <app-text-field type=\"email\" [refForm]=\"formulario\" #email></app-text-field>\n    <app-text-field type=\"password\" [refForm]=\"formulario\" #password></app-text-field>\n\n    <a routerLink=\"/recuperar\" class=\"link-base\" id=\"recuperar\">\n      Esqueci minha senha\n    </a>\n\n  </fieldset>\n\n  <footer class=\"form__footer\" #footerLogin>\n    <app-saga-button [bare]=\"false\" [label]=\"'Entrar'\" (click)=\"login()\"></app-saga-button>\n  </footer>\n\n</form>"

/***/ }),

/***/ "./resources/assets/src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("./resources/assets/src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, route, activatedRoute, alert, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.alert = alert;
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.defineForm();
        this.authenticationService.logout()
            .subscribe(function (data) {
            localStorage.clear();
            // page default...
            _this.returnUrl = _this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
        }, function (error) {
            _this.alert.error("Erro ao realizar logout", error.message);
        });
    };
    /**
     * Define os campos e validadores do formulário
     */
    LoginComponent.prototype.defineForm = function () {
        this.formulario = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    /**
     * Verifica os dados do formulário e caso válidos redireciona para
     * pagina de recursos-humanos.
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        // @ this.formulario.value = Dados do formulário
        if (this.formulario.valid) {
            this.authenticationService.login(this.formulario.value)
                .subscribe(function (data) {
                console.log("data: ", data);
                var redirect = _this.returnUrl;
                var user = data.user;
                /* atualizando dados do usuario no storage */
                localStorage.setItem('user', JSON.stringify(user));
                /* para perfil jogador */
                if (user.jogador === 1) {
                    var jogoCorrente = user.perfil.jogo_corrente;
                    // atualiza o ultimo jogo acessado pelo jogador
                    localStorage.setItem('jogoDefault', JSON.stringify(jogoCorrente));
                    var jogos = data.perfilJogador.jogos;
                    // atualiza a lista de todos os jogos ativos do jogador
                    localStorage.setItem('jogos', JSON.stringify(jogos));
                    if ((jogoCorrente === null || data.perfilJogador.primeiro_acesso_jogo) && jogos.length > 0) {
                        // primeiro acesso ao jogo devemos direcionar para atualização do cargo no jogo
                        var codigoJogo = jogoCorrente !== null ? jogoCorrente.codigo : jogos[0].codigo;
                        redirect = '/perfil/' + codigoJogo;
                    }
                }
                _this.route.navigate([redirect]);
            }, function (error) {
                if (error.status === 422) {
                    for (var msg in error.error.messages) {
                        return _this.alert.error("Falha ao realizar login", error.error.messages[msg]);
                    }
                }
                _this.alert.error("Falha ao realizar login", error.error);
            });
        }
        else {
            // Mensagem caso o formulário não seja valido
            this.alert.error("Dados inválidos!", "Digite um e-mail e senha válidos.");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "inputEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "inputSenha", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./resources/assets/src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_alert_bar__["AlertBar"],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("./resources/assets/src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/main-footer/main-footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/main-footer/main-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-footer\">\n  <div class=\"container\">\n\n    <div class=\"main-footer__child main-footer__child--h-left\">\n      <a routerLink=\"#\" class=\"logo-container logo-container--small\">\n        <img src=\"js/assets/logos/logo-default.svg\" alt=\"logo footer\">\n      </a>\n    </div>\n    <div class=\"main-footer__child main-footer__child--h-center is-desktop\">\n      <app-navigation></app-navigation>\n    </div>  \n    \n  </div>\n</nav>"

/***/ }),

/***/ "./resources/assets/src/app/components/main-footer/main-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainFooterComponent = (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    MainFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-footer',
            template: __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/main-footer/main-footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_footer_component__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var MainFooterModule = (function () {
    function MainFooterModule() {
    }
    MainFooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_footer_component__["a" /* MainFooterComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__main_footer_component__["a" /* MainFooterComponent */]
            ]
        })
    ], MainFooterModule);
    return MainFooterModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/main-header/main-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\"  height=\"10vh !important\">\n  <div class=\"container is-desktop\">\n\n    <div class=\"main-header__child\">\n      \n      <app-dropdown-enterprise\n        [img]=\"'js/assets/sprite.svg#icon-building-line'\"\n        [name]=\"jogoDefault.nome_jogo\"\n        [subtitle]=\"jogoDefault.subtitulo\"\n        [options]=\"dropdownEnterpriseOptions\">\n      </app-dropdown-enterprise>\n\n    </div>\n    <div class=\"main-header__child\">\n      <div class=\"wrapper wrapper--inline\">\n      \n        <app-counter-box \n          [type]=\"'monetary'\"\n          [money]=\"173480\">\n        </app-counter-box>\n      \n        <app-counter-box \n          [type]=\"'time'\"\n          [meta]=\"500\"\n          [actual]=\"132\"\n          [unitTime]=\"'dias'\">\n        </app-counter-box>\n\n      </div>\n    </div>\n    <div class=\"main-header__child\">\n      <div class=\"wrapper wrapper--inline\">\n        \n        <app-icon-button [img]=\"'js/assets/sprite.svg#icon-trophy'\" [type]=\"'ranking'\" [arrayRanking]=\"dropdownRankingOptions\"></app-icon-button>\n\n        <app-icon-button [img]=\"'js/assets/sprite.svg#icon-bell'\" [type]=\"'notification'\" [arrayNotifications]=\"dropdownNotificationsOptions\"></app-icon-button>\n\n        <span class=\"v-divisor\"></span>\n\n        <app-dropdown-perfil></app-dropdown-perfil>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"container is-mobile\">\n\n    <div class=\"main-header__mobile-group\">\n\n      <div class=\"wrapper wrapper--inline\">\n\n        <app-counter-box \n          [type]=\"'monetary'\"\n          [money]=\"173480\">\n        </app-counter-box>\n\n        <div class=\"u-vspace-xsmall\"></div>\n      \n        <app-counter-box \n          [type]=\"'time'\"\n          [meta]=\"500\"\n          [actual]=\"132\"\n          [unitTime]=\"'dias'\">\n        </app-counter-box>\n\n      </div>\n            \n      <span class=\"v-divisor\"></span>\n\n      <app-dropdown-perfil></app-dropdown-perfil>\n\n    </div>\n\n  </div>\n</header>"

/***/ }),

/***/ "./resources/assets/src/app/components/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./resources/assets/src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainHeaderComponent = (function () {
    function MainHeaderComponent(authenticationService, alert) {
        this.authenticationService = authenticationService;
        this.alert = alert;
        this.jogoDefault = JSON.parse(localStorage.getItem('jogoDefault'));
        this.dropdownEnterpriseOptions = JSON.parse(localStorage.getItem('jogos'));
        this.dropdownRankingOptions = [
            { icon: 'js/assets/icons/icon-first.svg', name: 'Samsung LTDA', profitability: 35 },
            { icon: 'js/assets/icons/icon-second.svg', name: 'SK Telecon T1', profitability: 22 },
            { icon: 'js/assets/icons/icon-third.svg', name: 'Flash Wolves', profitability: 22 },
            { icon: 'js/assets/icons/icon-flag.svg', name: 'Koo Fighters', profitability: 22 },
            { icon: 'js/assets/icons/icon-flag.svg', name: 'Loren Ipsum', profitability: 22 },
            { icon: 'js/assets/icons/icon-flag.svg', name: 'Times Work', profitability: 22 },
            { icon: 'js/assets/icons/icon-flag.svg', name: 'Single Age', profitability: 22 },
            { icon: 'js/assets/icons/icon-flag.svg', name: 'True Jobs', profitability: 22 },
        ];
        this.dropdownNotificationsOptions = [
            { icon: 'js/assets/sprite.svg#icon-happy', text: 'Yay! Seu serviço Aplicativo Mobile foi concluído', isLight: true },
            { icon: 'js/assets/sprite.svg#icon-happy', text: 'Yay! Seu serviço Aplicativo Mobile foi concluído', isLight: false },
            { icon: 'js/assets/sprite.svg#icon-happy', text: 'Uow! Seus Post-it estão acabando :(', isLight: true },
            { icon: 'js/assets/sprite.svg#icon-happy', text: 'Oops! Seu serviço está atrasado', isLight: false }
        ];
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        console.log("jogo def: ", this.jogoDefault);
        if (this.jogoDefault === null) {
            this.alert.warning("Você ainda não possuí acesso ao jogo.", "Aguarde o mediador realizar seu cadastro. Tente novamente mais tarde!");
        }
    };
    MainHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__("./resources/assets/src/app/components/main-header/main-header.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/main-header/main-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_alert_bar__["AlertBar"]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/main-header/main-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_enterprise_dropdown_enterprise_module__ = __webpack_require__("./resources/assets/src/app/components/dropdown-enterprise/dropdown-enterprise.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_perfil_dropdown_perfil_module__ = __webpack_require__("./resources/assets/src/app/components/dropdown-perfil/dropdown-perfil.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_header_component__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var MainHeaderModule = (function () {
    function MainHeaderModule() {
    }
    MainHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__dropdown_enterprise_dropdown_enterprise_module__["a" /* DropdownEnterpriseModule */],
                __WEBPACK_IMPORTED_MODULE_4__dropdown_perfil_dropdown_perfil_module__["a" /* DropdownPerfilModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__main_header_component__["a" /* MainHeaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__main_header_component__["a" /* MainHeaderComponent */]
            ]
        })
    ], MainHeaderModule);
    return MainHeaderModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel--of-visible\">\n  <header class=\"panel__header\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Minhas campanhas</h3>\n  </header>\n  <div class=\"panel__body\">\n\n    <div class=\"u-vspace-large\"></div>\n\n    <app-static-card [icon]=\"'js/assets/icons/icon-users.svg'\" [label]=\"'Alcance de pessoas'\" [value]=\"50000\" [type]=\"'quantity'\"></app-static-card>\n    <app-static-card [icon]=\"'js/assets/icons/icon-hand-money.svg'\" [label]=\"'Alcance de pessoas'\" [value]=\"700\" ></app-static-card>\n\n    <div class=\"u-vspace-xlarge\"></div>\n\n    <app-insertion-card [value]=\"250\" \n                   [reach]=\"10000\" \n                   [insertion]=\"'8'\" \n                   [icon]=\"'js/assets/icons/icon-monitor.svg'\"\n                   [data]=\"insertions[0]\"></app-insertion-card>\n\n    <div class=\"u-vspace-small\"></div>              \n\n    <app-insertion-card [value]=\"450\" \n                   [reach]=\"14000\" \n                   [insertion]=\"'56'\" \n                   [icon]=\"'js/assets/icons/icon-monitor.svg'\"\n                   [data]=\"insertions[1]\">\n    </app-insertion-card>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingCampanhasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketingCampanhasComponent = (function () {
    function MarketingCampanhasComponent() {
        this.insertions = [
            {
                title: 'Adicionar inserções',
                thumbnail: 'js/assets/icons/icon-monitor.svg',
                product_name: 'Computador',
                insertionValue: 250,
                reach: 7000
            },
            {
                title: 'Adicionar inserções',
                thumbnail: 'js/assets/icons/icon-monitor.svg',
                product_name: 'Computador',
                insertionValue: 450,
                reach: 14000
            }
        ];
    }
    MarketingCampanhasComponent.prototype.ngOnInit = function () {
    };
    MarketingCampanhasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marketing-campanhas',
            template: __webpack_require__("./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketingCampanhasComponent);
    return MarketingCampanhasComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingCampanhasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marketing_campanhas_component__ = __webpack_require__("./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var MarketingCampanhasModule = (function () {
    function MarketingCampanhasModule() {
    }
    MarketingCampanhasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__marketing_campanhas_component__["a" /* MarketingCampanhasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__marketing_campanhas_component__["a" /* MarketingCampanhasComponent */]
            ]
        })
    ], MarketingCampanhasModule);
    return MarketingCampanhasModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/marketing-servicos/marketing-servicos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/marketing-servicos/marketing-servicos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <header class=\"card__header\">\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Meus serviços</h3>\n  </header>\n  <div class=\"card__content\">\n\n    <div class=\"row row--gutter-md row--v-align-center\">\n    \n      <div class=\"col-xs-6\">\n        <app-services-card [title]=\"'Aplicativo Mobile'\" [image]=\"'js/assets/icons/icon-mobile.svg'\" [stepValue]=\"18500\"></app-services-card>\n      </div>  \n    \n      <div class=\"col-xs-6\">\n        <app-services-card [title]=\"'Landing Page'\" [image]=\"'js/assets/icons/icon-pc.svg'\" [stepValue]=\"20500\"></app-services-card>\n      </div>  \n    \n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/marketing-servicos/marketing-servicos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingServicosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketingServicosComponent = (function () {
    function MarketingServicosComponent() {
    }
    MarketingServicosComponent.prototype.ngOnInit = function () {
    };
    MarketingServicosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marketing-servicos',
            template: __webpack_require__("./resources/assets/src/app/components/marketing-servicos/marketing-servicos.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/marketing-servicos/marketing-servicos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketingServicosComponent);
    return MarketingServicosComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/marketing-servicos/marketing-servicos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingServicosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_services_card_module__ = __webpack_require__("./resources/assets/src/app/components/services-card/services-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marketing_servicos_component__ = __webpack_require__("./resources/assets/src/app/components/marketing-servicos/marketing-servicos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var MarketingServicosModule = (function () {
    function MarketingServicosModule() {
    }
    MarketingServicosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__services_card_services_card_module__["a" /* ServicesCardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__marketing_servicos_component__["a" /* MarketingServicosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__marketing_servicos_component__["a" /* MarketingServicosComponent */]
            ]
        })
    ], MarketingServicosModule);
    return MarketingServicosModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/recuperar-senha/recuperar-senha.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/recuperar-senha/recuperar-senha.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"formulario\">\n  \n  <fieldset class=\"form__fieldset\">\n    <app-text-field type=\"email\" [refForm]=\"formulario\" #email></app-text-field>\n  </fieldset>\n\n  <footer class=\"form__footer form__footer--align-right\">\n    <app-saga-button [goTo]=\"'/'\" [bare]=\"true\" [label]=\"'Voltar'\"></app-saga-button>\n    <app-saga-button [bare]=\"false\" [label]=\"'Recuperar Senha'\" (click)=\"recover()\"></app-saga-button>\n  </footer>\n\n</form>"

/***/ }),

/***/ "./resources/assets/src/app/components/recuperar-senha/recuperar-senha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecuperarSenhaComponent = (function () {
    function RecuperarSenhaComponent(formBuilder, route, http, alert) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.alert = alert;
        this.loading = false;
    }
    RecuperarSenhaComponent.prototype.ngOnInit = function () {
        this.defineForm();
    };
    /**
     * Define os campos e validadores do formulário
     */
    RecuperarSenhaComponent.prototype.defineForm = function () {
        this.formulario = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]]
        });
    };
    /**
     * Verifica os dados do formulário e caso válidos redireciona para
     * pagina de login.
     */
    RecuperarSenhaComponent.prototype.recover = function () {
        var _this = this;
        // Visualização dos dados do formulário no console
        // @ this.formulario.value = Dados do formulário
        console.log(JSON.stringify(this.formulario.value));
        if (this.formulario.valid) {
            var params = this.formulario.value;
            this.http.post('api/auth/recuperar-senha', params).subscribe(function (data) {
                _this.loading = false;
                _this.route.navigate(['/recuperar-feito']);
            }, function (error) {
                _this.loading = false;
                if (error.status === 422) {
                    for (var msg in error.error.messages) {
                        return _this.alert.error("Ops :)", error.error.messages[msg]);
                    }
                }
                _this.alert.error("Ops :)", error.error);
            });
        }
        else {
            // Mensagem caso o formulário não seja valido
            this.alert.error("E-mail incorreto!", "Informe um endereço de e-mail válido.");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RecuperarSenhaComponent.prototype, "inputEmail", void 0);
    RecuperarSenhaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recuperar-senha',
            template: __webpack_require__("./resources/assets/src/app/components/recuperar-senha/recuperar-senha.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/recuperar-senha/recuperar-senha.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__["AlertBar"]])
    ], RecuperarSenhaComponent);
    return RecuperarSenhaComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/recuperar-senha/recuperar-senha.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recuperar_senha_component__ = __webpack_require__("./resources/assets/src/app/components/recuperar-senha/recuperar-senha.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var RecuperarSenhaModule = (function () {
    function RecuperarSenhaModule() {
    }
    RecuperarSenhaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__recuperar_senha_component__["a" /* RecuperarSenhaComponent */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_5__recuperar_senha_component__["a" /* RecuperarSenhaComponent */]
            ]
        })
    ], RecuperarSenhaModule);
    return RecuperarSenhaModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/redefinir-senha/redefinir-senha.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/redefinir-senha/redefinir-senha.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"formulario\">\n  \n  <fieldset class=\"form__fieldset\">\n    <app-text-field type=\"password\" [refForm]=\"formulario\" #password></app-text-field>\n    <app-text-field type=\"confirmPassword\" [refForm]=\"formulario\" #confirmPassword></app-text-field>\n  </fieldset>\n\n  <footer class=\"form__footer form__footer--align-right\">\n    <app-saga-button [bare]=\"false\" [label]=\"'Salvar'\" (click)=\"recoverUpdate()\"></app-saga-button>\n  </footer>\n\n</form>"

/***/ }),

/***/ "./resources/assets/src/app/components/redefinir-senha/redefinir-senha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RedefinirSenhaComponent = (function () {
    function RedefinirSenhaComponent(formBuilder, route, routeActive, http, alert) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.routeActive = routeActive;
        this.http = http;
        this.alert = alert;
        this.isValidToken = false;
        this.email = "";
        this.token = "";
        this.loading = false;
    }
    RedefinirSenhaComponent.prototype.ngOnInit = function () {
        this.defineForm();
        this.email = this.routeActive.snapshot.params['email'];
        this.token = this.routeActive.snapshot.params['token'];
        this.verifyToken();
    };
    /**
     * Define os campos e validadores do formulário
     */
    RedefinirSenhaComponent.prototype.defineForm = function () {
        this.formulario = this.formBuilder.group({
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            confirmPassword: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    /**
     * Verifica os dados do formulário e caso válidos redireciona para
     * pagina de login.
     */
    RedefinirSenhaComponent.prototype.recoverUpdate = function () {
        var _this = this;
        // Visualização dos dados do formulário no console
        // @ this.formulario.value = Dados do formulário
        console.log(JSON.stringify(this.formulario.value));
        if (this.formulario.valid) {
            if (this.isValidToken) {
                this.loading = true;
                var params = {
                    email: this.email,
                    token: this.token,
                    password: this.formulario.get('password').value,
                    confirmarPassword: this.formulario.get('confirmPassword').value
                };
                console.log("parans", params);
                this.http.post('api/auth/password/update', params).subscribe(function (data) {
                    _this.loading = false;
                    _this.alert.success("", JSON.stringify(data));
                    _this.route.navigate(['/login']);
                }, function (error) {
                    _this.loading = false;
                    if (error.status === 422) {
                        for (var msg in error.error.messages) {
                            return _this.alert.error("Ops :)", error.error.messages[msg]);
                        }
                    }
                    _this.alert.error("Ops :)", error.error);
                });
            }
            else {
                this.alert.error("Ops :)", "Não foi possível atualizar sua senha. Realize novamente o procedimento de recuperação de senha.");
            }
        }
        else {
            this.alert.error("Ops :)", "Senhas inválidas! Digite-as novamente.");
        }
    };
    RedefinirSenhaComponent.prototype.verifyToken = function () {
        var _this = this;
        this.loading = true;
        var params = {
            email: this.email,
            token: this.token
        };
        this.http.get('api/auth/confirm-token/verify', { params: params }).subscribe(function (data) {
            _this.loading = false;
            _this.isValidToken = true;
        }, function (error) {
            _this.loading = false;
            _this.isValidToken = false;
            if (error.status === 422) {
                for (var msg in error.error.messages) {
                    return _this.alert.error("Ops :)", error.error.messages[msg]);
                }
            }
            _this.alert.error("Ops :)", error.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RedefinirSenhaComponent.prototype, "inputPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmPassword'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RedefinirSenhaComponent.prototype, "inputPasswordConfirm", void 0);
    RedefinirSenhaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redefinir-senha',
            template: __webpack_require__("./resources/assets/src/app/components/redefinir-senha/redefinir-senha.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/redefinir-senha/redefinir-senha.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__["AlertBar"]])
    ], RedefinirSenhaComponent);
    return RedefinirSenhaComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/redefinir-senha/redefinir-senha.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_component__ = __webpack_require__("./resources/assets/src/app/components/redefinir-senha/redefinir-senha.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var RedefinirSenhaModule = (function () {
    function RedefinirSenhaModule() {
    }
    RedefinirSenhaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_component__["a" /* RedefinirSenhaComponent */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_component__["a" /* RedefinirSenhaComponent */]
            ]
        })
    ], RedefinirSenhaModule);
    return RedefinirSenhaModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/services-card/services-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/services-card/services-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--small-padding\">\n  <header class=\"card__header card__header--align-center card__header--padding-top\">\n    <h3 class=\"heading heading--xsmall heading--secondary is-semibold\">{{title}}</h3>\n  </header>\n  <div class=\"card__content card__content--align-center card__content--padding-bottom\">\n    <div class=\"media media--vertical-align-center\">\n      <div class=\"media__figure\">\n        <div class=\"picture picture--xhuge\">\n          <img [src]=\"image\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"media__body\">\n\n        <div class=\"form-component\">\n          <label for=\"field-bumber-01\" class=\"form-component__label is-assistive\">Quantidade</label>\n          <div class=\"form-component__control\">\n            <div class=\"field-number\">\n              <input id=\"field-bumber-01\" type=\"text\">\n              <span class=\"field-number__control\" (click)=\"subValue()\" *ngIf=\"total > 0\">\n                <span class=\"is-assistive\">menos</span>\n                <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  height=\"16px\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16px\">\n                  <title></title>\n                  <defs></defs>\n                  <g fill=\"none\" fill-rule=\"evenodd\" id=\"Icons with numbers\" stroke=\"none\" stroke-width=\"1\">\n                    <g fill=\"#000000\" id=\"Group\" transform=\"translate(-720.000000, -144.000000)\">\n                      <path d=\"M720,150 L720,154 L736,154 L736,150 L720,150 Z M720,150\" id=\"Rectangle 204 copy\" />\n                    </g>\n                  </g>\n                </svg>\n              </span>\n              <div class=\"field-number__content field-number__content--small\">{{total | currency: 'BRL'}}</div>\n              <span class=\"field-number__control\" (click)=\"addValue()\">\n                <span class=\"is-assistive\">mais</span>\n                <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"16px\" id=\"Layer_1\" style=\"enable-background:new 0 0 16 16;\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16px\" xml:space=\"preserve\">\n                  <path d=\"M15,6h-5V1c0-0.55-0.45-1-1-1H7C6.45,0,6,0.45,6,1v5H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h5v5c0,0.55,0.45,1,1,1h2  c0.55,0,1-0.45,1-1v-5h5c0.55,0,1-0.45,1-1V7C16,6.45,15.55,6,15,6z\"/>\n                </svg>\n              </span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n  <footer class=\"card__footer card__footer--align-center\">\n    <app-saga-button [label]=\"'Aplicar'\" [size]=\"'lg'\" (click)=\"apply()\"></app-saga-button>\n  </footer>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/services-card/services-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesCardComponent = (function () {
    function ServicesCardComponent() {
    }
    ServicesCardComponent.prototype.ngOnInit = function () {
        this.total = this.stepValue;
    };
    /**
     * Subitrai uma unidade do 'stepValue' ao valor de total
     */
    ServicesCardComponent.prototype.subValue = function () {
        this.total -= this.stepValue;
    };
    /**
     * Adiciona uma unidade do 'stepValue' ao valor de total
     */
    ServicesCardComponent.prototype.addValue = function () {
        this.total += this.stepValue;
    };
    /**
     * Método chamado quando o botão Aplicar for clicado
     */
    ServicesCardComponent.prototype.apply = function () {
        console.log('Botão aplicar - ', this.title);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], ServicesCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('image'),
        __metadata("design:type", String)
    ], ServicesCardComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('stepValue'),
        __metadata("design:type", Number)
    ], ServicesCardComponent.prototype, "stepValue", void 0);
    ServicesCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services-card',
            template: __webpack_require__("./resources/assets/src/app/components/services-card/services-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/services-card/services-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesCardComponent);
    return ServicesCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/services-card/services-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_component__ = __webpack_require__("./resources/assets/src/app/components/services-card/services-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var ServicesCardModule = (function () {
    function ServicesCardModule() {
    }
    ServicesCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__services_card_component__["a" /* ServicesCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__services_card_component__["a" /* ServicesCardComponent */]
            ]
        })
    ], ServicesCardModule);
    return ServicesCardModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/servicos-clientes/servicos-clientes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/servicos-clientes/servicos-clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n  <header class=\"panel__header\">\n    <h3 class=\"heading heading--small heading--secondary f-align-center\">Você tem <strong>{{calcQuantityNewClients() | number: '2.'}}</strong> novos potenciais clientes!</h3>\n    \n  </header>\n  <div class=\"panel__body\">\n\n    <div class=\"slider\">\n\n      <div class=\"slide\">\n        <ngx-carousel\n          [inputs]=\"carouselOne\"\n          (carouselLoad)=\"carouselChange($event)\">\n\n            <ngx-item NgxCarouselItem *ngFor=\"let client of newClients\" >\n              <app-slider-card [title]=\"client.title\"\n                                [time]=\"client.time\"\n                                [value]=\"client.value\"\n                                [date]=\"client.date\"\n                                [thumbnail]=\"client.thumbnail\"\n                                [labors]=\"client.labors\">\n              </app-slider-card>\n            </ngx-item>\n\n            <span class=\"slider__arrow slider__arrow--left\" NgxCarouselPrev>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n                <use xlink:href=\"js/assets/sprite.svg#icon-left\"></use>\n              </svg>\n            </span>\n            <span class=\"slider__arrow slider__arrow--right\" NgxCarouselNext>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n                <use xlink:href=\"js/assets/sprite.svg#icon-right\"></use>\n              </svg>\n            </span>\n\n        </ngx-carousel>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/servicos-clientes/servicos-clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicosClientesComponent = (function () {
    function ServicosClientesComponent() {
        this.newClients = [
            { title: 'Landing Page',
                time: 15,
                value: 15000,
                date: '12/12/2017',
                thumbnail: 'js/assets/icons/icon-pc.svg',
                labors: [
                    { role: 'Desenvolvedor', actual: 180, total: 240, status: 'danger' },
                    { role: 'Desenvolvedor', actual: 180, total: 240, status: 'success' }
                ]
            },
            { title: 'Blog',
                time: 40,
                value: 12000,
                date: '15/03/2018',
                thumbnail: 'js/assets/icons/icon-pc.svg',
                labors: [
                    { role: 'Desenvolvedor', actual: 180, total: 240, status: 'danger' },
                    { role: 'Design', actual: 180, total: 240, status: 'success' }
                ]
            }
        ];
    }
    ServicosClientesComponent.prototype.ngOnInit = function () {
        this.startCarouselProperty();
    };
    /**
     * Calcula a quantidade total de novos clientes
     */
    ServicosClientesComponent.prototype.calcQuantityNewClients = function () {
        return this.newClients.length;
    };
    /**
     * Inicializa o carrossel docs: https://www.npmjs.com/package/ngx-carousel
     */
    ServicosClientesComponent.prototype.startCarouselProperty = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: false
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    /**
     * Verifica o id do slide atual, métodos emitido
     * toda vez que o slide muda para o próximo
     * @param  $event Id do slide ativo no momento
     */
    ServicosClientesComponent.prototype.carouselChange = function ($event) {
        // console.log($event);
    };
    ServicosClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servicos-clientes',
            template: __webpack_require__("./resources/assets/src/app/components/servicos-clientes/servicos-clientes.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/servicos-clientes/servicos-clientes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicosClientesComponent);
    return ServicosClientesComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/servicos-clientes/servicos-clientes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_card_slider_card_module__ = __webpack_require__("./resources/assets/src/app/components/slider-card/slider-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicos_clientes_component__ = __webpack_require__("./resources/assets/src/app/components/servicos-clientes/servicos-clientes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Componets

var ServicosClientesModule = (function () {
    function ServicosClientesModule() {
    }
    ServicosClientesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__slider_card_slider_card_module__["a" /* SliderCardModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__servicos_clientes_component__["a" /* ServicosClientesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__servicos_clientes_component__["a" /* ServicosClientesComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"],
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ServicosClientesModule);
    return ServicosClientesModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/servicos-item/servicos-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/servicos-item/servicos-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--small-padding\"\n  [class.card--success]=\"status === 'success'\">\n  <div class=\"card__content\">\n\n    <div class=\"row row--gutter-md row--v-align-center\">\n        \n      <div class=\"col-xs-5\">\n        <div class=\"media media--small media--v-align-center\">\n          <div class=\"media__figure\">\n            <div class=\"picture picture--large\">\n              <img [src]=\"thumbnail\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"media__body\">\n            <p class=\"text is-semibold\">{{title}}</p>                      \n          </div>\n        </div> \n      </div>\n\n      <div class=\"col-xs-7 col--border-left\">\n\n        <div class=\"row row--gutter-md row--v-align-center\">              \n          <div class=\"col-xs-6\">\n\n            <h4 class=\"text text--small is-light\">Valor</h4>\n            <p class=\"text is-semibold has-status\">{{value | currency: 'BRL'}}</p>\n\n            <div class=\"u-vspace-xxxsmall\"></div>\n\n            <h4 class=\"text text--small is-light\">Entrega</h4>\n            <p class=\"text text--small is-stronger\">{{ date }}</p>\n\n          </div>\n          <div class=\"col-xs-6 col--border-left\">\n\n            <div class=\"wrapper wrapper--h-align-center\">\n\n              <div class=\"progress progress--small\"\n                  [class.progress--danger]=\"status === 'danger'\"\n                  [class.progress--neutral]=\"status === 'neutral'\"\n                  [class.progress--success]=\"status === 'success'\">\n                <span class=\"progress__label is-assistive\">Capacidade produtiva</span>\n                <div\n                  class=\"progress__bar\"\n                  aria-valuemin=\"0\"\n                  aria-valuemax=\"100\"\n                  aria-valuenow=\"actualStatus.percent\"\n                  role=\"progressbar\"\n                  title=\"Progresso: {{actualStatus.percent}}%\"\n                >\n                  <span class=\"progress__bar-fill\" #progressBar>\n                    <span class=\"progress__bar-info is-assistive\">{{actualStatus.percent}}%</span>\n                  </span>\n                </div>\n                <div class=\"progress__bottom-label\">\n                  <span class=\"current-info\">{{actualStatus.description}}</span>                \n                </div>\n              </div>\n  \n              <div class=\"u-vspace-xxxsmall\"></div>\n  \n              <button type=\"button\" class=\"button button--small\" data-toggle=\"\" data-toggle-target=\"#modal-trigger-01\" (click)=\"finish()\" [disabled]=\"status !== 'success'\">\n                <span class=\"button__child\">Entregar</span>\n              </button>\n\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/components/servicos-item/servicos-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicosItemComponent = (function () {
    function ServicosItemComponent() {
        this.statusList = [
            { percent: 20, description: 'No prazo' },
            { percent: 47, description: 'Em atrazo' },
            { percent: 100, description: 'Pronto para entrega' }
        ];
    }
    ServicosItemComponent.prototype.ngOnInit = function () {
        this.verifyIfValid();
        this.chekIsValidStatus();
        this.defineStatus();
        this.setProgressBar();
    };
    /**
     * Verifica se o status inserido é válido
     */
    ServicosItemComponent.prototype.chekIsValidStatus = function () {
        if (this.status !== 'success' && this.status !== 'danger' && this.status !== 'neutral') {
            console.log('Entrada inválida para o status do campo ' + this.title);
        }
    };
    /**
     * Verifica se todos os inputs foram preenchidos
     */
    ServicosItemComponent.prototype.verifyIfValid = function () {
        if (this.title === null ||
            this.thumbnail === null ||
            this.value === null ||
            this.date === null ||
            this.status === null) {
            console.log('É necessário o preenchimento de todos os inputs desse component');
        }
    };
    /**
     * Define as propriedades de progresso do serviço
     */
    ServicosItemComponent.prototype.defineStatus = function () {
        switch (this.status) {
            case 'success':
                this.actualStatus = this.statusList[2];
                break;
            case 'danger':
                this.actualStatus = this.statusList[1];
                break;
            case 'neutral':
                this.actualStatus = this.statusList[0];
                break;
        }
    };
    /**
     * Define a largura da progress bar
     */
    ServicosItemComponent.prototype.setProgressBar = function () {
        this.progressBar.nativeElement.style.width = this.actualStatus.percent + '%';
    };
    /**
     * Método chamado quando clicamos no botão entregar
     */
    ServicosItemComponent.prototype.finish = function () {
        console.log('Botão entregar do item', this.title);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('progressBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ServicosItemComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], ServicosItemComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('thumbnail'),
        __metadata("design:type", String)
    ], ServicosItemComponent.prototype, "thumbnail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Number)
    ], ServicosItemComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('date'),
        __metadata("design:type", String)
    ], ServicosItemComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", String)
    ], ServicosItemComponent.prototype, "status", void 0);
    ServicosItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servicos-item',
            template: __webpack_require__("./resources/assets/src/app/components/servicos-item/servicos-item.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/servicos-item/servicos-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicosItemComponent);
    return ServicosItemComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/servicos-item/servicos-item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicos_item_component__ = __webpack_require__("./resources/assets/src/app/components/servicos-item/servicos-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var ServicosItemModule = (function () {
    function ServicosItemModule() {
    }
    ServicosItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__servicos_item_component__["a" /* ServicosItemComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__servicos_item_component__["a" /* ServicosItemComponent */]
            ]
        })
    ], ServicosItemModule);
    return ServicosItemModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/servicos-producao/servicos-producao.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/servicos-producao/servicos-producao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"card__content\">\n\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Serviços em produção</h3>\n\n    <div class=\"u-vspace-large\"></div>\n\n    <div class=\"scroll-container\">\n      \n      <div class=\"row row--gutter-sm row--v-align-center\">\n      \n        <div class=\"col-xs-12 col-lg-12\" *ngFor=\"let item of arrayServices\" >\n          <app-servicos-item [title]=\"item.title\"\n                              [thumbnail]=\"item.thumbnail\"\n                              [value]=\"item.value\"\n                              [date]=\"item.date\"\n                              [status]=\"item.status\"></app-servicos-item>\n        </div> \n      \n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/servicos-producao/servicos-producao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosProducaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicosProducaoComponent = (function () {
    function ServicosProducaoComponent() {
        this.arrayServices = [
            { title: 'Aplicativo Mobile', thumbnail: 'js/assets/icons/icon-mobile.svg', value: 15000, date: '12/12/2017', status: 'success' },
            { title: 'Aplicativo Mobile', thumbnail: 'js/assets/icons/icon-mobile.svg', value: 15000, date: '12/12/2017', status: 'danger' },
            { title: 'Aplicativo Mobile', thumbnail: 'js/assets/icons/icon-mobile.svg', value: 15000, date: '12/12/2017', status: 'neutral' },
            { title: 'Aplicativo Mobile', thumbnail: 'js/assets/icons/icon-mobile.svg', value: 15000, date: '12/12/2017', status: 'success' }
        ];
    }
    ServicosProducaoComponent.prototype.ngOnInit = function () {
    };
    ServicosProducaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servicos-producao',
            template: __webpack_require__("./resources/assets/src/app/components/servicos-producao/servicos-producao.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/servicos-producao/servicos-producao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicosProducaoComponent);
    return ServicosProducaoComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/servicos-producao/servicos-producao.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosProducaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicos_item_servicos_item_module__ = __webpack_require__("./resources/assets/src/app/components/servicos-item/servicos-item.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicos_producao_component__ = __webpack_require__("./resources/assets/src/app/components/servicos-producao/servicos-producao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var ServicosProducaoModule = (function () {
    function ServicosProducaoModule() {
    }
    ServicosProducaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__servicos_item_servicos_item_module__["a" /* ServicosItemModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__servicos_producao_component__["a" /* ServicosProducaoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__servicos_producao_component__["a" /* ServicosProducaoComponent */]
            ]
        })
    ], ServicosProducaoModule);
    return ServicosProducaoModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/slider-card/slider-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/components/slider-card/slider-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--borderless\">\n\n  <header class=\"card__header card__header--flex-space\">\n\n    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">{{title}}</h3>\n\n    <app-counter-box [type]=\"'string'\" [message]=\"'Restam ' + time + ' dias'\"></app-counter-box>\n\n  </header>\n \n  <div class=\"card__content card__content--special-padding\">\n\n    <div class=\"media media--v-align-center media--gutter-lg\">\n      <div class=\"media__figure\">\n        <div class=\"picture picture--xhuge\">\n          <img [src]=\"thumbnail\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"media__body\">\n\n        <div class=\"wrapper\">\n          <p class=\"text text--small is-light\">Valor</p>\n          <p class=\"text is-semibold text--xlarge\">{{value | currency: 'BRL'}}</p>\n        </div>\n\n        <div class=\"u-vspace-xsmall\"></div>\n\n        <div class=\"wrapper\">\n          <p class=\"text text--small is-light\">Entrega</p>\n          <p class=\"text is-semibold text--large\">{{date}}</p>\n        </div>\n\n        <hr class=\"hr\">\n\n        <div class=\"row row--gutter-sm row--v-align-center\">\n                      \n          <div class=\"col-xs-12 col-lg-6\">\n            <div class=\"media media--v-align-center\">\n              <div class=\"media__figure\">\n                <div class=\"picture\">\n                  <img src=\"js/assets/icons/icon-user.svg\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"text text--small is-light\">{{labors[0].role}}</p>\n                <div class=\"tooltip\" \n                     [class.tooltip--danger]=\"labors[0].status === 'danger'\"\n                     [class.tooltip--success]=\"labors[0].status === 'success'\"\n                     [class.tooltip--attention]=\"labors[0].status === 'attention'\"\n                     role=\"tooltip\">\n                  {{labors[0].actual}}h/{{labors[0].total}}h\n                  <div class=\"tooltip__content\" *ngIf=\"labors[0].status === 'danger'\" >{{labors[0].message}}</div>\n                </div>\n              </div>\n            </div>\n          </div>   \n          \n          <div class=\"col-xs-12 col-lg-6\">\n            <div class=\"media media--v-align-center\">\n              <div class=\"media__figure\">\n                <div class=\"picture\">\n                  <img src=\"js/assets/icons/icon-user.svg\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"text text--small is-light\">{{labors[1].role}}</p>\n                <div class=\"tooltip\"\n                    [class.tooltip--danger]=\"labors[1].status === 'danger'\"\n                    [class.tooltip--success]=\"labors[1].status === 'success'\"\n                    [class.tooltip--attention]=\"labors[1].status === 'attention'\" \n                    role=\"tooltip\">\n                  {{labors[1].actual}}h/{{labors[1].total}}h\n                  <div class=\"tooltip__content\" *ngIf=\"labors[1].status === 'danger'\">{{labors[1].message}}</div>\n                </div>\n              </div>\n            </div>\n          </div>  \n        </div>\n        \n      </div>\n    </div>\n\n  </div>\n  <footer class=\"card__footer card__footer--light\">\n    <div class=\"buttom-group\">\n      <app-saga-button [label]=\"'Recusar'\" [bare]=\"true\" (click)=\"refuse()\"></app-saga-button>\n      <app-saga-button [label]=\"'Aceitar'\" (click)=\"accept()\"></app-saga-button>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/components/slider-card/slider-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderCardComponent = (function () {
    function SliderCardComponent() {
    }
    SliderCardComponent.prototype.ngOnInit = function () {
        this.verifyRequired();
        this.defineMessage();
    };
    /**
     * Emite uma mensagem no console caso algum dos campos forem preenchidos incorretamente.
     */
    SliderCardComponent.prototype.verifyRequired = function () {
        if (this.title === null) {
            console.log('O input ' + this.title + ' não foi preenchido corretamente!');
        }
        if (this.time === null) {
            console.log('O input ' + this.time + ' não foi preenchido corretamente!');
        }
        if (this.value === null) {
            console.log('O input ' + this.value + ' não foi preenchido corretamente!');
        }
        if (this.date === null) {
            console.log('O input ' + this.date + ' não foi preenchido corretamente!');
        }
        if (this.thumbnail === null) {
            console.log('O input ' + this.thumbnail + ' não foi preenchido corretamente!');
        }
        if (this.labors === null) {
            console.log('O input ' + this.labors + ' não foi preenchido corretamente!');
        }
    };
    /**
     * Método chamado quando o botão 'Aceitar' é clidado
     */
    SliderCardComponent.prototype.accept = function () {
        console.log('Botão "Aceitar" do slider-card -', this.title);
    };
    /**
     * Método chamado quando o botão 'Recusar' é clidado
     */
    SliderCardComponent.prototype.refuse = function () {
        console.log('Botão "Recusar" do slider-card -', this.title);
    };
    /**
     * Identifica qual o status de cada 'labors' e define uma menssagem
     * para ser visualizada no tolltip
     */
    SliderCardComponent.prototype.defineMessage = function () {
        for (var _i = 0, _a = this.labors; _i < _a.length; _i++) {
            var item = _a[_i];
            switch (item.status) {
                case 'danger':
                    item.message = 'Mão de obra insulficiente';
                    break;
                case 'success':
                    item.message = '';
                    break;
                case 'attention':
                    item.message = '';
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], SliderCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
        __metadata("design:type", Number)
    ], SliderCardComponent.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Number)
    ], SliderCardComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('date'),
        __metadata("design:type", String)
    ], SliderCardComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('thumbnail'),
        __metadata("design:type", String)
    ], SliderCardComponent.prototype, "thumbnail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('labors'),
        __metadata("design:type", Array)
    ], SliderCardComponent.prototype, "labors", void 0);
    SliderCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider-card',
            template: __webpack_require__("./resources/assets/src/app/components/slider-card/slider-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/components/slider-card/slider-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderCardComponent);
    return SliderCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/components/slider-card/slider-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_card_component__ = __webpack_require__("./resources/assets/src/app/components/slider-card/slider-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var SliderCardModule = (function () {
    function SliderCardModule() {
    }
    SliderCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__slider_card_component__["a" /* SliderCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__slider_card_component__["a" /* SliderCardComponent */]
            ]
        })
    ], SliderCardModule);
    return SliderCardModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/guards/auth.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthConfig; });
//export const GOOGLE_CLIENT_ID = ''
var AuthConfig = {
    defaultHeaders: {
        'Content-Type': 'application/json'
    },
    baseUrl: '/api',
    tokenPrefix: 'bs_auth'
    //providers: {google: {clientId: GOOGLE_CLIENT_ID}};
};


/***/ }),

/***/ "./resources/assets/src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ui_auth__ = __webpack_require__("./node_modules/ng2-ui-auth/ng2-ui-auth.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        // login inválido, redireciona para pagina de login com URL de retorno...
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_ui_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./resources/assets/src/app/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_config__ = __webpack_require__("./resources/assets/src/app/guards/auth.config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__("./resources/assets/src/app/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_guard__["a"]; });




/***/ }),

/***/ "./resources/assets/src/app/screens/access/access.component.css":
/***/ (function(module, exports) {

module.exports = "/* .layout__main{\n    height: 100vh;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/access/access.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <div class=\"layout__body buildings-background is-moving\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n\n      <section class=\"section section--flex-center\">\n\n        <div class=\"container\">\n\n          <div class=\"panel panel--login panel--centered\">\n            <header class=\"panel__header\">\n              <a routerLink=\"/\" class=\"logo-container\">\n                <img src=\"js/assets/logos/logo-default.svg\" alt=\"logo header login\">\n              </a>\n            </header>\n            <div class=\"panel__body\">\n              <h3 class=\"heading heading--small is-semibold\">Prepare-se para entrar <br/> nessa jornada</h3>\n              <div class=\"u-vspace-xxlarge\"></div>\n\n              <app-login></app-login>\n              \n            </div>\n          </div>\n        </div>\n      </section>\n    </main>\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/screens/access/access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessComponent = (function () {
    function AccessComponent() {
    }
    AccessComponent.prototype.ngOnInit = function () {
    };
    AccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-access',
            template: __webpack_require__("./resources/assets/src/app/screens/access/access.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/access/access.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessComponent);
    return AccessComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/access/access.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_module__ = __webpack_require__("./resources/assets/src/app/components/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__access_component__ = __webpack_require__("./resources/assets/src/app/screens/access/access.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules





// Components

var AccessModule = (function () {
    function AccessModule() {
    }
    AccessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__access_component__["a" /* AccessComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__access_component__["a" /* AccessComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"], useValue: '/' }
            ]
        })
    ], AccessModule);
    return AccessModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/cadastrar/cadastrar.component.css":
/***/ (function(module, exports) {

module.exports = "/* .layout__main{\n    height: 100vh;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/cadastrar/cadastrar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n  <div class=\"layout__body buildings-background\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n        <section class=\"section-window\">\n              <span class=\"section-window__bar section-window__bar--top\"></span>\n              <span class=\"section-window__bar section-window__bar--1\"></span>\n              <span class=\"section-window__bar section-window__bar--2\"></span>\n              <span class=\"section-window__bar section-window__bar--3\"></span>\n              <span class=\"section-window__bar section-window__bar--4\"></span>\n              <span class=\"section-window__bar section-window__bar--5\"></span>\n              <span class=\"section-window__bar section-window__bar--6\"></span>\n              <span class=\"section-window__bar section-window__bar--7\"></span>\n              <span class=\"section-window__bar section-window__bar--bottom\"></span>\n            \n              <div class=\"section-window__body\">\n                <div class=\"container\">\n                  <div class=\"panel panel--centered\">\n                    <header class=\"panel__header\">\n                      <h3 class=\"heading heading--small is-semibold\">Primeiro irei te cadastrar</h3>\n                    </header>\n                    <div class=\"panel__body\">\n                      <p class=\"text text--large\">Precisarei de algumas informações para te incluir em nosso banco :)</p>\n                      <div class=\"u-vspace-xlarge\"></div>\n                      \n                      <app-cadastro></app-cadastro>\n                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n              <footer class=\"section-window__footer\">\n                <div class=\"container\">\n                  <div class=\"section-window__person section-window__person--large\">\n                    <img src=\"js/assets/pictures/personagem-cadastrar.svg\" alt=\"\">\n                  </div>\n                  <a routerLink=\"#\" class=\"logo-container logo-container--small\">\n                    <img src=\"js/assets/logos/logo-default.svg\" alt=\"logo footer\">\n                  </a>          \n                </div>\n              </footer>\n            </section>\n    </main>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/cadastrar/cadastrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadastrarComponent = (function () {
    function CadastrarComponent() {
    }
    CadastrarComponent.prototype.ngOnInit = function () {
    };
    CadastrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cadastrar',
            template: __webpack_require__("./resources/assets/src/app/screens/cadastrar/cadastrar.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/cadastrar/cadastrar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CadastrarComponent);
    return CadastrarComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/cadastrar/cadastrar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cadastro_cadastro_module__ = __webpack_require__("./resources/assets/src/app/components/cadastro/cadastro.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastrar_component__ = __webpack_require__("./resources/assets/src/app/screens/cadastrar/cadastrar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules


// Components

var CadastrarModule = (function () {
    function CadastrarModule() {
    }
    CadastrarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_cadastro_cadastro_module__["a" /* CadastroModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__cadastrar_component__["a" /* CadastrarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__cadastrar_component__["a" /* CadastrarComponent */]
            ]
        })
    ], CadastrarModule);
    return CadastrarModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/compras/compras.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/compras/compras.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <header class=\"layout__header\" role=\"banner\">\n    <app-main-header></app-main-header>\n  </header>\n  <div class=\"layout__body buildings-background is-moving\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n  \n      <section class=\"section\">\n  \n        <div class=\"container\">\n      \n          <header class=\"content-header\">\n            <h1 class=\"heading is-semibold\">Compras</h1>\n          </header>\n        \n          <div class=\"section__body\">\n            <div class=\"row row--gutter-md\">\n              <div class=\"col-xs-12 col-lg-6\">\n                \n                <div class=\"card\">\n                  <header class=\"card__header\">\n                    <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Meus insumos</h3>\n                  </header>\n                  <div class=\"card__content\">\n                    <div class=\"scroll-container\">\n                      \n                      <div class=\"row row--gutter-sm row--v-align-center\">\n                      \n                        <div class=\"col-xs-6\" *ngFor=\"let item of inputs\" >\n                          <app-stock-card [title]=\"item.title\" \n                                     [units]=\"item.units\" \n                                     [icon]=\"item.icon\" \n                                     [status]=\"item.status\"\n                                     [modalDatas]=\"simpleModalDatas\"></app-stock-card>\n                        </div>  \n  \n                      </div>\n                      \n                    </div>\n                  </div>\n                </div>\n  \n              </div>\n              <div class=\"col-xs-12 col-lg-6\">\n                \n                  <div class=\"card\">\n                      <header class=\"card__header\">\n                        <h3 class=\"heading heading--xsmall is-semibold f-uppercase\">Meus imobilizados</h3>\n                      </header>\n                      <div class=\"card__content\">\n                        <div class=\"scroll-container\">\n                          \n                          <div class=\"row row--gutter-sm row--v-align-center\">\n                          \n                            <div class=\"col-xs-6\" *ngFor=\"let item of immobilizeds\">\n                                <app-stock-card [title]=\"item.title\" \n                                           [units]=\"item.units\" \n                                           [icon]=\"item.icon\" \n                                           [status]=\"item.status\"\n                                           [modalDatas]=\"simpleModalDatas\"></app-stock-card>\n                            </div>  \n                          \n                          </div>\n                          \n                        </div>\n                      </div>\n                    </div>\n  \n              </div>       \n            </div>\n          </div>\n      \n        </div>\n      \n      </section>\n      \n  \n    </main>\n  </div>\n  <footer class=\"layout__footer\" role=\"contentinfo\">\n    <app-main-footer></app-main-footer>\n  </footer>\n  \n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/compras/compras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComprasComponent = (function () {
    function ComprasComponent() {
        this.inputs = [
            { title: 'Post-it', units: 2, icon: 'assets/icons/icon-papers.svg', status: 'danger' },
            { title: 'Folha A4', units: 600, icon: 'assets/icons/icon-paper-header.svg', status: '' },
            { title: 'Lápis', units: 210, icon: 'assets/icons/icon-paper-header.svg', status: '' },
            { title: 'Régua', units: 700, icon: 'assets/icons/icon-paper-header.svg', status: '' },
            { title: 'Canetas', units: 152, icon: 'assets/icons/icon-papers.svg', status: '' },
            { title: 'Estojo', units: 330, icon: 'assets/icons/icon-paper-header.svg', status: '' },
            { title: 'Caderno', units: 9, icon: 'assets/icons/icon-papers.svg', status: '' },
            { title: 'Grampeador', units: 25, icon: 'assets/icons/icon-papers.svg', status: '' }
        ];
        this.simpleModalDatas = {
            id: 0,
            product_name: 'Post-it',
            thumbnail: 'assets/icons/icon-papers.svg',
            actualQuant: 120,
            modalOpen: false,
            status: 'success',
            providers: [
                {
                    id: 0,
                    name: 'Papelaria A',
                    logo: 'assets/icons/icon-store.svg',
                    unit_value_product: 0.50,
                    send_time: 23 // days
                },
                {
                    id: 1,
                    name: 'Papelaria B',
                    logo: 'assets/icons/icon-store.svg',
                    unit_value_product: 0.70,
                    send_time: 17 // days
                }
            ]
        };
        this.immobilizeds = [
            { title: 'Cadeira', units: 210, icon: 'assets/icons/icon-chair.svg', status: '' },
            { title: 'Computador', units: 210, icon: 'assets/icons/icon-pc.svg', status: '' }
        ];
    }
    ComprasComponent.prototype.ngOnInit = function () {
    };
    ComprasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compras',
            template: __webpack_require__("./resources/assets/src/app/screens/compras/compras.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/compras/compras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComprasComponent);
    return ComprasComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/compras/compras.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compras_component__ = __webpack_require__("./resources/assets/src/app/screens/compras/compras.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var ComprasModule = (function () {
    function ComprasModule() {
    }
    ComprasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__compras_component__["a" /* ComprasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__compras_component__["a" /* ComprasComponent */]
            ]
        })
    ], ComprasModule);
    return ComprasModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <header class=\"layout__header\" role=\"banner\">\n    <app-main-header></app-main-header>\n  </header>\n  <div class=\"layout__body buildings-background is-moving\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n  \n      <section class=\"section\">\n  \n        <div class=\"container\">\n  \n          <header class=\"content-header\">\n            <h1 class=\"heading is-semibold\">Dashboard</h1>\n          </header>\n  \n          <div class=\"section__body\">\n            <div class=\"row row--gutter-md\">\n              <div class=\"col-xs-12 col-md-6 col-lg-4\">\n                <app-dashboard-geral></app-dashboard-geral>\n              </div>\n              <div class=\"col-xs-12 col-md-6 col-lg-5\">\n                <app-dashboard-recursos-humanos></app-dashboard-recursos-humanos>\n              </div>\n              <div class=\"col-xs-12 col-md-6 col-lg-3\">\n                <app-dashboard-compras></app-dashboard-compras>\n              </div>\n              <div class=\"col-xs-12 col-md-6 col-lg-4\">\n                <app-dashboard-financeiro></app-dashboard-financeiro>\n              </div>\n              <div class=\"col-xs-12 col-md-6 col-lg-5\">\n                <app-dashboard-servicos></app-dashboard-servicos>\n              </div>\n              <div class=\"col-xs-12 col-md-6 col-lg-3\">\n                <app-dashboard-marketing></app-dashboard-marketing>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n  \n      </section>\n  \n    </main>\n  </div>\n  <footer class=\"layout__footer\" role=\"contentinfo\">\n    <app-main-footer></app-main-footer>\n  </footer>\n  \n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // pegar jogo default no local storage
        // para atualizar todos os modulos da tela
        // pelo codigo do jogo verificar se não é o primeiro acesso do jogador no jogo
        // caso seja precisamos obrigar realizar cadastro do setor no perfil
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./resources/assets/src/app/screens/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_geral_dashboard_geral_module__ = __webpack_require__("./resources/assets/src/app/components/dashboard-geral/dashboard-geral.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_financeiro_dashboard_financeiro_module__ = __webpack_require__("./resources/assets/src/app/components/dashboard-financeiro/dashboard-financeiro.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_recursos_humanos_dashboard_recursos_humanos_module__ = __webpack_require__("./resources/assets/src/app/components/dashboard-recursos-humanos/dashboard-recursos-humanos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_servicos_dashboard_servicos_module__ = __webpack_require__("./resources/assets/src/app/components/dashboard-servicos/dashboard-servicos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_compras_dashboard_compras_module__ = __webpack_require__("./resources/assets/src/app/components/dashboard-compras/dashboard-compras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_marketing_dashboard_marketing_module__ = __webpack_require__("./resources/assets/src/app/components/dashboard-marketing/dashboard-marketing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__("./resources/assets/src/app/screens/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules









// Components

var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_dashboard_geral_dashboard_geral_module__["a" /* DashboardGeralModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_dashboard_financeiro_dashboard_financeiro_module__["a" /* DashboardFinanceiroModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_recursos_humanos_dashboard_recursos_humanos_module__["a" /* DashboardRecursosHumanosModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_servicos_dashboard_servicos_module__["a" /* DashboardServicosModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_compras_dashboard_compras_module__["a" /* DashboardComprasModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_marketing_dashboard_marketing_module__["a" /* DashboardMarketingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/final/final.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/final/final.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <div class=\"layout__body\">\n    <main class=\"layout__main\" role=\"main\">\n  \n      <section class=\"section-full-dark\">\n \n          <!-- keep the empty header -->\n          <header class=\"section-full-dark__header\"></header>\n      \n          <div class=\"section-full-dark__body\">\n      \n            <div class=\"row row--gutter-lg row--v-align-center\">\n              <div class=\"col-xs-12 col-md-6\">\n      \n                  <div class=\"panel\">\n                    <header class=\"panel__header\">\n                      <h2 class=\"heading heading--xlarge is-bold is-inverse\">Sucesso!</h2>\n                    </header>\n                    <div class=\"panel__body\">\n                      <p class=\"text text--xlarge is-inverse\">\n                          Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour\n                      </p>\n                    </div>\n                    \n                  </div>\n      \n              </div>\n              <div class=\"col-xs-12 col-md-5 is-desktop\">\n                <img src=\"js/assets/pictures/ilustracao-final.svg\" alt=\"\">\n              </div>\n            </div>\n                \n          </div>\n          \n          <footer class=\"section-full-dark__footer\">\n            <a href=\"./\" class=\"logo-container logo-container--default\">\n              <img src=\"js/assets/logos/logo-white.svg\" alt=\"logo\">\n            </a>\n          </footer>\n        \n        </section>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/final/final.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinalComponent = (function () {
    function FinalComponent() {
    }
    FinalComponent.prototype.ngOnInit = function () {
    };
    FinalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-final',
            template: __webpack_require__("./resources/assets/src/app/screens/final/final.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/final/final.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinalComponent);
    return FinalComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/final/final.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__final_component__ = __webpack_require__("./resources/assets/src/app/screens/final/final.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FinalModule = (function () {
    function FinalModule() {
    }
    FinalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__final_component__["a" /* FinalComponent */]]
        })
    ], FinalModule);
    return FinalModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/financeiro/financeiro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/financeiro/financeiro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <header class=\"layout__header\" role=\"banner\">\n    <app-main-header></app-main-header>\n  </header>\n  <div class=\"layout__body buildings-background is-moving\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n      \n      <section class=\"section\">\n  \n        <div class=\"container\">\n      \n          <header class=\"content-header\">\n            <h1 class=\"heading is-semibold\">Financeiro</h1>\n          </header>\n        \n          <div class=\"section__body\">\n            <div class=\"row row--gutter-md\">\n              <div class=\"col-xs-12 col-lg-6\">\n                <app-financeiro-emprestimo></app-financeiro-emprestimo>\n              </div>\n              <div class=\"col-xs-12 col-lg-6\">\n                <app-financeiro-aplicacao></app-financeiro-aplicacao>\n              </div>       \n            </div>\n          </div>\n      \n        </div>\n      \n      </section>\n      \n  \n  \n    </main>\n  </div>\n  <footer class=\"layout__footer\" role=\"contentinfo\">\n    <app-main-footer></app-main-footer>\n  </footer>\n  \n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/financeiro/financeiro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinanceiroComponent = (function () {
    function FinanceiroComponent() {
    }
    FinanceiroComponent.prototype.ngOnInit = function () {
    };
    FinanceiroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-financeiro',
            template: __webpack_require__("./resources/assets/src/app/screens/financeiro/financeiro.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/financeiro/financeiro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceiroComponent);
    return FinanceiroComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/financeiro/financeiro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_financeiro_emprestimo_financeiro_emprestimo_module__ = __webpack_require__("./resources/assets/src/app/components/financeiro-emprestimo/financeiro-emprestimo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_financeiro_aplicacao_financeiro_aplicacao_module__ = __webpack_require__("./resources/assets/src/app/components/financeiro-aplicacao/financeiro-aplicacao.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__financeiro_component__ = __webpack_require__("./resources/assets/src/app/screens/financeiro/financeiro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules





// Component

var FinanceiroModule = (function () {
    function FinanceiroModule() {
    }
    FinanceiroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_financeiro_emprestimo_financeiro_emprestimo_module__["a" /* FinanceiroEmprestimoModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_financeiro_aplicacao_financeiro_aplicacao_module__["a" /* FinanceiroAplicacaoModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__financeiro_component__["a" /* FinanceiroComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__financeiro_component__["a" /* FinanceiroComponent */]
            ]
        })
    ], FinanceiroModule);
    return FinanceiroModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/jogos/jogos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/jogos/jogos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <div class=\"layout\">\n    \n    <div class=\"layout__body\">\n      <main class=\"layout__main\" role=\"main\">\n        <app-modal [type]=\"'finishedGames'\" \n               [visible]=\"finishGamesModal\"\n               [finishedGamesDatas]=\"finished\" \n               (modalClosed)=\"modalClosed($event)\"></app-modal>\n    \n        <section class=\"section-full-dark\">\n  \n          <!-- keep the empty header -->\n          <header class=\"section-full-dark__header\">\n            <div class=\"media media--v-align-center\">\n              <div class=\"media__figure\">\n                <div class=\"picture picture--large picture--rounded\">\n                  <img [src]=\"perfil.thumbnail\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"media__body\">\n                <p class=\"dropdown-text-top\">{{perfil.name}}</p>\n                <p class=\"dropdown-text-bottom\">{{perfil.work}}</p>\n              </div>\n            </div>\n          </header>\n    \n          <div class=\"section-full-dark__body\">\n  \n            <div class=\"row row--gutter-md row--v-align-center\">\n              <div class=\"col-xs-12 col-lg-9\">\n  \n                <div class=\"panel\">\n                  <header class=\"panel__header\">\n                    <h2 class=\"heading heading--xlarge is-bold is-inverse\">Jogos</h2>\n                  </header>\n                  <div class=\"panel__body\">\n  \n                    <div class=\"row row--gutter-md\">\n                      <div class=\"col-xs-12 col-lg-6\">\n                        <div class=\"panel\">\n                          <header class=\"panel__header\">\n                            <h2 class=\"heading heading--xsmall is-semibold is-inverse\">Em andamento</h2>\n                          </header>\n                          <div class=\"panel__body\">\n                            <div class=\"card card--small-padding\">\n                              <div class=\"card__content\">\n                                <app-saga-list [type]=\"'progress'\" [arrayInProgress]=\"inProgress\" ></app-saga-list>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-xs-12 col-lg-6\">\n  \n                        <div class=\"panel\">\n                          <header class=\"panel__header\">\n                            <h2 class=\"heading--small-secondary is-stronger is-inverse\">Não iniciados</h2>\n                          </header>\n                          <div class=\"panel__body\">\n                        \n                            <div class=\"card card--small-padding\">\n                              <div class=\"card__content\">\n                                <app-saga-list [type]=\"'notStarted'\" [arrayNotStarted]=\"notStarted\" ></app-saga-list>\n                              </div>\n                            </div>\n                        \n                          </div>\n                          <footer class=\"panel__footer panel__footer--small-spacing\">\n                            <p class=\"text text--small is-inverse\">\n                              Deseja ver os jogos completos?\n                              <a class=\"link-base link-base--inverse\"\n                                  data-toggle=\"\" data-toggle-target=\"#modal-jogos-01\" (click)=\"openModalFinishGames()\" >\n                                Clique aqui\n                              </a>\n                            </p>\n                          </footer>\n                        </div>\n                        \n  \n                      </div>\n                    </div>\n  \n                  </div>\n  \n                </div>\n  \n              </div>\n  \n              <div class=\"col-xs-12 col-lg-3 u-visible--lg-false\">\n                <img src=\"js/assets/pictures/ilustracao-estacao.png\" alt=\"\">\n              </div>\n            </div>\n  \n          </div>\n          \n          <footer class=\"section-full-dark__footer\">\n            <a href=\"./\" class=\"logo-container logo-container--default\">\n              <img src=\"js/assets/logos/logo-white.svg\" alt=\"\">\n            </a>\n          </footer>\n    \n        </section>\n    \n      </main>\n    </div>\n  \n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/jogos/jogos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JogosComponent = (function () {
    function JogosComponent() {
        this.perfil = {
            name: 'Daniel Henrique',
            work: 'Recursos Humanos',
            thumbnail: 'js/assets/pictures/coruja.png'
        };
        this.inProgress = [
            { type: 'progress', icon: 'js/assets/icons/icon-company.svg', name: 'SKT Telecon T1', profitability: 22, status: 'success' },
            { type: 'progress', icon: 'js/assets/icons/icon-company.svg', name: 'Flash Wolves', profitability: 45, status: 'success' },
            { type: 'progress', icon: 'js/assets/icons/icon-company.svg', name: 'Samsung LTDA', profitability: 80, status: 'danger' }
        ];
        this.notStarted = [
            { type: 'notStarted', icon: 'js/assets/icons/icon-company.svg', name: 'Samsung LTDA', profitability: 0 },
            { type: 'notStarted', icon: 'js/assets/icons/icon-company.svg', name: 'Samsung LTDA', profitability: 0 }
        ];
        this.finished = [
            { type: 'finished', icon: 'js/assets/icons/icon-company.svg', name: 'SKT Telecon T1', profitability: 98, status: 'success' },
            { type: 'finished', icon: 'js/assets/icons/icon-company.svg', name: 'Flash Wolves', profitability: 99, status: 'success' },
            { type: 'finished', icon: 'js/assets/icons/icon-company.svg', name: 'Samsung LTDA', profitability: 60, status: 'attention' }
        ];
        this.finishGamesModal = false;
    }
    JogosComponent.prototype.ngOnInit = function () {
    };
    /**
     * Define como verdadeira a flag de controle de abertura do modal
     */
    JogosComponent.prototype.openModalFinishGames = function () {
        this.finishGamesModal = true;
    };
    /**
     * Define a variável de controle como false
     * @param  $event Objeto do evento fechar modal
     */
    JogosComponent.prototype.modalClosed = function ($event) {
        if ($event.state === 'close') {
            this.finishGamesModal = false;
        }
    };
    JogosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jogos',
            template: __webpack_require__("./resources/assets/src/app/screens/jogos/jogos.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/jogos/jogos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JogosComponent);
    return JogosComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/jogos/jogos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jogos_component__ = __webpack_require__("./resources/assets/src/app/screens/jogos/jogos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components

var JogosModule = (function () {
    function JogosModule() {
    }
    JogosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__jogos_component__["a" /* JogosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__jogos_component__["a" /* JogosComponent */]
            ]
        })
    ], JogosModule);
    return JogosModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/marketing/marketing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/marketing/marketing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <header class=\"layout__header\" role=\"banner\">\n    <app-main-header></app-main-header>\n  </header>\n  <div class=\"layout__body buildings-background is-moving\">\n    <main class=\"layout__main\" role=\"main\">\n  \n        <section class=\"section\">\n  \n          <div class=\"container\">\n  \n            <header class=\"content-header\">\n              <h1 class=\"heading is-semibold\">Marketing</h1>\n            </header>\n          \n            <div class=\"section__body\">\n              <div class=\"row row--gutter-md row--v-align-bottom\">\n                <div class=\"col-xs-12 col-lg-6\">\n  \n                  <app-marketing-servicos></app-marketing-servicos>\n  \n                </div>\n                <div class=\"col-xs-12 col-lg-6 u-f-order-up-lg\">\n  \n                  <app-marketing-campanhas></app-marketing-campanhas>\n  \n                </div>       \n              </div>\n            </div>\n  \n          </div>\n  \n        </section>\n  \n  \n    </main>\n  </div>\n  <footer class=\"layout__footer\" role=\"contentinfo\">\n    <app-main-footer></app-main-footer>\n  </footer>\n  \n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/marketing/marketing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketingComponent = (function () {
    function MarketingComponent() {
    }
    MarketingComponent.prototype.ngOnInit = function () {
    };
    MarketingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marketing',
            template: __webpack_require__("./resources/assets/src/app/screens/marketing/marketing.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/marketing/marketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketingComponent);
    return MarketingComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/marketing/marketing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_marketing_servicos_marketing_servicos_module__ = __webpack_require__("./resources/assets/src/app/components/marketing-servicos/marketing-servicos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_marketing_campanhas_marketing_campanhas_module__ = __webpack_require__("./resources/assets/src/app/components/marketing-campanhas/marketing-campanhas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marketing_component__ = __webpack_require__("./resources/assets/src/app/screens/marketing/marketing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules




// Components

var MarketingModule = (function () {
    function MarketingModule() {
    }
    MarketingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_marketing_servicos_marketing_servicos_module__["a" /* MarketingServicosModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_marketing_campanhas_marketing_campanhas_module__["a" /* MarketingCampanhasModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__marketing_component__["a" /* MarketingComponent */]
            ]
        })
    ], MarketingModule);
    return MarketingModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/perfil/perfil.component.css":
/***/ (function(module, exports) {

module.exports = "/* .wrapper--inline{\n    margin-bottom: 2.55rem;\n}\n\n.layout__main{\n    height: 100vh;\n}\n\n.second-panel{\n    margin-bottom: 2.55rem;\n}\n\n.u-vspace-xxxxlarge {\n    height: 2.6rem;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/perfil/perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n  <div class=\"layout__body\">\n    <main class=\"layout__main\" role=\"main\">\n      <section class=\"section-full-dark\">\n  \n        <!-- keep the empty header -->\n        <header class=\"section-full-dark__header\"></header>\n    \n        <div class=\"section-full-dark__body\">\n          <div class=\"row row--gutter-xlg row--v-align-center\">\n            <div class=\"col-xs-12 col-lg-7 col-md-6\">\n              <div class=\"panel\">\n                <form class=\"form\" [formGroup]=\"formulario\">\n                  <header class=\"panel__header\">\n                    <h2 class=\"heading heading--xlarge is-bold is-inverse\">{{title}}</h2>\n                  </header>\n                  <div class=\"panel__body\">\n                    <app-simple-perfil \n                      [isDefinable]=\"true\" \n                      [name]=\"usuario.nome\"\n                      [avatar]=\"usuario.avatar\"\n                      [works]=\"works\"\n                      [refForm]=\"formulario\"\n                      #cargos>\n                    </app-simple-perfil>\n                  </div>\n    \n                  <div class=\"u-vspace-xxxxlarge\"></div>\n                  \n                  <div class=\"panel second-panel\">\n                    <header class=\"panel__header\">\n                      <h2 class=\"heading heading--large is-semibold is-inverse\">Seu time</h2>\n                    </header>\n                    <div class=\"panel__body\">\n                      <div *ngIf=\"team && team.length\" class=\"row row--gutter-md row--v-align-center\">\n                        <div class=\"col-xs-12 col-lg-6\" *ngFor=\"let item of team\">\n                          <app-simple-perfil\n                            [avatar]=\"item.usuario.avatar\"\n                            [name]=\"item.usuario.nome\"\n                            [job]=\"item.descricaoSetoresResponsavel\"\n                            [isDefinable]=\"false\">\n                          </app-simple-perfil>\n                        </div>\n                      </div>\n                      <div *ngIf=\"!team || !team.length\" class=\"row row--gutter-md row--v-align-center\">\n                          <div class=\"col-xs-12 col-lg-6\">\n                              <p class=\"text text--small is-semibold is-danger\">Sem nenhum participante até o momento!</p>\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"u-vspace-xxxxlarge\"></div>\n                    \n                  <footer class=\"panel__footer panel__footer--align-right\">\n                    <app-saga-button [label]=\"'Voltar'\" [bare]=\"true\" [inverse]=\"true\" [size]=\"'lg'\" [goTo]=\"'/saga/2'\"></app-saga-button>\n                    <app-saga-button [label]=\"'Começar a Saga'\" [size]=\"'lg'\" [bare]=\"false\" (click)=\"savePerfilJogador()\"></app-saga-button>\n                  </footer>\n                </form>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-lg-5 col-md-6 is-desktop\">\n              <img [src]=\"image\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <footer class=\"section-full-dark__footer\">\n          <a routerLink=\"./\" class=\"logo-container logo-container--default\">\n            <img src=\"js/assets/logos/logo-white.svg\" alt=\"\">\n          </a>\n        </footer>\n      </section>\n    </main>\n  </div>\n</div>\n\n  \n        "

/***/ }),

/***/ "./resources/assets/src/app/screens/perfil/perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__ = __webpack_require__("./node_modules/ng2-alert-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilComponent = (function () {
    function PerfilComponent(formBuilder, route, routeActive, http, alert) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.routeActive = routeActive;
        this.http = http;
        this.alert = alert;
        this.title = 'Perfil';
        this.image = 'js/assets/pictures/ilustracao-perfil.png';
        this.loading = false;
        this.usuario = JSON.parse(localStorage.getItem('user'));
        this.works = [];
        this.team = [];
    }
    PerfilComponent.prototype.ngOnInit = function () {
        this.defineForm();
        this.codigoJogo = this.routeActive.snapshot.params['codigoJogo'];
        // na mesma regra:
        // trazer lista de setores (cargos) 
        // setar jogo corrente
        // buscar todos os jogadores do time com seus respectivos setores
        // OBS.: somente deixar atualizar cargo que ainda não esteje atribuido a ngmz
        this.getTimePerfil();
    };
    /**
     * Define os campos e validadores do formulário
     */
    PerfilComponent.prototype.defineForm = function () {
        this.formulario = this.formBuilder.group({
            cargos: [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    PerfilComponent.prototype.getTimePerfil = function () {
        var _this = this;
        this.loading = true;
        console.log("codigo jogo", this.codigoJogo);
        this.http.get('api/jogadores/jogos/' + this.codigoJogo + '/perfil').subscribe(function (data) {
            _this.loading = false;
            var dataStr = JSON.stringify(data);
            var retorno = JSON.parse(dataStr);
            _this.team = retorno.jogadores;
            _this.works = retorno.cargosDisponiveis;
        }, function (error) {
            _this.loading = false;
            if (error.status === 422) {
                for (var msg in error.error.messages) {
                    return _this.alert.error("Ops :)", error.error.messages[msg]);
                }
            }
            _this.alert.error("Ops :)", error.error);
        });
    };
    PerfilComponent.prototype.savePerfilJogador = function () {
        var _this = this;
        if (this.formulario.valid) {
            this.loading = true;
            var params = {
                codigoJogo: this.codigoJogo,
                setores: this.formulario.get('cargos').value
            };
            this.http.post('api/jogadores/jogos/perfil/save', params).subscribe(function (data) {
                _this.loading = false;
                var dataStr = JSON.stringify(data);
                var retorno = JSON.parse(dataStr);
                /* jogoDefault no storage */
                localStorage.setItem('jogoDefault', JSON.stringify(retorno.jogo));
                _this.alert.success("", "Cargo atualizado com sucesso!");
                _this.route.navigate(['/dashboard']);
            }, function (error) {
                _this.loading = false;
                if (error.status === 422) {
                    for (var msg in error.error.messages) {
                        return _this.alert.error("Ops :)", error.error.messages[msg]);
                    }
                }
                _this.alert.error("Ops :)", error.error);
            });
        }
        else {
            this.alert.error("Ops :)", "Selecione uma opção para então iniciar a saga!");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cargos'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PerfilComponent.prototype, "selectCargo", void 0);
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__("./resources/assets/src/app/screens/perfil/perfil.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_alert_bar__["AlertBar"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/perfil/perfil.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_component__ = __webpack_require__("./resources/assets/src/app/screens/perfil/perfil.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules




// Components

var PerfilModule = (function () {
    function PerfilModule() {
    }
    PerfilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__perfil_component__["a" /* PerfilComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__perfil_component__["a" /* PerfilComponent */]
            ]
        })
    ], PerfilModule);
    return PerfilModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.css":
/***/ (function(module, exports) {

module.exports = "/* .layout__main{\n    height: 100vh;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <div class=\"layout__body buildings-background\">\n    <main class=\"layout__main\" role=\"main\">\n      \n      <section class=\"section-window\">\n        \n          <span class=\"section-window__bar section-window__bar--top\"></span>\n          <span class=\"section-window__bar section-window__bar--1\"></span>\n          <span class=\"section-window__bar section-window__bar--2\"></span>\n          <span class=\"section-window__bar section-window__bar--3\"></span>\n          <span class=\"section-window__bar section-window__bar--4\"></span>\n          <span class=\"section-window__bar section-window__bar--5\"></span>\n          <span class=\"section-window__bar section-window__bar--6\"></span>\n          <span class=\"section-window__bar section-window__bar--7\"></span>\n          <span class=\"section-window__bar section-window__bar--bottom\"></span>\n        \n          <div class=\"section-window__body\">\n        \n            <div class=\"container\">\n        \n              <div class=\"popover-box\">\n                <div class=\"popover-box__content\">\n        \n                  <div class=\"panel panel--centered\">\n                    <header class=\"panel__header\">\n                      <img src=\"js/assets/icons/icon-feedback.svg\" aria-hidden=\"true\" class=\"popover-box-icon\">\n                      <h2 class=\"heading is-bold\">Feito!</h2>\n                    </header>\n                    <div class=\"panel__body\">\n                      <p class=\"text text--large\">Orientações sobre como redefinir sua senha foram enviadas para seu e-mail. Verifique!</p>\n                    </div>\n                    <footer class=\"panel__footer\">\n                      <a routerLink=\"'/'\" class=\"button\">\n                        <span class=\"button__child\">Voltar</span>\n                      </a>\n                    </footer>          \n                  </div>\n        \n                </div>\n                <img src=\"js/assets/pictures/popover-arrow.svg\" aria-hidden=\"true\" class=\"popover-box__arrow\">\n              </div>\n            </div> \n          </div>\n        \n          <footer class=\"section-window__footer\">\n            <div class=\"container\">\n              <div class=\"section-window__person\">\n                <img src=\"js/assets/pictures/personagem-inicio.svg\" alt=\"ilustração\">              \n              </div>\n              <a routerLink=\"#\" class=\"logo-container logo-container--small\">\n                <img src=\"js/assets/logos/logo-default.svg\" alt=\"logo footer\">\n              </a>          \n            </div>\n          </footer>\n        </section>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarFeitoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecuperarFeitoComponent = (function () {
    function RecuperarFeitoComponent() {
    }
    RecuperarFeitoComponent.prototype.ngOnInit = function () {
    };
    RecuperarFeitoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recuperar-feito',
            template: __webpack_require__("./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecuperarFeitoComponent);
    return RecuperarFeitoComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarFeitoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recuperar_feito_component__ = __webpack_require__("./resources/assets/src/app/screens/recuperar-feito/recuperar-feito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var RecuperarFeitoModule = (function () {
    function RecuperarFeitoModule() {
    }
    RecuperarFeitoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__recuperar_feito_component__["a" /* RecuperarFeitoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__recuperar_feito_component__["a" /* RecuperarFeitoComponent */]
            ]
        })
    ], RecuperarFeitoModule);
    return RecuperarFeitoModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar/recuperar.component.css":
/***/ (function(module, exports) {

module.exports = "/* .layout__main{\n    height: 100vh;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar/recuperar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n  <div class=\"layout__body buildings-background\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n      <section class=\"section-window\">\n          <span class=\"section-window__bar section-window__bar--top\"></span>\n          <span class=\"section-window__bar section-window__bar--1\"></span>\n          <span class=\"section-window__bar section-window__bar--2\"></span>\n          <span class=\"section-window__bar section-window__bar--3\"></span>\n          <span class=\"section-window__bar section-window__bar--4\"></span>\n          <span class=\"section-window__bar section-window__bar--5\"></span>\n          <span class=\"section-window__bar section-window__bar--6\"></span>\n          <span class=\"section-window__bar section-window__bar--7\"></span>\n          <span class=\"section-window__bar section-window__bar--bottom\"></span>\n        \n          <div class=\"section-window__body\">\n            <div class=\"container\">\n              <div class=\"panel panel--centered\">\n                <header class=\"panel__header\">\n                  <h3 class=\"heading heading--xsmall is-semibold\">Aqui no setor de RH da Business Saga <br> te ajudaremos a voltar para suas atividades</h3>\n                </header>\n                <div class=\"panel__body\">\n          \n                  <p class=\"text text--large\">Insira seu e-mail para recuperar a senha</p>\n\n                  <div class=\"u-vspace-xlarge\"></div>\n                  \n                  <app-recuperar-senha></app-recuperar-senha>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n          <footer class=\"section-window__footer\">\n            <div class=\"container\">\n              <div class=\"section-window__person\">\n                <img src=\"js/assets/pictures/personagem-inicio.svg\" alt=\"\">\n              </div>\n              <a routerLink=\"#\" class=\"logo-container logo-container--small\">\n                <img src=\"js/assets/logos/logo-default.svg\" alt=\"logo footer\">\n              </a>          \n            </div>\n          </footer>\n        </section>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar/recuperar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecuperarComponent = (function () {
    function RecuperarComponent() {
    }
    RecuperarComponent.prototype.ngOnInit = function () {
    };
    RecuperarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recuperar',
            template: __webpack_require__("./resources/assets/src/app/screens/recuperar/recuperar.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/recuperar/recuperar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecuperarComponent);
    return RecuperarComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/recuperar/recuperar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_recuperar_senha_recuperar_senha_module__ = __webpack_require__("./resources/assets/src/app/components/recuperar-senha/recuperar-senha.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recuperar_component__ = __webpack_require__("./resources/assets/src/app/screens/recuperar/recuperar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules




// Components

var RecuperarModule = (function () {
    function RecuperarModule() {
    }
    RecuperarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_recuperar_senha_recuperar_senha_module__["a" /* RecuperarSenhaModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__recuperar_component__["a" /* RecuperarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__recuperar_component__["a" /* RecuperarComponent */]
            ]
        })
    ], RecuperarModule);
    return RecuperarModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.css":
/***/ (function(module, exports) {

module.exports = "/* .layout__main{\n    height: 73vh;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <header class=\"layout__header\" role=\"banner\">\n    <app-main-header></app-main-header>\n  </header>\n  \n  <app-modal \n    [type]=\"'contratar'\" \n    [visible]=\"stateModal.contratar\"\n    [professionalDatas]=\"professionals[idProf]\" \n    (modalClosed)=\"isClosedModal($event)\">\n  </app-modal>\n  \n  <app-modal \n    [type]=\"'demitir'\" \n    [visible]=\"stateModal.demitir\"\n    [professionalList]=\"dissmissProfessionals\"\n    (modalClosed)=\"isClosedModal($event)\">\n  </app-modal>\n  \n  <div class=\"layout__body moving-bg buildings-background is-moving\">\n    <main class=\"layout__main\" role=\"main\">\n      <section class=\"section\">\n  \n        <div class=\"container\">\n  \n          <header class=\"content-header\">\n            <h1 class=\"heading is-semibold\">Recursos Humanos</h1>\n          </header>\n  \n          <div class=\"section__body\">\n            <div class=\"row row--gutter-md\">\n              <div class=\"col-xs-12 col-md-6 col-lg-8\">\n\n                <div class=\"row row--gutter-md\">\n                  \n                  <div class=\"col-xs-12 col-lg-6\">\n      \n                    <app-card-professional\n                      [id]=\"0\"\n                      [work]=\"'Desenvolvedor'\"\n                      [quantity]=\"12\"\n                      [value]=\"48500\"\n                      [production]=\"{\n                                      totalHours: 580,\n                                      actualHours: 390,\n                                      progress: 47,\n                                      type: 'success'\n                                      }\"\n                      [avatar]=\"'js/assets/pictures/avatar-1.png'\"\n                      (hireButtonClicked)=\"hireAction($event)\"\n                      (dismissButtonClicked)=\"dismissAction($event)\"\n                      >\n                    </app-card-professional>\n      \n                  </div>\n                  <div class=\"col-xs-12 col-lg-6\">\n      \n                    <app-card-professional\n                      [id]=\"1\"\n                      [work]=\"'Designer'\"\n                      [quantity]=\"9\"\n                      [value]=\"48500\"\n                      [production]=\"{\n                                      totalHours: 580,\n                                      actualHours: 390,\n                                      progress: 80,\n                                      type: 'danger'\n                                      }\"\n                      [avatar]=\"'js/assets/pictures/avatar-1.png'\"\n                      (hireButtonClicked)=\"hireAction($event)\"\n                      (dismissButtonClicked)=\"dismissAction($event)\">\n                    </app-card-professional>\n      \n                  </div>\n\n                </div>\n\n              </div>\n              <div class=\"col-xs-12 col-md-6 col-lg-4\">\n  \n                <div class=\"row row--gutter-md\">\n                  <div class=\"col-xs-12\">\n  \n                    <app-static-card \n                      [label]=\"'Total: Capacidade produtiva'\" \n                      [icon]=\"'js/assets/icons/icon-paycheck.svg'\"\n                      [frequency]=\"'mes'\"\n                      [value]=\"48500\">\n                    </app-static-card>\n\n                    <div class=\"u-vspace-large\"></div>\n\n                    <app-static-card \n                      [label]=\"'Total: Capacidade produtiva'\" \n                      [icon]=\"'js/assets/icons/icon-produtivity.svg'\"                \n                      [value]=\"48500\">\n                    </app-static-card>\n       \n                  </div>\n                  <div class=\"col-xs-12\">\n  \n                    <div class=\"panel\">\n                      <header class=\"panel__header\">\n                        <h3 class=\"heading heading--small is-semibold\">Jornada de trabalho</h3>\n                      </header>\n                      <div class=\"panel__body\">\n      \n                        <div class=\"row row--gutter-md\">\n                          <div class=\"col-xs-6 col-lg-7\">\n      \n                            <app-toggle-button \n                              [left]=\"'Normal'\" \n                              [right]=\"'Hora extra'\" \n                              (selectedOption)=\"seeOptions($event)\">\n                            </app-toggle-button>\n                          \n                          </div>\n                          <div class=\"col-xs-4 col-lg-4\">\n      \n                            <div class=\"form-component form-component--inline\">\n                              <label class=\"form-component__label\">Horas:</label>\n                              <div class=\"form-component__control\">\n                                <select name=\"field-select\" value=\"\" class=\"field field--select field--xsmall\" style=\"background-image: url(js/assets/icons/angle-down.svg)\">\n                                  <option value=\"Option One\">01</option>\n                                  <option value=\"Option Two\">02</option>\n                                  <option value=\"Option Three\">03</option>\n                                </select>\n                              </div>\n                            </div>\n      \n                          </div>\n                        </div>\n      \n                      </div>\n      \n                    </div>\n      \n                    <div class=\"u-vspace-xxlarge\"></div>\n      \n                    <div class=\"panel\">\n      \n                      <header class=\"panel__header\">\n                        <h3 class=\"heading heading--small is-semibold\">Férias coletivas</h3>\n                      </header>\n      \n                      <div class=\"panel__body\">\n      \n                        <app-date-picker></app-date-picker>\n                        \n                      </div>\n      \n                    </div>\n  \n                  </div>\n                </div>\n  \n              </div>\n            </div>\n          </div>\n  \n        </div>\n  \n      </section>\n    </main>\n  </div>\n  \n  <footer class=\"layout__footer\" role=\"contentinfo\">\n    <app-main-footer></app-main-footer>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecursosHumanosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecursosHumanosComponent = (function () {
    function RecursosHumanosComponent() {
        this.stateModal = {
            contratar: false,
            demitir: false
        };
        this.idProf = 0;
        this.professionals = [
            {
                id: 0,
                avatar: 'js/assets/pictures/avatar-1.png',
                work: 'Desenvolvedor',
                mensal: 4500,
                cProductive: 160,
                total_mensal: 13500,
                total_cProductive: 320
            },
            {
                id: 1,
                avatar: 'js/assets/pictures/avatar-2.png',
                work: 'Designer',
                mensal: 4500,
                cProductive: 160,
                total_mensal: 13500,
                total_cProductive: 320
            },
        ];
        this.dissmissProfessionals = [
            {
                id: 0,
                avatar: 'js/assets/pictures/avatar-1.png',
                name: 'Diego Motta',
                enter_date: '2015-03-22',
                recisao: 3766
            },
            {
                id: 1,
                avatar: 'js/assets/pictures/avatar-2.png',
                name: 'Marília Rafaela',
                enter_date: '2013-12-01',
                recisao: 2435
            },
            {
                id: 2,
                avatar: 'js/assets/pictures/avatar-1.png',
                name: 'Diego Motta',
                enter_date: '2015-03-22',
                recisao: 3766
            },
            {
                id: 3,
                avatar: 'js/assets/pictures/avatar-2.png',
                name: 'Marília Rafaela',
                enter_date: '2013-12-01',
                recisao: 2435
            },
            {
                id: 4,
                avatar: 'js/assets/pictures/avatar-1.png',
                name: 'Diego Motta',
                enter_date: '2015-03-22',
                recisao: 3766
            },
            {
                id: 5,
                avatar: 'js/assets/pictures/avatar-2.png',
                name: 'Marília Rafaela',
                enter_date: '2013-12-01',
                recisao: 2435
            },
            {
                id: 6,
                avatar: 'js/assets/pictures/avatar-1.png',
                name: 'Diego Motta',
                enter_date: '2015-03-22',
                recisao: 3766
            },
            {
                id: 7,
                avatar: 'js/assets/pictures/avatar-2.png',
                name: 'Marília Rafaela',
                enter_date: '2013-12-01',
                recisao: 2435
            }
        ];
    }
    RecursosHumanosComponent.prototype.ngOnInit = function () {
    };
    /**
     * Método que recebe a opção selecionada no toggle
     * @param  $event objeto que é emitido no change do toggle
     */
    RecursosHumanosComponent.prototype.seeOptions = function ($event) {
        console.log($event.selected);
    };
    RecursosHumanosComponent.prototype.openModal = function (name) {
        switch (name) {
            case 'contratar':
                this.stateModal.contratar = true;
                break;
            case 'demitir':
                this.stateModal.demitir = true;
                break;
            default:
                console.log('Parâmetro inválido para o método openModal()');
                break;
        }
    };
    /**
     * Método para fechar o modal
     * @param name Nome do modal
     */
    RecursosHumanosComponent.prototype.closeModal = function (name) {
        switch (name) {
            case 'contratar':
                this.stateModal.contratar = false;
                break;
            case 'demitir':
                this.stateModal.demitir = false;
                break;
            default:
                console.log('Parâmetro inválido para o método closeModal()');
                break;
        }
    };
    /**
     * Método executado ao escutar o evento 'Contratar'
     * @param event objeto recebido ao clicar no botão contratar
     */
    RecursosHumanosComponent.prototype.hireAction = function (event) {
        if (event.state === true && event.button === 'hire') {
            this.idProf = event.id;
            this.openModal('contratar');
        }
    };
    /**
     * Método executado ao escutar o evento 'Demitir'
     * @param event objeto recebido ao clicar no botão demitir
     */
    RecursosHumanosComponent.prototype.dismissAction = function (event) {
        if (event.state === true && event.button === 'dismiss') {
            this.idProf = event.id;
            this.openModal('demitir');
        }
    };
    /**
     * Método que fecha o modal aberto
     * @param event objeto recebido ao clicar no botão para fechar o modal
     */
    RecursosHumanosComponent.prototype.isClosedModal = function (event) {
        if (event.state === 'close') {
            this.closeModal(event.type);
        }
    };
    RecursosHumanosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recursos-humanos',
            template: __webpack_require__("./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecursosHumanosComponent);
    return RecursosHumanosComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecursosHumanosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_card_professional_card_professional_module__ = __webpack_require__("./resources/assets/src/app/components/card-professional/card-professional.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_date_picker_date_picker_module__ = __webpack_require__("./resources/assets/src/app/components/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recursos_humanos_component__ = __webpack_require__("./resources/assets/src/app/screens/recursos-humanos/recursos-humanos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules





// Components

var RecursosHumanosModule = (function () {
    function RecursosHumanosModule() {
    }
    RecursosHumanosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_card_professional_card_professional_module__["a" /* CardProfessionalModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__recursos_humanos_component__["a" /* RecursosHumanosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__recursos_humanos_component__["a" /* RecursosHumanosComponent */]
            ]
        })
    ], RecursosHumanosModule);
    return RecursosHumanosModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/redefinir/redefinir.component.css":
/***/ (function(module, exports) {

module.exports = "/* .layout__main{\n    height: 100vh;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/redefinir/redefinir.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <div class=\"layout__body buildings-background\" style=\"background-image: url(js/assets/backgrounds/background-1.png);\">\n    <main class=\"layout__main\" role=\"main\">\n  \n      \n      <section class=\"section-window\">\n        \n          <span class=\"section-window__bar section-window__bar--top\"></span>\n          <span class=\"section-window__bar section-window__bar--1\"></span>\n          <span class=\"section-window__bar section-window__bar--2\"></span>\n          <span class=\"section-window__bar section-window__bar--3\"></span>\n          <span class=\"section-window__bar section-window__bar--4\"></span>\n          <span class=\"section-window__bar section-window__bar--5\"></span>\n          <span class=\"section-window__bar section-window__bar--6\"></span>\n          <span class=\"section-window__bar section-window__bar--7\"></span>\n          <span class=\"section-window__bar section-window__bar--bottom\"></span>\n        \n          <div class=\"section-window__body\">\n        \n            <div class=\"container\">\n        \n              <div class=\"panel panel--centered\">\n                <header class=\"panel__header\">\n                  <h3 class=\"heading heading--xsmall is-semibold\">Atualização de senha para acesso ao Business Saga</h3>\n                </header>\n                <div class=\"panel__body\">\n          \n                  <p class=\"text text--large\">Insira sua senha logo abaixo.</p>\n          \n                  <div class=\"u-vspace-xlarge\"></div>\n                  \n                  <app-redefinir-senha></app-redefinir-senha>\n                  <br />\n                  <p class=\"text text--large\">Lembre de guardá-la, pois após salvar, você será direcionado a tela de login.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        \n          <footer class=\"section-window__footer\">\n            <div class=\"container\">\n              <div class=\"section-window__person\">\n                <img src=\"js/assets/pictures/personagem-inicio.svg\" alt=\"\">\n              </div>\n              <a routerLink=\"#\" class=\"logo-container logo-container--small\">\n                <img src=\"js/assets/logos/logo-default.svg\" alt=\"logo footer\">\n              </a>          \n            </div>\n          </footer>\n        \n        \n        </section>\n        \n    </main>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/screens/redefinir/redefinir.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedefinirComponent = (function () {
    function RedefinirComponent() {
    }
    RedefinirComponent.prototype.ngOnInit = function () {
    };
    RedefinirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redefinir',
            template: __webpack_require__("./resources/assets/src/app/screens/redefinir/redefinir.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/redefinir/redefinir.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedefinirComponent);
    return RedefinirComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/redefinir/redefinir.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_redefinir_senha_redefinir_senha_module__ = __webpack_require__("./resources/assets/src/app/components/redefinir-senha/redefinir-senha.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redefinir_component__ = __webpack_require__("./resources/assets/src/app/screens/redefinir/redefinir.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules




// Components

var RedefinirModule = (function () {
    function RedefinirModule() {
    }
    RedefinirModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_redefinir_senha_redefinir_senha_module__["a" /* RedefinirSenhaModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__redefinir_component__["a" /* RedefinirComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__redefinir_component__["a" /* RedefinirComponent */]
            ]
        })
    ], RedefinirModule);
    return RedefinirModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/saga/saga.component.css":
/***/ (function(module, exports) {

module.exports = "/* .wrapper--inline{\n    margin-bottom: 2.55rem;\n}\n\n.layout__main{\n    height: 100vh;\n}\n\n.second-panel{\n    margin-bottom: 2.55rem;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/screens/saga/saga.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <div class=\"layout__body\">\n    <main class=\"layout__main\" role=\"main\">\n  \n      <section class=\"section-full-dark\">\n  \n        <!-- keep the empty header -->\n        <header class=\"section-full-dark__header\"></header>\n    \n        <div class=\"section-full-dark__body\">\n    \n          <div class=\"row row--gutter-xlg row--v-align-center\">\n            <div class=\"col-xs-12 col-lg-7\">\n              <div class=\"panel\">\n                <header class=\"panel__header\">\n                  <h2 class=\"heading heading--xlarge is-bold is-inverse\">{{steps[state].title}}</h2>\n                </header>\n                <div class=\"panel__body\">\n                  \n                  <p class=\"text text--xlarge is-inverse\">\n                    {{steps[state].text}}\n                  </p>\n  \n                </div>\n  \n                <div class=\"u-vspace-xxxxlarge\" *ngIf=\"state == 1\"></div>\n                  \n                <div class=\"wrapper wrapper--inline\" *ngIf=\"state == 1\">\n                  \n                  <app-data [type]=\"'icon'\" [title]=\"datas[0].title\" [value]=\"datas[0].value\" [icon]=\"datas[0].icon\"></app-data>\n        \n                  <span class=\"v-divisor\"></span>\n                  \n                  <app-data [type]=\"'icon'\" [title]=\"datas[1].title\" [value]=\"datas[1].value\" [icon]=\"datas[1].icon\"></app-data>\n                  \n                  <span class=\"v-divisor\"></span>\n                  \n                  <app-data [type]=\"'icon'\" [title]=\"datas[2].title\" [value]=\"datas[2].value\" [icon]=\"datas[2].icon\"></app-data>\n                \n                </div>\n\n                <div class=\"u-vspace-xxxlarge\" *ngIf=\"state == 1\"></div>\n  \n                <footer class=\"panel__footer panel__footer--align-right\">\n                  <app-saga-button [label]=\"steps[state].buttonText\" [size]=\"'lg'\" [goTo]=\"steps[state].route\"></app-saga-button>\n                </footer>\n  \n              </div>\n  \n            </div>\n  \n            <div class=\"col-xs-12 col-lg-5 u-visible--lg-false\">\n              <img [src]=\"steps[state].image\" alt=\"\">\n            </div>\n  \n          </div>\n  \n        </div>\n  \n        <footer class=\"section-full-dark__footer\">\n          <a routerLink=\"./\" class=\"logo-container logo-container--default\">\n            <img src=\"js/assets/logos/logo-white.svg\" alt=\"\">\n          </a>\n        </footer>\n      \n      </section>\n      \n    </main>\n  \n  </div>\n  \n</div>\n\n\n      "

/***/ }),

/***/ "./resources/assets/src/app/screens/saga/saga.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SagaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SagaComponent = (function () {
    function SagaComponent(routeActive) {
        this.routeActive = routeActive;
        this.state = 0;
        this.steps = [
            {
                title: 'A Saga',
                text: 'Você e seus amigos foram demitidos de seus empregos e resolveram juntar suas rescisões e economias para abrir uma empresa.',
                buttonText: 'Conhecer a empresa',
                image: 'js/assets/pictures/ilustracao-saga.png',
                route: '/saga/2'
            },
            {
                title: 'A Empresa',
                text: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
                buttonText: 'Completar meu perfil',
                image: 'js/assets/pictures/ilustracao-apresentacao.png',
                route: '/perfil'
            }
        ];
        this.datas = [
            {
                title: 'Capital inicial',
                value: 'R$ 48.500,00',
                icon: 'js/assets/icons/icon-coins.svg'
            },
            {
                title: 'Clientes em potencial',
                value: '10.000',
                icon: 'js/assets/icons/icon-clients.svg'
            },
            {
                title: 'Seu mercado',
                value: '5%',
                icon: 'js/assets/icons/icon-market.svg'
            }
        ];
    }
    SagaComponent.prototype.ngOnInit = function () {
        if (this.routeActive.snapshot.params['state']) {
            this.state = +this.routeActive.snapshot.params['state'] - 1;
        }
    };
    /**
     * Segue para o próximo passo
     */
    SagaComponent.prototype.nextStep = function () {
        this.state++;
    };
    /**
     * Colta ao passo anterior
     */
    SagaComponent.prototype.previusStep = function () {
        this.state--;
    };
    SagaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-saga',
            template: __webpack_require__("./resources/assets/src/app/screens/saga/saga.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/saga/saga.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SagaComponent);
    return SagaComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/saga/saga.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SagaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__saga_component__ = __webpack_require__("./resources/assets/src/app/screens/saga/saga.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components

var SagaModule = (function () {
    function SagaModule() {
    }
    SagaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__saga_component__["a" /* SagaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__saga_component__["a" /* SagaComponent */]
            ]
        })
    ], SagaModule);
    return SagaModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/servicos/servicos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/screens/servicos/servicos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n\n  <header class=\"layout__header\" role=\"banner\">\n    <app-main-header></app-main-header>\n  </header>\n  <div class=\"layout__body moving-bg buildings-background is-moving\">\n    <main class=\"layout__main\" role=\"main\">\n      <section class=\"section\">\n  \n        <div class=\"container\">\n      \n          <header class=\"content-header\">\n            <h1 class=\"heading is-semibold\">Serviços</h1>\n          </header>\n        \n          <div class=\"section__body\">\n            <div class=\"row row--gutter-lg\">\n              <div class=\"col-xs-12 col-lg-5\">\n                <app-servicos-producao></app-servicos-producao>\n              </div>\n              <div class=\"col-xs-12 col-lg-7\">\n                <app-servicos-clientes></app-servicos-clientes>\n              </div>       \n            </div>\n          </div>\n      \n        </div>\n      \n      </section>\n      \n    </main>\n  </div>\n  <footer class=\"layout__footer\" role=\"contentinfo\">\n    <app-main-footer></app-main-footer>\n  </footer>\n  \n</div>"

/***/ }),

/***/ "./resources/assets/src/app/screens/servicos/servicos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicosComponent = (function () {
    function ServicosComponent() {
    }
    ServicosComponent.prototype.ngOnInit = function () {
    };
    ServicosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servicos',
            template: __webpack_require__("./resources/assets/src/app/screens/servicos/servicos.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/screens/servicos/servicos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicosComponent);
    return ServicosComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/screens/servicos/servicos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./resources/assets/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__ = __webpack_require__("./resources/assets/src/app/components/main-header/main-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__ = __webpack_require__("./resources/assets/src/app/components/main-footer/main-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicos_component__ = __webpack_require__("./resources/assets/src/app/screens/servicos/servicos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_servicos_producao_servicos_producao_module__ = __webpack_require__("./resources/assets/src/app/components/servicos-producao/servicos-producao.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_servicos_clientes_servicos_clientes_module__ = __webpack_require__("./resources/assets/src/app/components/servicos-clientes/servicos-clientes.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules



// Components



var ServicosModule = (function () {
    function ServicosModule() {
    }
    ServicosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_header_main_header_module__["a" /* MainHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_main_footer_main_footer_module__["a" /* MainFooterModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_servicos_producao_servicos_producao_module__["a" /* ServicosProducaoModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_servicos_clientes_servicos_clientes_module__["a" /* ServicosClientesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__servicos_component__["a" /* ServicosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__servicos_component__["a" /* ServicosComponent */]
            ]
        })
    ], ServicosModule);
    return ServicosModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ui_auth__ = __webpack_require__("./node_modules/ng2-ui-auth/ng2-ui-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.auth.login(user);
    };
    AuthenticationService.prototype.logout = function () {
        return this.auth.logout();
    };
    AuthenticationService.prototype.getPayload = function () {
        return this.auth.getPayload();
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_ui_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./resources/assets/src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("./resources/assets/src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });



/***/ }),

/***/ "./resources/assets/src/app/shared/add-sub/add-sub.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/add-sub/add-sub.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-component__control\">      \n    <div class=\"field-number\">\n \n      <span class=\"field-number__control\" (click)=\"sub()\">\n        <span class=\"is-assistive\">menos</span>\n        <svg class=\"icon\" \n          xmlns=\"http://www.w3.org/2000/svg\" \n          xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\" \n          xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n          height=\"16px\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16px\">\n          <g fill=\"none\" fill-rule=\"evenodd\" id=\"Icons with numbers\" stroke=\"none\" stroke-width=\"1\">\n            <g fill=\"#000000\" id=\"Group\" transform=\"translate(-720.000000, -144.000000)\">\n              <path d=\"M720,150 L720,154 L736,154 L736,150 L720,150 Z M720,150\" id=\"Rectangle 204 copy\"/>\n            </g>\n          </g>\n        </svg>\n      </span>\n\n      <div class=\"field-number__content\" \n           [class.field-number__content--small]=\"size === 'sm'\">\n           {{start | number : '2.'}}\n      </div>\n\n      <span class=\"field-number__control\" (click)=\"add()\">\n        <span class=\"is-assistive\">mais</span>\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"16px\" id=\"Layer_1\" style=\"enable-background:new 0 0 16 16;\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16px\" xml:space=\"preserve\"><path d=\"M15,6h-5V1c0-0.55-0.45-1-1-1H7C6.45,0,6,0.45,6,1v5H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h5v5c0,0.55,0.45,1,1,1h2  c0.55,0,1-0.45,1-1v-5h5c0.55,0,1-0.45,1-1V7C16,6.45,15.55,6,15,6z\"/></svg>\n      </span>\n    </div>  \n  </div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/add-sub/add-sub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddSubComponent = (function () {
    function AddSubComponent() {
        this.actualValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddSubComponent.prototype.ngOnInit = function () {
    };
    /**
     * Emite o valor atual do contador
     */
    AddSubComponent.prototype.emitValue = function () {
        this.actualValue.emit({
            value: this.start
        });
    };
    /**
     * Adiciona uma unidade ao contador
     */
    AddSubComponent.prototype.add = function () {
        this.start += 1;
        this.emitValue();
    };
    /**
     * Subtrai uma unidade ao contador
     */
    AddSubComponent.prototype.sub = function () {
        if (this.start !== 1) {
            this.start -= 1;
            this.emitValue();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('start'),
        __metadata("design:type", Number)
    ], AddSubComponent.prototype, "start", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('size'),
        __metadata("design:type", String)
    ], AddSubComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddSubComponent.prototype, "actualValue", void 0);
    AddSubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-sub',
            template: __webpack_require__("./resources/assets/src/app/shared/add-sub/add-sub.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/add-sub/add-sub.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddSubComponent);
    return AddSubComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/counter-box/counter-box.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/counter-box/counter-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"counter-box\">\n  <div class=\"counter-box__icon\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n      <use xlink:href=\"js/assets/sprite.svg#icon-clock\"></use>\n    </svg>\n  </div>\n  <div class=\"counter-box__content\">\n    <p *ngIf=\"type == 'time'\" ><strong>{{actual}}</strong>/{{meta}} {{unitTime}}</p>\n    <p *ngIf=\"type == 'monetary'\" >{{money | currency:'BRL'}}</p>\n    <p *ngIf=\"type == 'string'\" >{{message}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/shared/counter-box/counter-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterBoxComponent = (function () {
    function CounterBoxComponent() {
    }
    CounterBoxComponent.prototype.ngOnInit = function () {
        this.checkRequired();
    };
    /**
     * Verifica os inputs obrigatórios do componente e
     * retorna no console o erro identificado.
     */
    CounterBoxComponent.prototype.checkRequired = function () {
        if (this.type === null) {
            console.log('A propriedade "type" no componenent counterBox é obrigatória');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], CounterBoxComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('message'),
        __metadata("design:type", String)
    ], CounterBoxComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('money'),
        __metadata("design:type", Number)
    ], CounterBoxComponent.prototype, "money", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('meta'),
        __metadata("design:type", Number)
    ], CounterBoxComponent.prototype, "meta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('actual'),
        __metadata("design:type", Number)
    ], CounterBoxComponent.prototype, "actual", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('unitTime'),
        __metadata("design:type", String)
    ], CounterBoxComponent.prototype, "unitTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('monetaryCpm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CounterBoxComponent.prototype, "monetary", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('timeCpm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CounterBoxComponent.prototype, "time", void 0);
    CounterBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-counter-box',
            template: __webpack_require__("./resources/assets/src/app/shared/counter-box/counter-box.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/counter-box/counter-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterBoxComponent);
    return CounterBoxComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/data/data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media media--v-align-center\" *ngIf=\"type === 'icon'\" >\n  <div class=\"media__figure\">\n    <div class=\"picture picture--xlarge\">\n      <img [src]=\"icon\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"media__body\">\n    <p class=\"text text--xsmall is-semibold is-inverse f-uppercase\">{{title}}</p>\n    <p class=\"text text--large is-semibold is-inverse f-nowrap\">{{value}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/shared/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataComponent = (function () {
    function DataComponent() {
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], DataComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], DataComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", String)
    ], DataComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], DataComponent.prototype, "icon", void 0);
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data',
            template: __webpack_require__("./resources/assets/src/app/shared/data/data.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/data/data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/dismiss-card/dismiss-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/dismiss-card/dismiss-card.component.html":
/***/ (function(module, exports) {

module.exports = "<label class=\"checkbox-card\" for=\"checkbox-card-{{id}}\">\n  <input type=\"checkbox\" id=\"checkbox-card-{{id}}\" (change)=\"isChange()\" #checkItem>\n  <div class=\"card card--small-padding\">\n    <div class=\"card__content\">\n      <div class=\"media media--vertical-align-center\">\n        <div class=\"media__figure\">\n          <div class=\"picture picture--huge picture--rounded\" data-placeholder=\"dm\">\n            <img [src]=\"avatar\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"u-vspace-large\"></div>\n        <div class=\"media__body\">\n          <p class=\"text text--small is-light f-uppercase\">{{name}}</p>\n          <div class=\"u-vspace-xxxsmall\"></div>\n          <p class=\"text\">{{dateLiteral}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</label>\n"

/***/ }),

/***/ "./resources/assets/src/app/shared/dismiss-card/dismiss-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DismissCardComponent = (function () {
    function DismissCardComponent() {
        this.changeState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DismissCardComponent.prototype.ngOnInit = function () {
        this.dateLiteral = this.formatTimeLiteral(this.enterDate);
    };
    /**
     * Emite um evento ao component pai informando o status do component
     * {
     *  state: boolean, // Estado do component
     *  prof_id: number // Id do profissinal (des)selecionado
     * }
     */
    DismissCardComponent.prototype.isChange = function () {
        if (this.checkItem.nativeElement.checked) {
            this.changeState.emit({
                state: true,
                prof_id: this.id
            });
        }
        else {
            this.changeState.emit({
                state: false,
                prof_id: this.id
            });
        }
    };
    /**
     * Formata a entrada e retorna sua forma escrita
     * @param input Data no formato padrão de DB
     */
    DismissCardComponent.prototype.formatTimeLiteral = function (input) {
        var literalTime = '';
        var myDate = new Date(input);
        var today = new Date();
        var timeDiff = Math.abs(today.getTime() - myDate.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (diffDays > 365) {
            var year = Math.floor(diffDays / 365);
            if ((diffDays % 365) < 30) {
                var days = diffDays - (year * 365);
                literalTime = year + " anos e " + days + " dias";
            }
            else {
                var month = Math.floor((diffDays % 365) / 30);
                literalTime = year + " anos e " + month + " meses";
            }
        }
        else {
            var month = Math.floor(diffDays / 30);
            var days = diffDays % 30;
            literalTime = month + " meses e " + days + " dias";
        }
        return literalTime;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'),
        __metadata("design:type", Number)
    ], DismissCardComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('avatar'),
        __metadata("design:type", String)
    ], DismissCardComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", String)
    ], DismissCardComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('enterDate'),
        __metadata("design:type", String)
    ], DismissCardComponent.prototype, "enterDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('recisao'),
        __metadata("design:type", Number)
    ], DismissCardComponent.prototype, "recisao", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkItem'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DismissCardComponent.prototype, "checkItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DismissCardComponent.prototype, "changeState", void 0);
    DismissCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dismiss-card',
            template: __webpack_require__("./resources/assets/src/app/shared/dismiss-card/dismiss-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/dismiss-card/dismiss-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DismissCardComponent);
    return DismissCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/file-uploader/file-uploader.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/file-uploader/file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<label class=\"field-file\" [class.field-file--large]=\"size === 'lg'\" ondragover=\"return false;\"\n    [class.loaded]=\"loaded\" \n    [style.outlineColor]=\"dragging ? activeColor : baseColor\"\n    (dragenter)=\"handleDragEnter()\"\n    (dragleave)=\"handleDragLeave()\"\n    (drop)=\"handleDrop($event)\">\n    \n  <div class=\"field-file__img\">\n    <img \n      [src]=\"imageSrc\" \n      (load)=\"handleImageLoad()\" \n      [class.loaded]=\"imageLoaded\"/>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" *ngIf=\"size === 'lg'\">\n      <use xlink:href=\"js/assets/sprite.svg#icon-camera-plus\"></use>\n    </svg>\n    <div class=\"picture-placeholder\" *ngIf=\"size !== 'lg'\" >\n      <img src=\"js/assets/pictures/coruja.png\" alt=\"\">\n    </div>\n  </div>\n\n  <input type=\"file\" name=\"file\" accept=\"image/*\"\n      (change)=\"handleInputChange($event)\">\n\n  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-edit\" *ngIf=\"size !== 'lg'\" >\n    <use xlink:href=\"js/assets/sprite.svg#icon-edit\"></use>\n  </svg>\n\n</label>"

/***/ }),

/***/ "./resources/assets/src/app/shared/file-uploader/file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.finishUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        // Variável que armazena o base64 da imagem inserida.
        this.imageSrc = '';
    }
    FileUploaderComponent.prototype.handleDragEnter = function () {
        this.dragging = true;
    };
    FileUploaderComponent.prototype.handleDragLeave = function () {
        this.dragging = false;
    };
    FileUploaderComponent.prototype.handleDrop = function (e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    };
    FileUploaderComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    };
    FileUploaderComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    FileUploaderComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
        this.finishUpload.emit({
            base64: this.imageSrc
        });
    };
    FileUploaderComponent.prototype._setActive = function () {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    };
    FileUploaderComponent.prototype._setInactive = function () {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('size'),
        __metadata("design:type", String)
    ], FileUploaderComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('activeColor'),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "activeColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('baseColor'),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "baseColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('overlayColor'),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "overlayColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "finishUpload", void 0);
    FileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__("./resources/assets/src/app/shared/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/file-uploader/file-uploader.component.css")]
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/icon-button/icon-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/icon-button/icon-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  id=\"toggle-notification\" \n  class=\"dropdown\"\n  [class.is-active]=\"actived\">\n  <div\n    class=\"dropdown__trigger\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    data-toggle=\"\"\n    data-toggle-target=\"#toggle-notifiaction\" \n    (click)=\"handlerDropdown()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--inverse\">\n      <use attr.xlink:href=\"{{img}}\"></use>\n    </svg>\n \n    <span class=\"badge badge--danger\" title=\"4 notificações\" *ngIf=\"type === 'notification' && totalNotifications > 0\" >{{totalNotifications}}</span>\n \n  </div>\n  \n  <div class=\"dropdown__content\" aria-labelledby=\"dropdownMenuButton\" *ngIf=\"type === 'notification'\" >\n    \n    <ul class=\"list list--divided list--neutral\">\n      <li class=\"list__item\" *ngFor=\"let item of arrayNotifications\" >\n        <span class=\"list__content\">\n\n          <div class=\"media media--v-align-center\">\n            <div class=\"media__figure\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--large\" [class.icon--light]=\"item.isLight\">\n                <use attr.xlink:href=\"{{item.icon}}\"></use>\n              </svg>\n            </div>\n            <div class=\"media__body\">\n              <p [class.text-default-light]=\"item.isLight\" [class.text-default]=\"!item.isLight\">{{item.text}}</p>\n            </div>\n          </div>\n\n        </span>\n      </li>\n    </ul>\n\n    <!-- Span inserido para indicar a falta de novas notificações. Não existe no grid original -->\n    <span *ngIf=\"type === 'notification' && totalNotifications <= 0\">Sem novas notificações.</span>\n\n    <footer class=\"dropdown-footer\" *ngIf=\"type === 'notification' && totalNotifications > 0\">\n      \n      <app-saga-button [label]=\"'Limpar tudo'\" (click)=\"clearNotifications()\"></app-saga-button>\n    \n    </footer>\n\n\n  </div>\n\n  <div class=\"dropdown__content\" aria-labelledby=\"dropdownMenuButton\" *ngIf=\"type === 'ranking'\">\n    <div id=\"show-container-01\" class=\"hidden-container\" [class.is-active]=\"sideBoxControl\">\n  \n      <div class=\"hidden-container__wrapper\">\n    \n        <span\n          class=\"hidden-container__trigger\"\n          data-toggle=\"\"\n          data-toggle-target=\"#show-container-01\"\n          (click)=\"handlerSideBox()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-chart-mini\"></use>\n          </svg>\n        </span>\n        \n        <div class=\"hidden-container__list\">\n    \n          <header class=\"hidden-container__header\">\n            <h3 class=\"heading--default-secondary is-stronger\">Ranking</h3>\n          </header>\n    \n          <ul class=\"list list--divided list--neutral\">\n            <li class=\"list__item\" *ngFor=\"let enterprise of arrayRanking\" >\n              <span class=\"list__content\">\n    \n                <div class=\"media media--v-align-center\">\n                  <div class=\"media__figure\">\n                    <div class=\"picture picture--large\">\n                      <img [src]=\"enterprise.icon\" alt=\"\">\n                    </div>\n                  </div>\n                  <div class=\"media__body\">\n                    <p class=\"text-default-featured\">{{enterprise.name}}</p>\n                    <p class=\"text text--small is-light\"> <strong>{{enterprise.profitability}}%</strong> Rentabilidade</p>\n                  </div>\n                </div>\n    \n              </span>\n            </li>\n          </ul>\n        </div>\n    \n        <div class=\"hidden-container__collapse-container\">\n          <img src=\"js/assets/pictures/placeholder-grafico.png\" alt=\"\">\n        </div>\n    \n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/icon-button/icon-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconButtonComponent = (function () {
    function IconButtonComponent(myElement) {
        this.actived = false;
        this.innerComponent = false;
        // Ranking type
        this.sideBoxControl = false;
        this.elementRef = myElement;
    }
    IconButtonComponent.prototype.ngOnInit = function () {
        if (this.testInputType) {
            if (this.type === 'notification') {
                this.quantityNotifications();
            }
        }
    };
    /**
     * Muda o estado do dropdown entre ativo e inativo
     */
    IconButtonComponent.prototype.handlerDropdown = function () {
        if (this.actived) {
            this.actived = false;
        }
        else {
            this.actived = true;
        }
    };
    /**
     * Muda o estado da side box do ranking type
     */
    IconButtonComponent.prototype.handlerSideBox = function () {
        if (this.sideBoxControl) {
            this.sideBoxControl = false;
        }
        else {
            this.sideBoxControl = true;
        }
    };
    /**
     * Seta a o total de notificações
     */
    IconButtonComponent.prototype.quantityNotifications = function () {
        this.totalNotifications = this.arrayNotifications.length;
    };
    /**
     * Limpa o array com as notificações que estão sendo apresentadas
     */
    IconButtonComponent.prototype.clearNotifications = function () {
        this.arrayNotifications = [];
        this.quantityNotifications();
        this.actived = false;
    };
    /**
     * Verifica se o tipo passado como propriedade é válido
     */
    IconButtonComponent.prototype.testInputType = function () {
        if (this.type !== 'notification' && this.type !== 'ranking') {
            console.log('O component icon-button tem apenas dois tipos definifos, favor escolher um dos dois: notification ou ranking');
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Escuta qualquer envento dentro da interface e caso exitir algum click
     * fora deste componente o método é executado.
     * caso existir um clique fora do component, define a variável de ativação
     * do dropdown como falso assim fechando o mesmo
     */
    IconButtonComponent.prototype.handleClick = function ($event) {
        var clickedComponent = $event;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (inside) {
            // console.log('inside - ' + this.type);
        }
        else {
            // console.log('outside - ' + this.type);
            this.actived = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('img'),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "img", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notification'),
        __metadata("design:type", Number)
    ], IconButtonComponent.prototype, "notification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], IconButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('arrayRanking'),
        __metadata("design:type", Array)
    ], IconButtonComponent.prototype, "arrayRanking", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('arrayNotifications'),
        __metadata("design:type", Array)
    ], IconButtonComponent.prototype, "arrayNotifications", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], IconButtonComponent.prototype, "handleClick", null);
    IconButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icon-button',
            template: __webpack_require__("./resources/assets/src/app/shared/icon-button/icon-button.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/icon-button/icon-button.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], IconButtonComponent);
    return IconButtonComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/insertion-card/insertion-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/insertion-card/insertion-card.component.html":
/***/ (function(module, exports) {

module.exports = "<app-modal [type]=\"'insertion'\" [visible]=\"modalIsVisible\" [insertionDatas]=\"data\" (modalClosed)=\"closeModal($event)\"></app-modal>\n<div class=\"card\">\n\n  <button class=\"overlaid-button\" data-toggle=\"\" data-toggle-target=\"#modal-trigger-05\" (click)=\"openModal()\">\n    <div class=\"overlaid-button__child\">\n      <svg xmlns=\"https://www.w3.org/2000/svg\" class=\"icon\">\n        <use xlink:href=\"js/assets/sprite.svg#icon-plus\"></use>\n      </svg>\n    </div>\n  </button>\n\n  <div class=\"card__content\">\n\n    <div class=\"row row--gutter-md row--v-align-center\">\n        \n      <div class=\"col-xs-3\">\n        <div class=\"picture picture--xlarge picture--align-center\">\n          <img [src]=\"icon\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"col-xs-3 col--border-left\">\n\n        <h4 class=\"text text--small is-light\">Valor: inserção</h4>\n        <p class=\"text text--xlarge is-semibold\">{{value | currency: 'BRL'}}</p>\n\n      </div>\n\n      <div class=\"col-xs-3 col--border-left\">\n\n        <h4 class=\"text text--small is-light\">Alcance: inserção</h4>\n        <p class=\"text text--xlarge is-semibold\">{{reach | number}}</p>\n\n      </div>\n\n      <div class=\"col-xs-3 col--border-left\">\n\n        <h4 class=\"text text--small is-light\">Inserções</h4>\n        <p class=\"text text--xlarge is-semibold\">{{insertion}}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/insertion-card/insertion-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertionCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsertionCardComponent = (function () {
    function InsertionCardComponent() {
        this.modalIsVisible = false;
    }
    InsertionCardComponent.prototype.ngOnInit = function () {
    };
    /**
     * Mostra o modal na tela
     */
    InsertionCardComponent.prototype.openModal = function () {
        this.modalIsVisible = true;
    };
    /**
     * Esconde o modal
     * @param $event Objeto retornado quando o modal é fechado
     */
    InsertionCardComponent.prototype.closeModal = function ($event) {
        if ($event.state === 'close') {
            this.modalIsVisible = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Number)
    ], InsertionCardComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('reach'),
        __metadata("design:type", Number)
    ], InsertionCardComponent.prototype, "reach", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('insertion'),
        __metadata("design:type", String)
    ], InsertionCardComponent.prototype, "insertion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], InsertionCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], InsertionCardComponent.prototype, "data", void 0);
    InsertionCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-insertion-card',
            template: __webpack_require__("./resources/assets/src/app/shared/insertion-card/insertion-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/insertion-card/insertion-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsertionCardComponent);
    return InsertionCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/menu-item/menu-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/menu-item/menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"menu__item\">\n  <a [routerLink]=\"route\" class=\"menu__item-link\" routerLinkActive=\"is-active\">\n    <div class=\"media media--vertical-align-center\">\n      <div class=\"media__figure\">\n        <div class=\"picture picture--large\" data-placeholder=\"\">\n            <img [src]=\"icon\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"media__body\">\n        <p class=\"text text--small\">{{label}}</p>\n      </div>\n    </div>\n  </a>\n</li>"

/***/ }),

/***/ "./resources/assets/src/app/shared/menu-item/menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuItemComponent = (function () {
    function MenuItemComponent() {
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], MenuItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'),
        __metadata("design:type", String)
    ], MenuItemComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('route'),
        __metadata("design:type", String)
    ], MenuItemComponent.prototype, "route", void 0);
    MenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-item',
            template: __webpack_require__("./resources/assets/src/app/shared/menu-item/menu-item.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/menu-item/menu-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/modal/modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Contratar -->\n<div role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"modal-heading-01\" aria-modal=\"true\" aria-describedby=\"modal-content-01\"\n  class=\"modal\" [class.is-active]=\"visible\" id=\"modal-trigger-01\" *ngIf=\"type == 'contratar'\">\n\n  <div class=\"modal__container\">\n\n    <header class=\"modal__header\">\n      <h2 id=\"modal-heading-01\" class=\"heading heading--medium is-semibold f-uppercase\">{{professionalDatas.work}}</h2>\n      <button type=\"button\" class=\"button button--bare button--small button--close\" data-toggle=\"\" data-toggle-target=\"#modal-trigger-01\"\n        (click)=\"closeModal()\">\n        <span class=\"button__child\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-close\"></use>\n          </svg>\n        </span>\n        <span class=\"is-assistive\">Close button</span>\n      </button>\n    </header>\n\n    <div class=\"modal__content\" id=\"modal-content-01\">\n\n      <div class=\"media media--v-align-center\">\n\n        <div class=\"media__figure\">\n          <div class=\"picture picture--xhuge picture--rounded\">\n            <img [src]=\"professionalDatas.avatar\" alt=\"\" />\n          </div>\n        </div>\n\n        <div class=\"media__body\">\n\n          <p class=\"text text--small is-light\">Valor mensal</p>\n          <p class=\"text text--large is-semibold\">{{professionalDatas.mensal | currency:'BRL'}}</p>\n\n          <div class=\"u-vspace-xsmall\"></div>\n\n          <p class=\"text text--small is-light\">Capacidade produtiva</p>\n          <p class=\"text text--large is-semibold\">{{professionalDatas.cProductive}} horas</p>\n\n          <div class=\"u-vspace-xsmall\"></div>\n\n          <div class=\"form-component\">\n            <label for=\"field-bumber-01\" class=\"form-component__label\">Quantidade</label>\n            <app-add-sub [start]=\"1\"></app-add-sub>\n          </div>\n\n        </div>\n\n      </div>\n\n      <hr class=\"hr\">\n\n      <div class=\"panel\">\n        <header class=\"panel__header\">\n          <h3 class=\"heading heading--xsmall is-semibold\">Total</h3>\n        </header>\n        <div class=\"panel__body\">\n\n          <div class=\"row row--gutter-lg row--v-align-center\">\n            <div class=\"col-xs-12 col-lg-6\">\n              <p class=\"text text--small is-light\">Valor mensal total</p>\n              <p class=\"text text--large2 is-semibold\">{{professionalDatas.total_mensal | currency:'BRL'}}</p>\n            </div>\n            <div class=\"col-xs-12 col-lg-6\">\n              <p class=\"text text--small is-light\">Capacidade produtiva mensal</p>\n              <p class=\"text text--large2 is-semibold\">{{professionalDatas.total_cProductive}} horas</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <footer class=\"modal__footer modal__footer--align-right\">\n\n      <app-saga-button [label]=\"'Cancelar'\" [bare]=\"true\" [size]=\"'lg'\" (click)=\"closeModal()\"></app-saga-button>\n\n      <app-saga-button [label]=\"'Contratar'\" [size]=\"'lg'\" (click)=\"contratar()\"></app-saga-button>\n\n    </footer>\n\n  </div>\n\n  <div class=\"modal__background\"></div>\n\n</div>\n\n<!-- Demitir -->\n<div role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"modal-heading-01\" aria-modal=\"true\" aria-describedby=\"modal-content-01\"\n  class=\"modal\" [class.is-active]=\"visible\" id=\"modal-trigger-02\" *ngIf=\"type == 'demitir'\">\n\n  <div class=\"modal__container\" [class.modal__container--large]=\"type == 'demitir'\">\n\n    <header class=\"modal__header\">\n      <h2 id=\"modal-heading-02\" class=\"heading heading--small is-semibold f-uppercase\">Demitir</h2>\n      <p class=\"text\">Selecione abaixo o desenvolvedor que você deseja demitir</p>\n      <button type=\"button\" class=\"button button--bare button--small button--close\" data-toggle=\"\" data-toggle-target=\"#modal-trigger-02\"\n        (click)=\"closeModal()\">\n        <span class=\"button__child\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-close\"></use>\n          </svg>\n        </span>\n        <span class=\"is-assistive\">Close button</span>\n      </button>\n    </header>\n\n    <div class=\"modal__content\" id=\"modal-content-01\">\n\n      <div class=\"row row--gutter-lg\" *ngIf=\"type === 'demitir'\">\n        <div class=\"col-xs-12 col-lg-9\">\n\n          <div class=\"scroll-container\">\n\n            <div class=\"row row--gutter-md row--v-align-center\">\n\n              <div class=\"col-xs-12 col-lg-4\" *ngFor=\"let item of professionalList\">\n                <app-dismiss-card [id]=\"item.id\" [avatar]=\"item.avatar\" [name]=\"item.name\" [enterDate]=\"item.enter_date\" [recisao]=\"item.recisao\"\n                  (changeState)=\"isSelected($event)\">\n                </app-dismiss-card>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"col-xs-12 col-lg-3\">\n          <p class=\"text text--small is-light\">Total de selecionados</p>\n          <p class=\"text text--large2 is-semibold\">{{qtdSelection | number:'2.'}}</p>\n\n          <div class=\"u-vspace-large\"></div>\n\n          <p class=\"text text--small is-light\">Valor total da rescisão</p>\n          <p class=\"text text--large2 is-semibold\">{{recisaoValue | currency:'BRL'}}</p>\n        </div>\n      </div>\n\n    </div>\n\n    <footer class=\"modal__footer modal__footer--align-right\">\n\n      <app-saga-button [label]=\"'Voltar'\" [size]=\"'lg'\" [bare]=\"true\" (click)=\"closeModal()\"></app-saga-button>\n\n      <app-saga-button [label]=\"'Demitir'\" [size]=\"'lg'\" (click)=\"demitir()\"></app-saga-button>\n\n    </footer>\n\n  </div>\n\n  <div class=\"modal__background\"></div>\n\n</div>\n\n<!-- Insertion -->\n<div role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"modal-heading-01\" aria-modal=\"true\" aria-describedby=\"modal-contenticon--01\"\n  class=\"modal\" [class.is-active]=\"visible\" id=\"modal-trigger-05\" *ngIf=\"type === 'insertion'\">\n\n  <div class=\"modal__container modal__container--medium\">\n\n    <header class=\"modal__header\">\n      <h2 id=\"modal-heading-02\" class=\"heading heading--small is-semibold f-uppercase\">{{insertionDatas.title}}</h2>\n      <button type=\"button\" class=\"button button--bare button--small button--close\" data-toggle=\"\" data-toggle-target=\"#modal-trigger-05\"\n        (click)=\"closeModal()\">\n        <span class=\"button__child\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-close\"></use>\n          </svg>\n        </span>\n        <span class=\"is-assistive\">Close button</span>\n      </button>\n    </header>\n\n    <div class=\"modal__content\" id=\"modal-content-01\">\n\n\n\n      <div class=\"row row--gutter-lg\">\n        <div class=\"col-xs-12 col-lg-4\">\n\n          <div class=\"media media--vertical-align-center\">\n\n            <div class=\"media__body\">\n\n              <h3 class=\"heading heading--xsmall is-semibold f-align-left\">{{insertionDatas.product_name}}</h3>\n\n            </div>\n\n            <div class=\"media__figure\">\n              <div class=\"picture picture--xhuge\">\n                <img [src]=\"insertionDatas.thumbnail\" alt=\"\">\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"col-xs-12 col-lg-4\">\n\n          <p class=\"text text--small is-light\">Valor por inserção</p>\n          <p class=\"text text--large is-semibold\">{{insertionDatas.insertionValue | currency: 'BRL'}}</p>\n\n          <div class=\"u-vspace-large\"></div>\n\n          <p class=\"text text--small is-light\">Alcance por inserção</p>\n          <p class=\"text text--large is-semibold\">{{insertionDatas.reach | number}}</p>\n\n        </div>\n\n        <div class=\"col-xs-12 col-lg-4\">\n\n          <div class=\"form-component\">\n            <label for=\"field-bumber-01\" class=\"form-component__label\">Inserções</label>\n            <app-add-sub [start]=\"initialCount\" (actualValue)=\"countInsertion($event)\"></app-add-sub>\n          </div>\n\n          <hr class=\"hr hr--secondary\">\n\n          <p class=\"text text--small\">Alcance total</p>\n          <div class=\"u-vspace-xxxxsmall\"></div>\n          <p class=\"text text--small is-semibold\">Valor total: {{insertionTotal | currency: 'BRL'}}</p>\n\n        </div>\n      </div>\n\n    </div>\n\n    <footer class=\"modal__footer modal__footer--align-right\">\n      <app-saga-button [label]=\"'Voltar'\" [bare]=\"true\" [size]=\"'lg'\" (click)=\"backInsertionButton()\"></app-saga-button>\n      <app-saga-button [label]=\"'Aplicar'\" [size]=\"'lg'\" (click)=\"applyInsertionButton()\"></app-saga-button>\n    </footer>\n\n  </div>\n\n  <div class=\"modal__background\"></div>\n\n</div>\n\n<!-- Finished Games -->\n<div role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"modal-heading-01\" aria-modal=\"true\" aria-describedby=\"modal-content-01\"\n  class=\"modal\" [class.is-active]=\"visible\" id=\"modal-jogos-01\" *ngIf=\"type == 'finishedGames'\">\n\n  <div class=\"modal__container modal__container--xsmall\">\n\n    <header class=\"modal__header\">\n      <h2 id=\"modal-heading-02\" class=\"heading heading--xsmall is-semibold f-uppercase\">Jogos concluídos</h2>\n      <button type=\"button\" class=\"button button--bare button--small button--close\" data-toggle=\"\" data-toggle-target=\"#modal-jogos-01\"\n        (click)=\"closeModal()\">\n        <span class=\"button__child\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-close\"></use>\n          </svg>\n        </span>\n        <span class=\"is-assistive\">Close button</span>\n      </button>\n    </header>\n\n    <div class=\"modal__content\" id=\"modal-content-01\">\n\n      <app-saga-list [type]=\"'progress'\" [arrayInProgress]=\"finishedGamesDatas\"></app-saga-list>\n\n    </div>\n\n    <footer class=\"modal__footer modal__footer--align-center\">\n      <app-saga-button [label]=\"'Fechar'\" [size]=\"'lg'\" (click)=\"closeModal()\"></app-saga-button>\n    </footer>\n\n  </div>\n\n  <div class=\"modal__background\"></div>\n\n</div>\n\n<!-- Shop -->\n<div role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"modal-heading-01\" aria-modal=\"true\" aria-describedby=\"modal-content-01\"\n  class=\"modal\" id=\"modal-compra-01\" [class.is-active]=\"visible\" *ngIf=\"type == 'shop'\">\n\n  <div class=\"modal__container modal__container--large\">\n\n    <header class=\"modal__header\">\n      <div class=\"media media--v-align-center\">\n        <div class=\"media__figure\">\n          <div class=\"picture picture--large\">\n            <img [src]=\"shopDatas.thumbnail\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"media__body\">\n          <h2 id=\"modal-heading-02\" class=\"heading heading--xsmall is-semibold f-uppercase\">{{shopDatas.product_name}}</h2>\n        </div>\n      </div>\n      <div class=\"u-vspace-xsmall\"></div>\n      <p class=\"text is-light\">Selecione abaixo a quantidade e com qual fornecedor você irá comprar</p>\n     \n      <button type=\"button\" class=\"button button--bare button--small button--close\" \n              data-toggle=\"\" data-toggle-target=\"#modal-compra-01\" (click)=\"closeModal()\">\n        <span class=\"button__child\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-close\"></use>\n          </svg>\n        </span>\n        <span class=\"is-assistive\">Close button</span>\n      </button>\n\n    </header>\n\n    <div class=\"modal__content\" id=\"modal-content-01\">\n\n      <h4 class=\"heading heading--xsmall is-semibold\">Fornecedores</h4>\n\n      <hr class=\"hr\">\n\n      <div class=\"row row--gutter-md\">\n        <div class=\"col-xs-12 col-md-6 col-lg-3\" *ngFor=\"let item of shopDatas.providers\">\n\n          <app-select-store \n            [id]=\"item.id\"\n            [logo]=\"item.logo\"\n            [name]=\"item.name\"\n            [quantity]=\"totalQuantityShop\"\n            [unitPrice]=\"item.unit_value_product\"\n            [sendTime]=\"item.send_time\" \n            (isChecked)=\"handlerChecked($event)\">\n          </app-select-store>\n\n        </div>\n\n        <div class=\"col-xs-12 col-md-12 col-lg-6\">\n\n          <h4 class=\"text text--small is-light\">Quantidade atual</h4>\n          <p class=\"text text--large is-semibold\">{{shopDatas.actualQuant | number: '2.'}}un</p>\n\n          <div class=\"u-vspace-large\"></div>\n\n          <app-add-sub\n            [size]=\"'sm'\"\n            [start]=\"totalQuantityShop\"\n            (actualValue)=\"actualShopQuantity($event)\">\n          </app-add-sub>\n\n          <div class=\"u-vspace-default\"></div>\n\n          <h4 class=\"text text--small is-light\">Valor total da compra</h4>\n          <p class=\"text text--large is-semibold\">R$ 150,00</p>\n\n          <div class=\"u-vspace-large\"></div>\n\n           <!-- ## COMPONENT 'SAGA-SELECT' ## -->\n          <div class=\"form-component form-component--inline\">\n            <label class=\"form-component__label\">Pagamento:</label>\n            <div class=\"form-component__control\">\n              <select name=\"field-select\" value=\"\" class=\"field field--select field--small\" style=\"background-image: url(js/assets/icons/angle-down.svg)\">\n                <option value=\"Option One\">À vista</option>\n                <option value=\"Option Two\">À prazo</option>\n                <option value=\"Option Three\">Boleto</option>\n              </select>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n    <footer class=\"modal__footer modal__footer--align-right\">\n      <app-saga-button [label]=\"'Voltar'\" [bare]=\"true\" [size]=\"'lg'\" (click)=\"closeModal()\"></app-saga-button>\n      <app-saga-button [label]=\"'Finalizar compra'\" [size]=\"'lg'\" (click)=\"finishShopModal()\"></app-saga-button>\n    </footer>\n\n  </div>\n\n  <div class=\"modal__background\"></div>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        // Evento emitido sempre que o modal é fechado
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        // Array com id dos objetos selecionados no Modal demitir
        this.dissmissArray = [];
        // Valor total da recisão
        this.recisaoValue = 0;
        this.totalQuantityShop = 60;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.qtdSelection = this.dissmissArray.length;
        if (this.type === 'insertion') {
            this.initInsertionModal();
        }
    };
    /**
     * Fecha o modal e emite um evento indicando que tipo de modal foi fechado
     */
    ModalComponent.prototype.closeModal = function () {
        this.visible = false;
        this.modalClosed.emit({
            state: 'close',
            type: this.type
        });
    };
    /**
     * Método principal do Modal Contratar
     */
    ModalComponent.prototype.contratar = function () {
        // Implemente o método contratar
        console.log('Método de contratar - ', this.professionalDatas.work);
    };
    /**
     * Método principal do Modal Demitir
     */
    ModalComponent.prototype.demitir = function () {
        // Mostra no console os Id`s dos objetos selecionados
        console.log(JSON.stringify(this.dissmissArray));
        // Implemente o método demitir
    };
    /**
     * Identifica o estado do usuário:
     *   SE SELECIONADO: Adiciona seu id em um aray
     *   SE 'DESCELECIONADO': Varre o array de selecionados, encontra sua posição e o exclui.
     * Ao final recalcula o total de selecionados e o total de recisão
     * @param  $event Objeto com estado de seleção = state && id do usuário = prof_id
     */
    ModalComponent.prototype.isSelected = function ($event) {
        var index = 0;
        if ($event.state) {
            this.dissmissArray.push($event.prof_id);
        }
        else {
            index = this.dissmissArray.indexOf($event.prof_id);
            this.dissmissArray.splice(index, 1);
        }
        this.qtdSelection = this.dissmissArray.length;
        this.calculateRecisao();
    };
    /**
     * Varre o array de selecionados, pega o id(ou index) do usuário
     * e soma todas os valores de recisões
     */
    ModalComponent.prototype.calculateRecisao = function () {
        var sum = 0;
        for (var _i = 0, _a = this.dissmissArray; _i < _a.length; _i++) {
            var index = _a[_i];
            sum += this.professionalList[index].recisao;
        }
        this.recisaoValue = sum;
    };
    // MODAL INSERTION
    /**
     * Define o valor inicial do contador de inserções
     * Calcula o valor total de inserções
     */
    ModalComponent.prototype.initInsertionModal = function () {
        this.initialCount = 4;
        this.insertionTotal = this.insertionDatas.insertionValue * this.initialCount;
    };
    /**
     * Calcula o valor total da inserção
     * @param $event Objeto retornado do evento que soma/subtrai um
     */
    ModalComponent.prototype.countInsertion = function ($event) {
        this.insertionTotal = this.insertionDatas.insertionValue * $event.value;
    };
    /**
     * Método chamado ao clicar no botão voltar
     */
    ModalComponent.prototype.backInsertionButton = function () {
        console.log('Back botton de -', this.insertionDatas.product_name);
    };
    /**
     * Método chamado ao clicar no botão aplicar
     */
    ModalComponent.prototype.applyInsertionButton = function () {
        console.log('Apply botton de -', this.insertionDatas.product_name);
    };
    // ############ MODAL SHOP ############ //
    /**
     * Seta a variável global com o valor recebido do evento
     * @param  $event Objeto emitido por um evento quando é somano ou subtraído um valor no componenet AddSub
     */
    ModalComponent.prototype.actualShopQuantity = function ($event) {
        this.totalQuantityShop = $event.value;
    };
    /**
     * Método executado ao clicar no botão Finalizar compra
     */
    ModalComponent.prototype.finishShopModal = function () {
        console.log('Finalizar compra - ' + this.shopDatas.product_name);
    };
    /**
     * Emite um valor no console quando identifica qual é o checkbbox
     * selecionado
     * @param  $event Id do checkbox selecionado
     */
    ModalComponent.prototype.handlerChecked = function ($event) {
        console.log('Id do checkbox selecionado é: ' + $event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('visible'),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('professionalDatas'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "professionalDatas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('professionalList'),
        __metadata("design:type", Array)
    ], ModalComponent.prototype, "professionalList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('insertionDatas'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "insertionDatas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('finishedGamesDatas'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "finishedGamesDatas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shopDatas'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "shopDatas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "modalClosed", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("./resources/assets/src/app/shared/modal/modal.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/modal/modal.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <ul class=\"menu\">\n    <app-menu-item *ngFor=\"let item of menuItens\" \n      [icon]=\"item.icon\" \n      [label]=\"item.label\" \n      [route]=\"item.route\">\n    </app-menu-item>\n  </ul>\n</nav>"

/***/ }),

/***/ "./resources/assets/src/app/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.menuItens = [
            {
                icon: 'js/assets/icons/icon-dashboard.svg',
                label: 'Dashboard',
                route: '/dashboard'
            },
            {
                icon: 'js/assets/icons/icon-marketing.svg',
                label: 'Marketing',
                route: '/marketing'
            },
            {
                icon: 'js/assets/icons/icon-compras.svg',
                label: 'Compras',
                route: '/compras'
            },
            {
                icon: 'js/assets/icons/icon-financeiro.svg',
                label: 'Financeiro',
                route: '/financeiro'
            },
            {
                icon: 'js/assets/icons/icon-recursos-humanos.svg',
                label: 'Recursos Humanos',
                route: '/recursos-humanos'
            },
            {
                icon: 'js/assets/icons/icon-servicos.svg',
                label: 'Serviços',
                route: '/servicos'
            }
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("./resources/assets/src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/progress-bar/progress-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" [class.progress--danger]=\" type == 'danger' \" [class.progress--success]=\"type == 'success' \" [class.progress--attention]=\"type == 'attention' \">\n  <span class=\"progress__label\">{{label}}</span>\n  <div #bar\n    class=\"progress__bar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"47\"\n    role=\"progressbar\"\n    title=\"Progresso: {{progress}}%\"\n  >\n    <span class=\"progress__bar-fill\" #barFill>\n      <span class=\"progress__bar-info\">{{progress}}%</span>\n    </span>\n  </div>\n  <div class=\"progress__bottom-label\">\n    <span class=\"current-info\" [class.current-info--danger]=\" type == 'danger' \" [class.current-info--attention]=\" type == 'attention' \">{{actual}}h</span>\n    <span class=\"target-info\">{{finish}}h/mês</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/assets/src/app/shared/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.setFillProgress();
    };
    /**
     * Define a porcentagem de preenchimento da barra de progresso
     */
    ProgressBarComponent.prototype.setFillProgress = function () {
        this.bar.nativeElement.attributes[3].value = +this.progress;
        this.barFill.nativeElement.style.width = this.progress + '%';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('actual'),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "actual", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('finish'),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "finish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barFill'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProgressBarComponent.prototype, "barFill", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProgressBarComponent.prototype, "bar", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__("./resources/assets/src/app/shared/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/progress-bar/progress-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/saga-button/saga-button.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\n  margin-left: 1em;\n}\n\n.button{\n    /* height: 30px; */\n    margin: .08em;\n}\n\n.button--xxlarge{\n    height: auto;\n    margin: auto;\n}"

/***/ }),

/***/ "./resources/assets/src/app/shared/saga-button/saga-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content button-group\">\n\n  <button class=\"button\" [class.button--bare]=\"bare\" [class.button--inverse]=\"inverse\" [class.button--xxlarge]=\"size == 'lg'\" [class.button--small]=\"size == 'sm'\" #button>\n    <span class=\"button__child\">{{labelToButton}}</span>\n  </button>\n\n  <a routerLink=\"{{goTo}}\" class=\"button\" [class.button--bare]=\"bare\" [class.button--inverse]=\"inverse\" [class.button--xxlarge]=\"size == 'lg'\" [class.button--small]=\"size == 'sm'\" #link>\n    <span class=\"button__child\">{{labelToButton}}</span>\n  </a>\n\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/saga-button/saga-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SagaButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SagaButtonComponent = (function () {
    function SagaButtonComponent() {
        this.goTo = '';
        this.bare = false;
        this.label = '';
        this.inverse = false;
        this.labelToButton = '';
    }
    SagaButtonComponent.prototype.ngOnInit = function () {
        this.setText();
        this.setTypeButton();
    };
    /**
     * Define o texto do botão
     */
    SagaButtonComponent.prototype.setText = function () {
        if (this.label !== '') {
            this.labelToButton = this.label;
        }
        else {
            console.log('O component SagaButton deve receber um [label]="string"');
        }
    };
    /**
     * Define se o botão será um encaminhador ou um botão de ação
     */
    SagaButtonComponent.prototype.setTypeButton = function () {
        if (this.goTo !== '') {
            this.trueButton.nativeElement.style.display = 'none';
            this.linkButton.nativeElement.style.display = 'block';
        }
        else {
            this.trueButton.nativeElement.style.display = 'block';
            this.linkButton.nativeElement.style.display = 'none';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('goTo'),
        __metadata("design:type", Object)
    ], SagaButtonComponent.prototype, "goTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bare'),
        __metadata("design:type", Object)
    ], SagaButtonComponent.prototype, "bare", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'),
        __metadata("design:type", Object)
    ], SagaButtonComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('inverse'),
        __metadata("design:type", Object)
    ], SagaButtonComponent.prototype, "inverse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('size'),
        __metadata("design:type", String)
    ], SagaButtonComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('link'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SagaButtonComponent.prototype, "linkButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('button'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SagaButtonComponent.prototype, "trueButton", void 0);
    SagaButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-saga-button',
            template: __webpack_require__("./resources/assets/src/app/shared/saga-button/saga-button.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/saga-button/saga-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SagaButtonComponent);
    return SagaButtonComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/saga-item-list/saga-item-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/saga-item-list/saga-item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"list__content\">\n\n  <div class=\"wrapper wrapper--spread\">\n\n    <div class=\"media media--v-align-center\">\n\n      <div class=\"media__figure\">\n        <div class=\"picture picture--large\">\n          <img [src]=\"icon\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"media__body\">\n        <div class=\"wrapper wrapper--inline\">\n          <p class=\"text text--small is-light\">\n            Rentabilidade:\n          </p>\n          \n          <!-- Div para tipo 'progress' -->\n          <div *ngIf=\"type === 'progress'\"\n            class=\"complex-text complex-text--small\" \n            [class.complex-text--danger]=\"status === 'danger'\" \n            [class.complex-text--success]=\"status === 'success'\"\n            [class.complex-text--attention]=\"status === 'attention'\"  >\n            <div class=\"complex-text__wrapper\">\n              <span class=\"complex-text__value\">{{profitability}}%</span>                      \n            </div>\n            <span class=\"complex-text__icon\" >\n              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"js/assets/sprite.svg#icon-down\"></use>\n              </svg>\n            </span>\n          </div>\n          \n          <!-- Div para tipo 'notStarted' -->\n          <div class=\"complex-text complex-text--small\" *ngIf=\"type === 'notStarted'\" >\n            <div class=\"complex-text__wrapper\">\n              <span class=\"complex-text__value\">{{profitability}}%</span>                      \n            </div>\n          </div>\n\n          <!-- Div para tipo 'finished' -->\n          <div *ngIf=\"type === 'finished'\"\n            class=\"complex-text complex-text--small\" \n            [class.complex-text--danger]=\"status === 'danger'\" \n            [class.complex-text--success]=\"status === 'success'\"\n            [class.complex-text--attention]=\"status === 'attention'\"  >\n            <div class=\"complex-text__wrapper\">\n              <span class=\"complex-text__value\">{{profitability}}%</span>                      \n            </div>\n          </div>\n\n        </div>\n        <h3 class=\"heading--default-secondary is-stronger\">{{name}}</h3>\n      </div>\n      \n    </div>\n    \n    <app-saga-button *ngIf=\"type !== 'finished'\" [label]=\"nameButton\" [size]=\"'sm'\" (click)=\"playMethod()\"></app-saga-button>\n\n  </div>\n\n</span>"

/***/ }),

/***/ "./resources/assets/src/app/shared/saga-item-list/saga-item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SagaItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SagaItemListComponent = (function () {
    function SagaItemListComponent() {
    }
    SagaItemListComponent.prototype.ngOnInit = function () {
        this.setNameButton();
    };
    /**
     * Define o texto dentro do botão
     */
    SagaItemListComponent.prototype.setNameButton = function () {
        switch (this.type) {
            case 'progress':
                this.nameButton = 'Jogar';
                break;
            case 'notStarted':
                this.nameButton = 'Iniciar';
                break;
            case 'fished':
                this.nameButton = '';
                break;
        }
    };
    /**
     * Método chamado quando o botão jogar é clicado
     */
    SagaItemListComponent.prototype.playMethod = function () {
        console.log('Botão jogar - ', this.name, '/', this.type);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], SagaItemListComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], SagaItemListComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('profitability'),
        __metadata("design:type", Number)
    ], SagaItemListComponent.prototype, "profitability", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", String)
    ], SagaItemListComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", String)
    ], SagaItemListComponent.prototype, "status", void 0);
    SagaItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-saga-item-list',
            template: __webpack_require__("./resources/assets/src/app/shared/saga-item-list/saga-item-list.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/saga-item-list/saga-item-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SagaItemListComponent);
    return SagaItemListComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/saga-list/saga-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/saga-list/saga-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list list--divided list--neutral\" *ngIf=\"type === 'progress'\">\n  <li class=\"list__item\" *ngFor=\"let item of arrayInProgress\">\n    <app-saga-item-list [type]=\"item.type\"\n                    [icon]=\"item.icon\"\n                    [name]=\"item.name\"\n                    [profitability]=\"item.profitability\"\n                    [status]=\"item.status\">\n    </app-saga-item-list>\n  </li>\n</ul>\n\n<ul class=\"list list--divided list--neutral\" *ngIf=\"type === 'notStarted'\">\n  <li class=\"list__item\" *ngFor=\"let item of arrayNotStarted\">\n    <app-saga-item-list [type]=\"item.type\"\n                    [icon]=\"item.icon\"\n                    [name]=\"item.name\"\n                    [profitability]=\"item.profitability\">\n    </app-saga-item-list>\n  </li>\n</ul>"

/***/ }),

/***/ "./resources/assets/src/app/shared/saga-list/saga-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SagaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SagaListComponent = (function () {
    function SagaListComponent() {
        this.arrayInProgress = [];
        this.arrayNotStarted = [];
    }
    SagaListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], SagaListComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('arrayInProgress'),
        __metadata("design:type", Array)
    ], SagaListComponent.prototype, "arrayInProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('arrayNotStarted'),
        __metadata("design:type", Array)
    ], SagaListComponent.prototype, "arrayNotStarted", void 0);
    SagaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-saga-list',
            template: __webpack_require__("./resources/assets/src/app/shared/saga-list/saga-list.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/saga-list/saga-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SagaListComponent);
    return SagaListComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/select-store/select-store.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/select-store/select-store.component.html":
/***/ (function(module, exports) {

module.exports = "<label class=\"checkbox-card\" for=\"radio-card-{{id}}\" (click)=\"listenerChecked()\">\n  <input type=\"radio\" name=\"card-radio\" id=\"radio-card-{{id}}\" #inputCheck>\n  <div class=\"card card--full-height card--small-padding\">\n    <div class=\"card__content\">\n      <div class=\"media media--vertical-align-center\">\n        <div class=\"media__figure\">\n          <div class=\"picture picture--huge\" data-placeholder=\"dm\">\n            <img [src]=\"logo\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"media__body\">\n          <p class=\"text text--small is-light f-uppercase\">{{name}}</p>\n          <div class=\"u-vspace-small\"></div>\n          <h4 class=\"text text--small is-light\">Valor total</h4>\n          <p class=\"text is-semibold has-status\">{{total | currency: 'BRL'}}</p>\n          <div class=\"u-vspace-xsmall\"></div>\n          <h4 class=\"text text--small is-light\">Entrega</h4>\n          <p class=\"text is-semibold\">{{sendTime}} dias</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</label>"

/***/ }),

/***/ "./resources/assets/src/app/shared/select-store/select-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectStoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectStoreComponent = (function () {
    function SelectStoreComponent() {
        this.isChecked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SelectStoreComponent.prototype.ngOnInit = function () {
        this.calculateTotal();
    };
    /**
     * Calcula o valor total em realação a quantidade e
     * ao preço unitário do produto
     */
    SelectStoreComponent.prototype.calculateTotal = function () {
        this.total = this.quantity * this.unitPrice;
    };
    /**
     * Quando o status do input for checked é emitido
     * um evento para aplicação informando o 'id' do checkBox selecionado
     */
    SelectStoreComponent.prototype.listenerChecked = function () {
        if (this.inputCheck.nativeElement.checked) {
            this.isChecked.emit(this.id);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'),
        __metadata("design:type", Number)
    ], SelectStoreComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('logo'),
        __metadata("design:type", String)
    ], SelectStoreComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", String)
    ], SelectStoreComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('quantity'),
        __metadata("design:type", Number)
    ], SelectStoreComponent.prototype, "quantity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('unitPrice'),
        __metadata("design:type", Number)
    ], SelectStoreComponent.prototype, "unitPrice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sendTime'),
        __metadata("design:type", String)
    ], SelectStoreComponent.prototype, "sendTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputCheck'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SelectStoreComponent.prototype, "inputCheck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectStoreComponent.prototype, "isChecked", void 0);
    SelectStoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-store',
            template: __webpack_require__("./resources/assets/src/app/shared/select-store/select-store.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/select-store/select-store.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectStoreComponent);
    return SelectStoreComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./resources/assets/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__saga_button_saga_button_component__ = __webpack_require__("./resources/assets/src/app/shared/saga-button/saga-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__textfield_textfield_component__ = __webpack_require__("./resources/assets/src/app/shared/textfield/textfield.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("./resources/assets/src/app/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_item_menu_item_component__ = __webpack_require__("./resources/assets/src/app/shared/menu-item/menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_bar_progress_bar_component__ = __webpack_require__("./resources/assets/src/app/shared/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toggle_button_toggle_button_component__ = __webpack_require__("./resources/assets/src/app/shared/toggle-button/toggle-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__counter_box_counter_box_component__ = __webpack_require__("./resources/assets/src/app/shared/counter-box/counter-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon_button_icon_button_component__ = __webpack_require__("./resources/assets/src/app/shared/icon-button/icon-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_modal_component__ = __webpack_require__("./resources/assets/src/app/shared/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_sub_add_sub_component__ = __webpack_require__("./resources/assets/src/app/shared/add-sub/add-sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dismiss_card_dismiss_card_component__ = __webpack_require__("./resources/assets/src/app/shared/dismiss-card/dismiss-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_data_component__ = __webpack_require__("./resources/assets/src/app/shared/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__simple_perfil_simple_perfil_component__ = __webpack_require__("./resources/assets/src/app/shared/simple-perfil/simple-perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__file_uploader_file_uploader_component__ = __webpack_require__("./resources/assets/src/app/shared/file-uploader/file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__insertion_card_insertion_card_component__ = __webpack_require__("./resources/assets/src/app/shared/insertion-card/insertion-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stock_card_stock_card_component__ = __webpack_require__("./resources/assets/src/app/shared/stock-card/stock-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__saga_list_saga_list_component__ = __webpack_require__("./resources/assets/src/app/shared/saga-list/saga-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__saga_item_list_saga_item_list_component__ = __webpack_require__("./resources/assets/src/app/shared/saga-item-list/saga-item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__yield_yield_component__ = __webpack_require__("./resources/assets/src/app/shared/yield/yield.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__static_card_static_card_component__ = __webpack_require__("./resources/assets/src/app/shared/static-card/static-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__select_store_select_store_component__ = __webpack_require__("./resources/assets/src/app/shared/select-store/select-store.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Modules

// Components





















var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__textfield_textfield_component__["a" /* TextfieldComponent */],
                __WEBPACK_IMPORTED_MODULE_5__saga_button_saga_button_component__["a" /* SagaButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__menu_item_menu_item_component__["a" /* MenuItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__toggle_button_toggle_button_component__["a" /* ToggleButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__counter_box_counter_box_component__["a" /* CounterBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_12__icon_button_icon_button_component__["a" /* IconButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__add_sub_add_sub_component__["a" /* AddSubComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dismiss_card_dismiss_card_component__["a" /* DismissCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__data_data_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_17__simple_perfil_simple_perfil_component__["a" /* SimplePerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_18__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__insertion_card_insertion_card_component__["a" /* InsertionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__stock_card_stock_card_component__["a" /* StockCardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__saga_list_saga_list_component__["a" /* SagaListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__saga_item_list_saga_item_list_component__["a" /* SagaItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__yield_yield_component__["a" /* YieldComponent */],
                __WEBPACK_IMPORTED_MODULE_24__static_card_static_card_component__["a" /* StaticCardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__select_store_select_store_component__["a" /* SelectStoreComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__textfield_textfield_component__["a" /* TextfieldComponent */],
                __WEBPACK_IMPORTED_MODULE_5__saga_button_saga_button_component__["a" /* SagaButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__menu_item_menu_item_component__["a" /* MenuItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__toggle_button_toggle_button_component__["a" /* ToggleButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__counter_box_counter_box_component__["a" /* CounterBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_12__icon_button_icon_button_component__["a" /* IconButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__add_sub_add_sub_component__["a" /* AddSubComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dismiss_card_dismiss_card_component__["a" /* DismissCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__data_data_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_17__simple_perfil_simple_perfil_component__["a" /* SimplePerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_18__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__insertion_card_insertion_card_component__["a" /* InsertionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__stock_card_stock_card_component__["a" /* StockCardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__saga_list_saga_list_component__["a" /* SagaListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__saga_item_list_saga_item_list_component__["a" /* SagaItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__yield_yield_component__["a" /* YieldComponent */],
                __WEBPACK_IMPORTED_MODULE_24__static_card_static_card_component__["a" /* StaticCardComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"],
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/simple-perfil/simple-perfil.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/simple-perfil/simple-perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media media--v-align-center\" *ngIf=\"isDefinable\">\n  <div class=\"media__figure\">\n    <app-file-uploader \n            [activeColor]=\"'orangered'\" \n            [baseColor]=\"'lightgray'\" \n            [size]=\"'lg'\"\n            (finishUpload)=\"seeUpload($event)\">\n    </app-file-uploader>\n  </div>\n  <div class=\"media__body\">\n    <p class=\"text text--large is-semibold is-inverse\">{{name}}</p>\n    \n    <div class=\"form-component\" [formGroup]=\"refForm\">\n        <label class=\"form-component__label is-assistive\">Selecione o cargo</label>\n        <div class=\"form-component__control\">\n            <angular2-multiselect \n              name=\"field-select\"\n              [data]=\"works\"\n              [settings]=\"settings\"  \n              formControlName=\"cargos\">\n            </angular2-multiselect>\n          <!--\n          <select\n            name=\"field-select\"\n            class=\"field field--select\"\n            style=\"background-image: url(js/assets/icons/angle-down.svg)\"\n            formControlName=\"cargo\">\n            <option [value]=\"null\" selected>-- selecione --</option>\n            <option *ngFor=\"let work of works\" [value]=\"work.key\">{{work.descricao}}</option>\n          </select>\n          -->\n        </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"media media--v-align-center\" *ngIf=\"!isDefinable\" >\n  <div class=\"media__figure\">\n    <div class=\"picture picture--xlarge picture--rounded\" [attr.data-placeholder]=\"initials\">\n      <img [src]=\"avatar\" alt=\"\" *ngIf=\"avatar\" >\n    </div>\n  </div>\n  <div class=\"media__body\">\n    <p class=\"text text--large is-semibold f-uppercase is-inverse\">{{name}}</p>\n    <p class=\"text text-w-light is-inverse\">{{job}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/simple-perfil/simple-perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimplePerfilComponent = (function () {
    function SimplePerfilComponent() {
        this.settings = {};
    }
    SimplePerfilComponent.prototype.ngOnInit = function () {
        this.ifDontHaveAvatar();
        this.settings = {
            text: "Selecione os cargos",
            selectAllText: 'Marcar todos',
            unSelectAllText: 'Desmarcar todos' //,
            //classes: "myclass field field--select"
        };
    };
    /**
     * Caso não houver avatar a inicial do nome do
     * profissional é colocada no lugar do mesmo.
     */
    SimplePerfilComponent.prototype.ifDontHaveAvatar = function () {
        var arrayName = this.name.split(' ').map(String);
        var sg = arrayName[0].substring(0, 1) + arrayName[1].substring(0, 1);
        this.initials = sg;
    };
    /**
     * Visualiza o base64 gerado após o upload da imagem
     * @param  $event Objeto recebido após upload da imagem
     */
    SimplePerfilComponent.prototype.seeUpload = function ($event) {
        console.log($event.base64);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isDefinable'),
        __metadata("design:type", Boolean)
    ], SimplePerfilComponent.prototype, "isDefinable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", String)
    ], SimplePerfilComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('avatar'),
        __metadata("design:type", String)
    ], SimplePerfilComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('works'),
        __metadata("design:type", Array)
    ], SimplePerfilComponent.prototype, "works", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('job'),
        __metadata("design:type", String)
    ], SimplePerfilComponent.prototype, "job", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('refForm'),
        __metadata("design:type", Object)
    ], SimplePerfilComponent.prototype, "refForm", void 0);
    SimplePerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-perfil',
            template: __webpack_require__("./resources/assets/src/app/shared/simple-perfil/simple-perfil.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/simple-perfil/simple-perfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimplePerfilComponent);
    return SimplePerfilComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/static-card/static-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/static-card/static-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--compact\" *ngIf=\"inBox === true\" >\n  <div class=\"card__content\">\n\n    <div class=\"media media--v-align-center\" \n        [class.media--small]=\"size === 'md'\">\n\n      <div class=\"media__figure\">\n\n        <div class=\"picture\" \n             [class.picture--xlarge]=\"size === 'lg'\" \n             [class.picture--medium]=\"size === 'md'\">\n          <img [src]=\"icon\" alt=\"\">\n        </div>\n        \n      </div>\n      <div class=\"media__body\">\n\n        <p class=\"text text--small is-light\">{{label}}</p>\n        \n        <div class=\"wrapper wrapper--align-bottom\">\n          \n          <p  *ngIf=\"type !== 'quantity' && type !== 'percent'\"\n              class=\"text text--xlarge is-semibold\">\n              {{value | currency:'BRL'}}\n          </p>\n          \n          <p  *ngIf=\"type === 'quantity'\"\n              class=\"text text--xlarge is-semibold\">\n              {{value | number}}\n          </p>\n          \n          <p  *ngIf=\"type === 'percent'\"\n              [class.text]=\"size === 'lg'\"\n              [class.text--xlarge]=\"size === 'lg'\"\n              [class.text]=\"size === 'md'\"\n              [class.is-bold]=\"size === 'md'\"\n              [class.is-success]=\"status === 'success'\"\n              [class.is-attention]=\"status === 'attention'\"\n              [class.is-danger]=\"status === 'danger'\">\n              {{value}}%\n          </p>\n\n          <p *ngIf=\"frequency\" class=\"text text--xsmall f-uppercase\">/{{frequency}}</p>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"media media--v-align-center\" [class.media--small]=\"size === 'md'\"  *ngIf=\"inBox === false\" >\n  <div class=\"media__figure\">\n    \n    <div class=\"picture\" \n      [class.picture--xlarge]=\"size === 'lg'\" \n      [class.picture--medium]=\"size === 'md'\">\n    \n      <img [src]=\"icon\" alt=\"\">\n    \n    </div>\n\n  </div>\n  <div class=\"media__body\">\n\n    <p class=\"text text--small is-light\">{{label}}</p>\n\n    <div class=\"wrapper wrapper--align-bottom\">\n      <p class=\"text is-semibold\" *ngIf=\"type !== 'quantity' && type !== 'percent'\"\n          [class.text--xlarge]=\"size === 'lg'\">\n          {{value | currency:'BRL'}}\n      </p>\n      <p class=\"text is-semibold\" *ngIf=\"type === 'quantity'\"\n          [class.text--xlarge]=\"size === 'lg'\">\n          {{value | number: '.'}}\n      </p>\n      <p class=\"text is-semibold\" *ngIf=\"type === 'percent'\"\n          [class.text--xlarge]=\"size === 'lg'\"           \n          [class.is-success]=\"status === 'success'\"\n          [class.is-attention]=\"status === 'attention'\"\n          [class.is-danger]=\"status === 'danger'\">\n          {{value}}%\n      </p>\n      <p *ngIf=\"frequency\" class=\"text-xxsmall-brand\">/{{frequency}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/static-card/static-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaticCardComponent = (function () {
    function StaticCardComponent(elRef) {
        this.elRef = elRef;
        this.inBox = true;
        // Sizes: 'lg' e 'md'
        this.size = 'lg';
        // Status: 'danger', 'attention' e 'success'
        this.status = 'success';
    }
    StaticCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], StaticCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'),
        __metadata("design:type", String)
    ], StaticCardComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", String)
    ], StaticCardComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('frequency'),
        __metadata("design:type", Number)
    ], StaticCardComponent.prototype, "frequency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('inBox'),
        __metadata("design:type", Object)
    ], StaticCardComponent.prototype, "inBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], StaticCardComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('size'),
        __metadata("design:type", Object)
    ], StaticCardComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", Object)
    ], StaticCardComponent.prototype, "status", void 0);
    StaticCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-static-card',
            template: __webpack_require__("./resources/assets/src/app/shared/static-card/static-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/static-card/static-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], StaticCardComponent);
    return StaticCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/stock-card/stock-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/stock-card/stock-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a href=\"#\" class=\"card-link\"> -->\n  <app-modal\n    [visible]=\"modalControl\"\n    [type]=\"'shop'\"\n    [shopDatas]=\"modalDatas\"\n    (modalClosed)=\"closedModal($event)\">\n  </app-modal>\n  <div class=\"card card--small-padding\" \n    [class.card--danger]=\"status === 'danger'\"\n    [class.card--success]=\"status === 'success'\"\n    [class.card--neutral]=\"status === 'neutral'\">\n    <div class=\"card__content\">\n\n      <div class=\"row row--gutter-md row--v-align-center\">\n          \n        <div class=\"col-xs-7\">\n          <div class=\"media media--v-align-center\">\n            <div class=\"media__figure\">\n              <div class=\"picture\">\n                <img src=\"{{icon}}\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"media__body\">\n              <p class=\"text is-semibold has-status\">{{title}}</p>                      \n            </div>\n          </div> \n        </div>\n\n        <div class=\"col-xs-5 col--border-left\">\n          <h4 class=\"text text--small text--secondary is-light\">Qtd. atual</h4>\n          <p class=\"text is-semibold has-status\">{{units}}un</p>\n        </div>\n\n      </div>\n\n    </div>\n    <footer class=\"card__footer\">\n      <p class=\"text text--small is-inverse\" *ngIf=\"status !== 'danger'\">Comprar mais itens?</p>\n      <div class=\"media media--v-align-center\" *ngIf=\"status === 'danger'\">\n        <div class=\"media__figure\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon--inverse icon--medium\">\n            <use xlink:href=\"js/assets/sprite.svg#icon-exclamation-circle\"></use>\n          </svg>\n        </div>\n        <div class=\"media__body\">\n          <p class=\"text text--small is-inverse\">Estoque baixo!</p>\n        </div>\n      </div> \n      <app-saga-button [label]=\"'Comprar'\" (click)=\"shop()\"></app-saga-button>\n    </footer>\n  </div>\n<!-- </a>  -->"

/***/ }),

/***/ "./resources/assets/src/app/shared/stock-card/stock-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockCardComponent = (function () {
    function StockCardComponent() {
        this.modalControl = false;
    }
    StockCardComponent.prototype.ngOnInit = function () {
    };
    /**
     * Manipula a variável de controle do modal para 'false'
     * @param  $event Objeto recebido pelo evento realizado quando o modal é fechado
     */
    StockCardComponent.prototype.closedModal = function ($event) {
        if ($event.state === 'close') {
            this.modalControl = false;
        }
    };
    /**
     * Método do botão comprar
     */
    StockCardComponent.prototype.shop = function () {
        this.modalControl = true;
        console.log('Método comprar -', this.title);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], StockCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('units'),
        __metadata("design:type", Number)
    ], StockCardComponent.prototype, "units", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], StockCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", String)
    ], StockCardComponent.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('modalDatas'),
        __metadata("design:type", Object)
    ], StockCardComponent.prototype, "modalDatas", void 0);
    StockCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stock-card',
            template: __webpack_require__("./resources/assets/src/app/shared/stock-card/stock-card.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/stock-card/stock-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StockCardComponent);
    return StockCardComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/textfield/textfield.component.css":
/***/ (function(module, exports) {

module.exports = "/* .addPadding {\n  padding-top: 1rem;\n} */"

/***/ }),

/***/ "./resources/assets/src/app/shared/textfield/textfield.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-component form-component--icon addPadding\" \n    [class.form-component--right-padding]=\"type == 'password' || type == 'confirmPassword'\" \n    [ngClass]=\"validationInputs(auxConfig.propriedadesInput.name)\" \n    [formGroup]=\"refForm\" >\n\n  <div class=\"form-component__control\">\n\n    <div class=\"form-component__icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n        <use [attr.xlink:href]=\"auxConfig.referenciaDoIcone\"></use>\n      </svg>\n    </div>\n\n    <input [id]=\"auxConfig.propriedadesInput.id\" \n           [type]=\"auxConfig.propriedadesInput.type\" \n           [formControlName]=\"auxConfig.propriedadesInput.name\" \n           [value]=\"auxConfig.propriedadesInput.value\" \n           [placeholder]=\"auxConfig.propriedadesInput.placeholder\" \n           class=\"field\">\n\n\n    <label class=\"icon-toggle\" for=\"checkbox-01\" id=\"toggle\" #passToggle>\n      <input type=\"checkbox\" name=\"check\" id=\"checkbox-01\" (change)=\"indentifyValue()\" #checkBox/>\n\n      <span class=\"icon-toggle__token\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-unchecked\">\n          <use xlink:href=\"js/assets/sprite.svg#icon-eye-slash\"></use>\n        </svg>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-checked\">\n          <use xlink:href=\"js/assets/sprite.svg#icon-eye\"></use>\n        </svg>\n      </span>\n\n    </label>\n    \n  </div>\n  <label class=\"form-component__label form-component__label--featured\" *ngIf=\"juros\" >Taxa de juros: {{juros}}% ao mês</label>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/textfield/textfield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextfieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextfieldComponent = (function () {
    function TextfieldComponent() {
        this.type = '';
        /**
         * Objeto de configuração para o component.
         */
        this.configVariables = [
            {
                referenciaDoIcone: 'js/assets/sprite.svg#icon-envelop',
                propriedadesInput: {
                    id: 'email',
                    type: 'email',
                    name: 'email',
                    value: '',
                    placeholder: 'E-mail'
                }
            },
            {
                referenciaDoIcone: 'js/assets/sprite.svg#icon-key',
                propriedadesInput: {
                    id: 'password',
                    type: 'password',
                    name: 'password',
                    value: '',
                    placeholder: 'Senha'
                }
            },
            {
                referenciaDoIcone: 'js/assets/sprite.svg#icon-user',
                propriedadesInput: {
                    id: 'user',
                    type: 'text',
                    name: 'user',
                    value: '',
                    placeholder: 'Seu nome'
                }
            },
            {
                referenciaDoIcone: '',
                propriedadesInput: {
                    id: '',
                    type: 'text',
                    name: '',
                    value: '',
                    placeholder: ''
                }
            },
            {
                referenciaDoIcone: 'js/assets/sprite.svg#icon-transfer-new',
                propriedadesInput: {
                    id: 'loan',
                    type: 'text',
                    name: 'loan',
                    value: '',
                    placeholder: 'R$ 0.000,00'
                }
            },
            {
                referenciaDoIcone: 'js/assets/sprite.svg#icon-key',
                propriedadesInput: {
                    id: 'confirmPassword',
                    type: 'password',
                    name: 'confirmPassword',
                    value: '',
                    placeholder: 'Confirmar senha'
                }
            }
        ];
        this.auxConfig = {};
    }
    TextfieldComponent.prototype.ngOnInit = function () {
        this.auxConfig = this.setInputType(this.type);
    };
    /**
     * Define qual o tipo do input
     * @param type Tipo do input a ser criado
     */
    TextfieldComponent.prototype.setInputType = function (type) {
        var positionOfConfigArray = 0;
        var node = document.getElementById('toggle');
        switch (type) {
            case 'email':
                this.toggleSenha.nativeElement.style.display = 'none';
                node.parentNode.removeChild(node);
                positionOfConfigArray = 0;
                break;
            case 'password':
                this.toggleSenha.nativeElement.style.display = 'block';
                positionOfConfigArray = 1;
                break;
            case 'user':
                this.toggleSenha.nativeElement.style.display = 'none';
                node.parentNode.removeChild(node);
                positionOfConfigArray = 2;
                break;
            case 'loan':
                this.toggleSenha.nativeElement.style.display = 'none';
                node.parentNode.removeChild(node);
                positionOfConfigArray = 4;
                break;
            case 'confirmPassword':
                this.toggleSenha.nativeElement.style.display = 'block';
                positionOfConfigArray = 5;
                break;
            default:
                this.toggleSenha.nativeElement.style.display = 'none';
                node.parentNode.removeChild(node);
                positionOfConfigArray = 3;
                break;
        }
        return this.configVariables[positionOfConfigArray];
    };
    /**
     * Evento habilita/desabilita visualização da senha
     */
    TextfieldComponent.prototype.indentifyValue = function () {
        if (this.toggleButton.nativeElement.checked) {
            this.auxConfig.propriedadesInput.type = 'text';
        }
        else {
            this.auxConfig.propriedadesInput.type = 'password';
        }
    };
    /**
     * Valida o input verificando se as propriedades de validação
     * foram atendidas e sejá foi focado alguma vez.
     * @param name Nome do input
     */
    TextfieldComponent.prototype.validationInputs = function (name) {
        return {
            'is-valid': this.refForm.controls[name].valid && this.refForm.controls[name].touched,
            'is-invalid': !this.refForm.controls[name].valid && this.refForm.controls[name].touched
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], TextfieldComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('refForm'),
        __metadata("design:type", Object)
    ], TextfieldComponent.prototype, "refForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('juros'),
        __metadata("design:type", Number)
    ], TextfieldComponent.prototype, "juros", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passToggle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TextfieldComponent.prototype, "toggleSenha", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TextfieldComponent.prototype, "toggleButton", void 0);
    TextfieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-field',
            template: __webpack_require__("./resources/assets/src/app/shared/textfield/textfield.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/textfield/textfield.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextfieldComponent);
    return TextfieldComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/toggle-button/toggle-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/toggle-button/toggle-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-component\">\n  <label class=\"form-component__label is-assistive\">Tipo de jornada registrada</label>\n  <div class=\"form-component__control\">\n    <label class=\"toggle-button\" for=\"checkbox-01\">\n      <input type=\"radio\" name=\"check\" id=\"checkbox-01\" checked (change)=\"seeChange()\" #checkLeft/>\n      <span class=\"toggle-button__token\">\n        {{left}}\n      </span>\n    </label>\n    <label class=\"toggle-button\" for=\"checkbox-02\">\n      <input type=\"radio\" name=\"check\" id=\"checkbox-02\" (change)=\"seeChange()\"  #checkRight/>\n      <span class=\"toggle-button__token\">\n        {{right}}\n      </span>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/toggle-button/toggle-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleButtonComponent = (function () {
    function ToggleButtonComponent() {
        this.selectedOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToggleButtonComponent.prototype.ngOnInit = function () {
        this.seeChange();
    };
    /**
     * Emite um evento idicando a mudança de estado do botão
     */
    ToggleButtonComponent.prototype.seeChange = function () {
        var left = this.checkLeft.nativeElement.checked;
        var right = this.checkRight.nativeElement.checked;
        if (left) {
            this.selectedOption.emit({
                selected: this.left
            });
        }
        else {
            if (right) {
                this.selectedOption.emit({
                    selected: this.right
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('left'),
        __metadata("design:type", String)
    ], ToggleButtonComponent.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('right'),
        __metadata("design:type", String)
    ], ToggleButtonComponent.prototype, "right", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkLeft'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ToggleButtonComponent.prototype, "checkLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkRight'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ToggleButtonComponent.prototype, "checkRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToggleButtonComponent.prototype, "selectedOption", void 0);
    ToggleButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toggle-button',
            template: __webpack_require__("./resources/assets/src/app/shared/toggle-button/toggle-button.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/toggle-button/toggle-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
}());



/***/ }),

/***/ "./resources/assets/src/app/shared/yield/yield.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./resources/assets/src/app/shared/yield/yield.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"text text--small is-light\">{{description}}</p>\n<div class=\"complex-text\"\n  [class.complex-text--success]=\"status === 'success'\"\n  [class.complex-text--danger]=\"status === 'danger'\"\n  [class.complex-text--attention]=\"status === 'attention'\"\n  [class.complex-text--small]=\"size === 'md'\">\n  <div class=\"complex-text__wrapper\">\n    <span class=\"complex-text__value\" *ngIf=\"type !== 'quantity'\" >{{value | currency: 'BRL'}}</span>\n    <span class=\"complex-text__value\" *ngIf=\"type === 'quantity'\">{{value | number: '.'}}</span>\n    <span class=\"complex-text__slash-info\" *ngIf=\"unit\" >/{{unit}}</span>\n  </div>\n  <span class=\"complex-text__icon\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n      <use xlink:href=\"js/assets/sprite.svg#icon-down\"></use>\n    </svg>\n  </span>\n</div>"

/***/ }),

/***/ "./resources/assets/src/app/shared/yield/yield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YieldComponent = (function () {
    function YieldComponent() {
    }
    YieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('unit'),
        __metadata("design:type", String)
    ], YieldComponent.prototype, "unit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], YieldComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('description'),
        __metadata("design:type", String)
    ], YieldComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", String)
    ], YieldComponent.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('size'),
        __metadata("design:type", String)
    ], YieldComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Number)
    ], YieldComponent.prototype, "value", void 0);
    YieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-yield',
            template: __webpack_require__("./resources/assets/src/app/shared/yield/yield.component.html"),
            styles: [__webpack_require__("./resources/assets/src/app/shared/yield/yield.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YieldComponent);
    return YieldComponent;
}());



/***/ }),

/***/ "./resources/assets/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./resources/assets/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./resources/assets/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./resources/assets/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map