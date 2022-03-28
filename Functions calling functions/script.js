// Hey kiddo
const first = function(age) {
if (age >= 18) {
    return true;
}
else {
    return false;
}
};

const second = function(age) {
 if (first(age)) {
     return "Hello there";
 }
 else {
     return "Hey kiddo";
 }
};

console.log(second(10));
console.log(second(80));

// VAT calculations 1
const vat = function(basePrice, vatPercentage) {
    return basePrice * (vatPercentage / 100);
};

const calculate = function(basePrice, vatPercentage) {
    const VAT = vat(basePrice, vatPercentage);
    return basePrice + VAT;
};
console.log(calculate(1000, 21)); // the result 1210
console.log(calculate(2, 9)); // the result 2.18

// VAT calculations 2
const basePriceCalcu = function(basePrice, vatPercentage) {
    const basePrice = priceWithVat / ((100 + vatPercentage) / 100);
    return basePrice;
};
const calculateBaseAndVat = function(priceWithVat, vatPercentage) {
    const basePrice = basePriceCalcu(priceWithVat, vatPercentage);
    const VAT = priceWithVat - basePrice;
    return [basePrice, VAT];
};
console.log(calculateBaseAndVat(1210, 210));
console.log(calculateBaseAndVat(2.18, 9));