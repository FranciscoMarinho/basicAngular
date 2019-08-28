(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/list-product/list-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-cart/my-cart.component */ "./src/app/my-cart/my-cart.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");








var routes = [
    { path: '', redirectTo: '/produtos', pathMatch: 'full' },
    { path: 'produtos', component: _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__["ListProductComponent"] },
    { path: 'novoproduto', component: _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_7__["NewProductComponent"] },
    { path: 'editarprodutos/:id', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"] },
    { path: 'meuCarrinho', component: _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_5__["MyCartComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemMenu {\r\n    margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtTWVudSB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n  <nav>\n    <a class=\"itemMenu\" href=\"produtos\">Produtos</a>\n    <a class=\"itemMenu\" href=\"novoproduto\">Novo produtos</a>\n    <a class=\"itemMenu\" href=\"meuCarrinho\">Meu carrinho</a>\n  </nav>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Minha loja';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/list-product/list-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-cart/my-cart.component */ "./src/app/my-cart/my-cart.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _item_product_item_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-product/item-product.component */ "./src/app/item-product/item-product.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_5__["ListProductComponent"],
                _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"],
                _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_7__["MyCartComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_9__["NewProductComponent"],
                _item_product_item_product_component__WEBPACK_IMPORTED_MODULE_10__["ItemProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-product/edit-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    name: <input #name >\n    price: <input #price>\n    <button (click)=\"onClick(name.value, price.value)\">Editar</button>\n</div>\n\n<p class=\"center\">\n  <app-item-product [product] = 'product'></app-item-product>\n</p>\n\n"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.ts ***!
  \********************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");




var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.id = 0;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;
            _this.product = _this.productService.getProductByID(_this.id);
        });
    };
    EditProductComponent.prototype.onClick = function (name, price) {
        this.product.name = name;
        this.product.price = price;
        this.productService.editProduct(this.product);
    };
    EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/edit-product/edit-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/item-product/item-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/item-product/item-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tcHJvZHVjdC9pdGVtLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/item-product/item-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/item-product/item-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "id: {{product?.id}} \nnome:  {{product?.name}}\nvalor:  {{product?.price}}\n\n"

/***/ }),

/***/ "./src/app/item-product/item-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/item-product/item-product.component.ts ***!
  \********************************************************/
/*! exports provided: ItemProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemProductComponent", function() { return ItemProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");



var ItemProductComponent = /** @class */ (function () {
    function ItemProductComponent() {
        this.product = {};
    }
    ItemProductComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _product_service__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ItemProductComponent.prototype, "product", void 0);
    ItemProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-product',
            template: __webpack_require__(/*! ./item-product.component.html */ "./src/app/item-product/item-product.component.html"),
            styles: [__webpack_require__(/*! ./item-product.component.css */ "./src/app/item-product/item-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemProductComponent);
    return ItemProductComponent;
}());



/***/ }),

/***/ "./src/app/list-product/list-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-product/list-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1wcm9kdWN0L2xpc3QtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1wcm9kdWN0L2xpc3QtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-product/list-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-product/list-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"center\" *ngFor='let product of this.listProduct'>\n  <app-item-product [product] = 'product'></app-item-product>\n  <button (click)=\"addProduct(product)\" >Adicionar ao carrinho</button>\n</div>\n"

/***/ }),

/***/ "./src/app/list-product/list-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-product/list-product.component.ts ***!
  \********************************************************/
/*! exports provided: ListProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductComponent", function() { return ListProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");



var ListProductComponent = /** @class */ (function () {
    function ListProductComponent(productService) {
        this.productService = productService;
        this.listProduct = [];
    }
    ListProductComponent.prototype.ngOnInit = function () {
        this.listProduct = this.productService.getListProduct();
    };
    ListProductComponent.prototype.addProduct = function (product) {
        this.productService.addToMyCar(product);
    };
    ListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-product',
            template: __webpack_require__(/*! ./list-product.component.html */ "./src/app/list-product/list-product.component.html"),
            styles: [__webpack_require__(/*! ./list-product.component.css */ "./src/app/list-product/list-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ListProductComponent);
    return ListProductComponent;
}());



/***/ }),

/***/ "./src/app/my-cart/my-cart.component.css":
/*!***********************************************!*\
  !*** ./src/app/my-cart/my-cart.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FydC9teS1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9teS1jYXJ0L215LWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-cart/my-cart.component.html":
/*!************************************************!*\
  !*** ./src/app/my-cart/my-cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"center\">\nMeu Carrinho.\n</p>\n\n<div class=\"center\" *ngFor='let product of this.listProduct'>\n  Id: {{product?.id}} Nome: {{product?.name}} Valor: {{product?.price}}\n  <button (click)=\"removeFromMyCar(product)\">Remover</button>\n</div>\n\n<div class=\"center\">Total da compra: {{totalPrice}}</div>\n"

/***/ }),

/***/ "./src/app/my-cart/my-cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/my-cart/my-cart.component.ts ***!
  \**********************************************/
