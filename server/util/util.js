function getCurrencySymbol(currencyId) {
    switch(currencyId) {
        case "ARS": 
            return "$";
        case "USD":
            return "U$D";
        default:
            return currencyId;
    }
}

function getCondition(conditionId) {
    if(conditionId == "new")
        return "Nuevo";
    else 
        return conditionId;
}

function getDescription(description) {
    if(description)
        return description;
    return "El vendedor no incluyó una descripción para este producto";
}

function getPriceFormat(price) {
    let priceArray = Array.from(price.toString());
    let indexDecimals = priceArray.indexOf('.');
    if(indexDecimals !== -1) {
        priceArray = priceArray.slice(0, indexDecimals);
    }

    let priceFormatted = [];
    priceArray.reverse().forEach((number, i) => {
        priceFormatted.push(number);
        if(((i + 1) % 3 === 0) && ((i + 1) !== priceArray.length))
            priceFormatted.push(".")
    });

    return priceFormatted.reverse().join('');
}

function getDecimals(price) {
    let priceArray = Array.from(price.toString());
    let indexDecimals = priceArray.indexOf('.');
    if(indexDecimals !== -1) {
        return priceArray.slice(indexDecimals+1, priceArray.length).join('');
    }
    return "00";
}

module.exports.getCurrencySymbol = getCurrencySymbol;
module.exports.getPriceFormat = getPriceFormat;
module.exports.getDecimals = getDecimals;
module.exports.getCondition = getCondition;
module.exports.getDescription = getDescription;