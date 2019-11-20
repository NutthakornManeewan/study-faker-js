const faker = require("faker");

module.exports = () => {
    const fakeCreateUser = {
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumber(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        user_address: faker.address.city() +", "+ faker.address.zipCode(),
        user_company: faker.company.companyName(),
    };
    return fakeCreateUser;
};
