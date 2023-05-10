const http = require("http");
const app = require("./app/app");
const server = http.createServer(app);
const port = 5050;
server.listen(port, () => {
    console.log("App is running on http://localhost:" + port);
});
