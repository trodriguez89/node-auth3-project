const db = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findBy,
    findById
}

function add(user){
    return db("user")
    .insert(user)
};

function find(department){
    return db("user")
    .where("department", department)
    .select("id", "username", "department")
};

function findBy(filter){
    return db("users")
    .where(filter);
};

function findById(id){
    return db("users")
    .where({ id })
    .first();
}

