const { LinearRegression } = require('machinelearn/regression');

function encodeCity(city) {
    const cityMap = {
        'Snoqualmie Pass': 0,
        'Pacific': 1,
        'Beaux Arts Village': 2,
        'Covington': 3,
        'Mercer Island': 4,
        'Black Diamond': 5,
        'Ravensdale': 6,
        'Clyde Hill': 7,
        'Burien': 8,
        'Algona': 9,
        'Kent': 10,
        'Redmond': 11,
        'Bellevue': 12,
        'Sammamish': 13,
        'Maple Valley': 14,
        'Inglewood-Finn Hill': 15,
        'Kenmore': 16,
        'North Bend': 17,
        'Lake Forest Park': 18,
        'Auburn': 19,
        'Des Moines': 20,
        'Bothell': 21,
        'Newcastle': 22,
        'Normandy Park': 23,
        'Renton': 24,
        'Federal Way': 25,
        'Kirkland': 26,
        'Issaquah': 27,
        'Woodinville': 28,
        'Fall City': 29,
        'Carnation': 30,
        'Snoqualmie': 31,
        'Duvall': 32,
        'Skykomish': 33,
        'Tukwila': 34,
        'Vashon': 35,
        'Yarrow Point': 36,
        'SeaTac': 37,
        'Medina': 38,
        'Enumclaw': 39
    }
};

function preprocessData(data) {
    return data.map(entry => ({
        bedrooms: entry.bedrooms,
        bathrooms: entry.bathrooms,
        floors: entry.floors,
        city: encodeCity(entry.city),
        sqft_above: entry.sqft_above,
        sqft_living: entry.sqft_living,
        sqft_basement: entry.sqft_basement,
        sqft_lot: entry.sqft_lot,
        view: entry.view,
        condition: entry.condition,
        waterfront: entry.waterfront,
        yr_built: entry.yr_built,
        yr_renovated: entry.yr_renovated,
        price: entry.price,
    }));
}

function trainLinearRegression(data) {
    const features = [
        'bedrooms',
        'bathrooms',
        'floors',
        'city',
        'sqft_above',
        'sqft_living',
        'sqft_basement',
        'sqft_lot',
        'view',
        'condition',
        'waterfront',
        'yr_built',
        'yr_renovated',
    ];

    const lr = new LinearRegression();

    const trainingData = preprocessData(data);

    const X = trainingData.map(entry => features.map(feature => entry[feature]));
    const y = trainingData.map(entry => entry.price);

    if (Array.isArray(X) && X.every(Array.isArray) && Array.isArray(y)) {
        lr.fit(X, y);
    } else {
        throw new Error('Invalid training data format');
    }

    return lr;
}

function predictPrice(model, inputData) {
    const features = [
        'bedrooms',
        'bathrooms',
        'floors',
        'city',
        'sqft_above',
        'sqft_living',
        'sqft_basement',
        'sqft_lot',
        'view',
        'condition',
        'waterfront',
        'yr_built',
        'yr_renovated',
    ];

    const preprocessedData = preprocessData([inputData]);
    const inputFeatures = features.map(feature => preprocessedData[0][feature]);
    const prediction = model.predict([inputFeatures])[0];

    return prediction;
}

module.exports = {
    trainLinearRegression,
    predictPrice,
};
