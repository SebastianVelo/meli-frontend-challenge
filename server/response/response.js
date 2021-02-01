const Author = require('../entity/entity').Author;
const Product = require('../entity/entity').Product;
const Category = require('../entity/entity').Category;

class Response {
    constructor() {
        this.author = new Author("Sebastian", "Velo");
    }
    
    getFilter(filters, id) {
        return filters.find(filter => filter.id === id);
    }
}

class ResponseSearch extends Response {
    constructor(response) {
        super();
        this.categories = this.getFilter(response.available_filters, "category").values.map(value => new Category(value));
        this.items = response.results.map(result => new Product(result));
    }
}

class ResponseItem extends Response {
    constructor(response, description) {
        super();
        this.item = new Product(response, description);
    }
}

class ResponseCategory extends Response {
    constructor(response) {
        super();
        this.fullPath = this.getFilter(response.filters, "category").values[0].path_from_root;
    }
}


module.exports.ResponseSearch = ResponseSearch;
module.exports.ResponseItem = ResponseItem;
module.exports.ResponseCategory = ResponseCategory;