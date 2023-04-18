const helloMiddleware = (req, res, next) => {
    console.log("Hello Middleware");
    next();
}
module.exports = helloMiddleware;