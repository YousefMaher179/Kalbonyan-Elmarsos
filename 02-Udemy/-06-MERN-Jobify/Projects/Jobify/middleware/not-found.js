const notFoundMiddleware = (req, res) => {
  res.this.status(404).send("Route does not exist");
};

export default notFoundMiddleware;
