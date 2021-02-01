const Author = require('../entity/entity').Author;
const Product = require('../entity/entity').Product;
const Category = require('../entity/entity').Category;

class Response {
    constructor() {
        this.author = new Author("Sebastian", "Velo");
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
        this.fullPath = response.path_from_root;
    }
}

class ResponseSearch extends Response {
    constructor(response) {
        super();
        let filters = this.getFilter(response.available_filters, "category");
        if(!filters)
            filters = this.getFilter(response.filters, "category");
        this.categories = filters.values.map(value => new Category(value));
        this.items = response.results.map(result => new Product(result));
    }
    
    getFilter(filters, id) {
        return filters.find(filter => filter.id === id);
    }
}

module.exports.ResponseSearch = ResponseSearch;
module.exports.ResponseItem = ResponseItem;
module.exports.ResponseCategory = ResponseCategory;