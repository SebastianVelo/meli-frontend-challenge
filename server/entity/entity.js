const util = require('../util/util');

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
        this.results = response.results;
    }
}

class Product {
    constructor(response, description) {
        this.id = response.id;
        this.title = response.title;
        this.condition = util.getCondition(response.condition);
        this.description = util.getDescription(description);
        this.picture = response.thumbnail;
        this.freeShipping = response.shipping.free_shipping;
        this.soldQuantity = response.sold_quantity;
        this.category = response.category_id;
        this.city = response.address ? response.address.state_name : "";
        this.price = {
            currency: util.getCurrencySymbol(response.currency_id),
            amount: response.price
        }
    }
}

module.exports.Author = Author;
module.exports.Category = Category;
module.exports.Product = Product;