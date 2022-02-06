const electronics = [
    { name: 'Apple 14', price: 140000, Realese: 2022 },
    { name: 'Apple 13', price: 120000, Realese: 2021 },
    { name: 'Apple 12', price: 100000, Realese: 2020 },
    { name: 'Apple 11', price: 90000, Realese: 2019 },
    { name: 'Apple 10', price: 80000, Realese: 2018 },
    { name: 'Apple 8', price: 70000, Realese: 2017 },
    { name: 'Apple 7', price: 60000, Realese: 2016 },
    { name: 'Apple 6', price: 55000, Realese: 2015 },
    { name: 'Apple 5', price: 50000, Realese: 2014 },
    { name: 'Apple 4', price: 40000, Realese: 2013 }
];

function searchTheProduct(products, searchText) {
    let result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;
}

console.log(searchTheProduct(electronics, '1'));
