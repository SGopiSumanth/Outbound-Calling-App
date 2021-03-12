const catchAsync = (asyncFunc) => (req, res, next) =>
  asyncFunc(req, res, next).catch((err) => next(err));

module.exports = catchAsync;
