db.posts.insertMany([
    { 
        creation_date: new Date(),
        author: "skbx@example.com",
        topics: ["mongodb"]
    },
    {
        creation_date: new Date("2021-12-31"),
        author: "skbx@example.ru"
    }
]);
