const fetch = require("node-fetch");
const API = require("./const/API");

const ResponseSearch = require("../response/response").ResponseSearch;
const ResponseItem = require("../response/response").ResponseItem;
const ResponseCategory = require("../response/response").ResponseCategory;

const request = async (URL, method) => {
    try {
        let dataFetched = await fetch(URL, {
            method: method,
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json'
            }
        });
        let response = await dataFetched.json();
        return response;
    } catch (e) {
        return e;
    }
}

const getSearch = async (query) => {
    let response = await request(API.PATH_SEARCH(query), "GET");
    return new ResponseSearch(response);
};

const getCategoryById = async (id) => {
    let category = await request(API.PATH_CATEGORY(id), "GET");
    return new ResponseCategory(category);
};

const getItemById = async (id) => {
    let item = await request(API.PATH_ITEM(id), "GET");
    let description = await getItemDescription(id);
    return new ResponseItem(item, description.plain_text);
};

const getItemDescription = async (id) => {
    let item = await request(API.PATH_ITEM_DESCRIPTION(id), "GET");
    return item;
};

module.exports.getSearch = getSearch;
module.exports.getCategoryById = getCategoryById;
module.exports.getItemById = getItemById;
