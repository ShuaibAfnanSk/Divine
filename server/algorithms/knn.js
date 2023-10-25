const knn = require('knn');

function performKNN(allProperties, targetPropertyId) {
    const features = allProperties.map(p => [
        p.price,
        p.bedrooms,
        p.bathrooms,
        p.sqft_living,
        p.sqft_lot,
        p.floors,
        p.waterfront,
        p.view,
        p.condition,
        p.sqft_above,
        p.sqft_basement,
        p.yr_built,
        p.yr_renovated
    ]);

    const model = knn(features, allProperties.map(p => p._id.toString()));

    const targetProperty = allProperties.find(p => p._id === targetPropertyId);

    if (!targetProperty) {
        throw new Error(`Property with ID ${targetPropertyId} not found.`);
    }

    const queryPoint = [
        targetProperty.price,
        targetProperty.bedrooms,
        targetProperty.bathrooms,
        targetProperty.sqft_living,
        targetProperty.sqft_lot,
        targetProperty.floors,
        targetProperty.waterfront,
        targetProperty.view,
        targetProperty.condition,
        targetProperty.sqft_above,
        targetProperty.sqft_basement,
        targetProperty.yr_built,
        targetProperty.yr_renovated
    ];

    const neighbors = model(queryPoint, 3);

    const neighborProperties = neighbors.map(neighborIndex => allProperties[neighborIndex]);

    return {
        targetPropertyId: targetProperty,
        neighbors: neighborProperties,
    };
}

module.exports = { performKNN };
