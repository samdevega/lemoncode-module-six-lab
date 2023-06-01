const quotesMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/quotes') {
    quotesMiddleware(req, res, next);
  } else {
    next();
  }
};
