module.exports = (err, req, res, nex) => {
  err.statusCode = err.statusCode || 600;
  err.message = err.message || "Something is wrong here";
  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};
