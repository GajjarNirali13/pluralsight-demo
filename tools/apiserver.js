const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const { METHODS } = require("http");
const { create } = require("domain");
const router = jsonServer.router(path.join(__dirname, "db.json"));


const middlewares = jsonServer.defaults({
	static: "node_modules/json-server/dist"
});

server.use(middlewares);

server.use(jsonServer.bodyParser);


server.use(function(req, res, next) {
    setTimeout(next, 0);
})


server.use((req, res, next) => {
    if(req.method === "POST"){
        req.body.createAt = Date.now();
    }

    next();
})

server.post('/courses/', function(req, res, next) {
    const error = validateCourse(req.body);
    if (error) {
        req.status(400).send(error);
    } else {
        req.body.slug = createSlug(req.body.title);
        next();
    }
}); 

server.use(router);

const port = 3001;
server.listen(port, () => {
    console.log(`Json server is running on port ${port}`);
})

function createSlug (value) {
    return value
        .replace(/[^a-z0-9_]+/gi, "-")
        .replace(/^|-$/g, "")
        .toLowerCase()
}

function validateCourse (course) {
    if(!course.title) return "Title is empty";
    if(!course.authorId) return "Author is empty";
    if(!course.category) return "Category is empty";
    return "";
}