/*! exports provided: MyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartComponent", function() { return MyCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");



var MyCartComponent = /** @class */ (function () {
    function MyCartComponent(productService) {
        this.productService = productService;
        this.totalPrice = 0;
        this.listProduct = [];
    }
    MyCartComponent.prototype.ngOnInit = function () {
        this.updateTotal();
    };
    MyCartComponent.prototype.updateTotal = function () {
        this.listProduct = this.productService.getMyCar();
        var soma = 0;
        if (this.listProduct) {
            this.listProduct.forEach(function (product) {
                soma += Number(product.price);
            });
        }
        this.totalPrice = soma;
    };
    MyCartComponent.prototype.addToMyCar = function (product) {
        this.productService.addToMyCar(product);
        this.updateTotal();
    };
    MyCartComponent.prototype.removeFromMyCar = function (product) {
        this.productService.removeFromMyCar(product);
        this.updateTotal();
    };
    MyCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-cart',
            template: __webpack_require__(/*! ./my-cart.component.html */ "./src/app/my-cart/my-cart.component.html"),
            styles: [__webpack_require__(/*! ./my-cart.component.css */ "./src/app/my-cart/my-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], MyCartComponent);
    return MyCartComponent;
}());



/***/ }),

/***/ "./src/app/new-product/new-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-product/new-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n.left {\r\n    margin: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXByb2R1Y3QvbmV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/new-product/new-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n\n  <div class=\"left\">Nome: <input #name ></div>\n  <div class=\"left\">Valor: <input #price></div>\n  <button (click)=\"onClick(name.value, price.value)\">Criar novo</button>\n  \n  <div class=\"left\" *ngFor='let product of this.listProduct'>\n    <app-item-product [product] = 'product'></app-item-product> \n    <button (click)=\"edit(product)\">Editar</button>\n    <button (click)=\"remove(product)\">Remover</button> \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/new-product/new-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-product/new-product.component.ts ***!
  \******************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.listProduct = [];
    }
    NewProductComponent.prototype.ngOnInit = function () {
        this.listProduct = this.productService.getListProduct();
    };
    NewProductComponent.prototype.onClick = function (name, price) {
        var id = 0;
        if (this.listProduct) {
            id = this.listProduct.length + 1;
        }
        this.productService.addProduct(new _product_service__WEBPACK_IMPORTED_MODULE_2__["Product"](id, name, price));
        this.listProduct = this.productService.getListProduct();
    };
    NewProductComponent.prototype.remove = function (product) {
        this.productService.removeProduct(product);
        this.listProduct = this.productService.getListProduct();
    };
    NewProductComponent.prototype.edit = function (product) {
        this.router.navigate(['editarprodutos', product.id]);
    };
    NewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/new-product/new-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"center\">\n  Ops! página não encontrada!\n</h2>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: Product, ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());

var ProductService = /** @class */ (function () {
    function ProductService() {
        this.listProduct = [];
        this.LIST_KEY = 'list_key';
        this.myCar = [];
        this.MY_CAR_KEY = 'my_car_key';
    }
    ProductService.prototype.recoverList = function (key) {
        var auxlistProduct = JSON.parse(localStorage.getItem(key));
        if (auxlistProduct) {
            return auxlistProduct;
        }
    };
    ProductService.prototype.getListProduct = function () {
        var aux = this.recoverList(this.LIST_KEY);
        if (aux) {
            this.listProduct = aux;
        }
        return this.listProduct;
    };
    ProductService.prototype.addProduct = function (product) {
        this.listProduct.push(product);
        localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
    };
    ProductService.prototype.removeProduct = function (product) {
        var DELETION_COUNT = 1;
        if (this.listProduct.length === 0) {
            this.listProduct = this.recoverList(this.LIST_KEY);
        }
        this.listProduct.splice(this.listProduct.indexOf(product), DELETION_COUNT);
        localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
    };
    ProductService.prototype.getProductByID = function (id) {
        this.listProduct = this.recoverList(this.LIST_KEY);
        var auxProduct;
        if (this.listProduct) {
            this.listProduct.forEach(function (product) {
                if (product.id == id) {
                    auxProduct = product;
                }
            });
        }
        return auxProduct;
    };
    ProductService.prototype.editProduct = function (product) {
        this.recoverList(this.LIST_KEY);
        this.listProduct.forEach(function (itemProduct) {
            if (itemProduct.id == product.id) {
                itemProduct.name = product.name;
                itemProduct.price = product.price;
            }
        });
        localStorage.setItem(this.LIST_KEY, JSON.stringify(this.listProduct));
    };
    ProductService.prototype.addToMyCar = function (product) {
        this.myCar.push(product);
        localStorage.setItem(this.MY_CAR_KEY, JSON.stringify(this.myCar));
    };
    ProductService.prototype.removeFromMyCar = function (product) {
        var DELETION_COUNT = 1;
        if (this.myCar.length === 0) {
            this.myCar = this.recoverList(this.MY_CAR_KEY);
        }
        this.myCar.splice(this.myCar.indexOf(product), DELETION_COUNT);
        localStorage.setItem(this.MY_CAR_KEY, JSON.stringify(this.myCar));
    };
    ProductService.prototype.getMyCar = function () {
        var aux = this.recoverList(this.MY_CAR_KEY);
        if (aux) {
            this.myCar = aux;
        }
        return this.myCar;
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/franciscomarinho/Documents/chico/study/aula/basicAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map