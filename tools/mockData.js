const courses = [
    {
        id: 1,
        title: "html",
        slug: "html",
        authorId: 1,
        category: "html"
    },
    {
        id: 2,
        title: "css",
        slug: "css",
        authorId: 1,
        category: "css"
    },{
        id: 3,
        title: "angular",
        slug: "angular",
        authorId: 2,
        category: "angular"
    },{
        id: 4,
        title: "node",
        slug: "node",
        authorId: 2,
        category: "node"
    },{
        id: 5,
        title: "java",
        slug: "java",
        authorId: 1,
        category: "java"
    },{
        id: 6,
        title: ".net",
        slug: ".net",
        authorId: 2,
        category: ".net"
    },{
        id: 7,
        title: "ruby",
        slug: "ruby",
        authorId: 3,
        category: "ruby"
    },{
        id: 8,
        title: "rails",
        slug: "rails",
        authorId: 3,
        category: "rails"
    },
];


const authors = [
    {id: 1, name: "Sheila"},
    {id: 2, name: "Pochi"},
    {id: 3, name: "Kittu"},
];


const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: ""
};


module.exports = {
    newCourse,
    authors,
    courses
};