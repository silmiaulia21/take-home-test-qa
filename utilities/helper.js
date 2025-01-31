function generateRandomIntegers(digits) {
    let randomNumbers = Math.floor(Math.random() * Math.pow(10, digits));
    return randomNumbers;
}

function generateRandomEmail() {
    let randomNumbers = Math.floor(Math.random() * 100000); // Angka acak dengan maksimal 5 digit
    return `user${randomNumbers}@example.com`;
}

module.exports = {
    generateRandomIntegers,
    generateRandomEmail
};
