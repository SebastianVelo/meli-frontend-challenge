class Author {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
}

class Category {
    constructor(response) {
        this.id = response.id;
        this.name = response.name;
    }
}

class Product {
    constructor(response, description) {
        this.id = response.id;
        this.title = response.title;
        this.picture = response.thumbnail;
        this.freeShipping = response.shipping.free_shipping;
        this.soldQuantity = response.sold_quantity;
        this.description = description;
        this.category = response.category_id;
        this.city = response.address ? response.address.state_name : "";
        this.condition = response.condition === "new" ? "Nuevo" : "Usado";
        this.price = {
            currency: response.currency_id === "ARS" ? "$" : response.currency_id,
            amount: response.price
        }
    }
}

module.exports.Author = Author;
module.exports.Category = Category;
module.exports.Product = Product;