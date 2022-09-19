// classe produto eletrônico e apresente os atributos e métodos 
var electronicProduct = /** @class */ (function () {
    function electronicProduct() {
    }
    return electronicProduct;
}());
var electronicproduct = new electronicProduct();
electronicproduct.category = 'Notebook';
electronicproduct.model = 'Lenovo';
electronicproduct.color = 'Prata';
console.log("Category: ".concat(electronicproduct.category));
console.log("Model: ".concat(electronicproduct.model));
console.log("Color: ".concat(electronicproduct.color));
