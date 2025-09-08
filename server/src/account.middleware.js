const faker = require('faker');

const accountMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      iban: faker.finance.iban(true),
      name: req.body.name,
      type: req.body.type,
      balance: 0,
      lastTransaction: new Date().toISOString(),
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/movements') {
    accountMiddleware(req, res, next);
  } else {
    next();
  }
};

module.exports = (req, res, next) => {
  if (req.path === '/tickets') {
    accountMiddleware(req, res, next);
  } else {
    next();
  }
};
