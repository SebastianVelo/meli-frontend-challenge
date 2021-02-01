const fetch = require("node-fetch");

const ResponseSearch = require("../response/response").ResponseSearch;
const ResponseItem = require("../response/response").ResponseItem;
const ResponseCategory = require("../response/response").ResponseCategory;

const URL = "https://api.mercadolibre.com";
const PATH_CATEGORY = "/sites/MLA/search?category=";
const PATH_SEARCH = "/sites/MLA/search?q=";
const PATH_ITEM = "/items/";
const PATH_ITEM_DESCRIPTION = "/description";

const request = async (path, method) => {
    try {
        let dataFetched = await fetch(URL + path, { 
            method: method,
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json'
            }
        });
        let response = await dataFetched.json();
        return response;
    } catch(e) {
        return e;
    }
}

const getSearch = async (query) => {
    let response = await request(PATH_SEARCH + query, "GET");
    return new ResponseSearch(response);
};

const getCategoryById = async (id) => {
    let category = await request(PATH_CATEGORY+id, "GET");
    return new ResponseCategory(category);
};

const getItemById = async (id) => {
    let item = await request(PATH_ITEM+id, "GET");
    let description = await getItemDescription(id);
    return new ResponseItem(item, description.plain_text);
};

const getItemDescription = async (id) => {
    let item = await request(PATH_ITEM+id+PATH_ITEM_DESCRIPTION, "GET");
    return item;
};

module.exports.getSearch = getSearch;
module.exports.getCategoryById = getCategoryById;
module.exports.getItemById = getItemById;
