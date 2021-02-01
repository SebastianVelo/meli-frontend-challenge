const URL = "https://api.mercadolibre.com";
const PATH_SEARCH = (path) => URL + "/sites/MLA/search?q=" + path;
const PATH_CATEGORY = (id) => URL + "/categories/" + id;
const PATH_ITEM = (id) => URL + "/items/" + id;
const PATH_ITEM_DESCRIPTION = (id) => PATH_ITEM(id) + "/description";

module.exports.PATH_SEARCH = PATH_SEARCH;
module.exports.PATH_CATEGORY = PATH_CATEGORY;
module.exports.PATH_ITEM = PATH_ITEM;
module.exports.PATH_ITEM_DESCRIPTION = PATH_ITEM_DESCRIPTION;