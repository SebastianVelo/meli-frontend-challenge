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


module.exports.getCurrencySymbol = getCurrencySymbol;
module.exports.getCondition = getCondition;
module.exports.getDescription = getDescription;