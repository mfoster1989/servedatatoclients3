const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const names = [

    {
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
}, {
    id: 2,
    firstName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver",
}, {
    id: 3,
    firstName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
}, {
    id: 4,
    firstName: "Daniel",
    lastName: "Winston",
    homeTown: "Akron"
}, {
    id: 5,
    firstName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
}];


function getID(names, id) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].id == id) {
            return names[i]
        }
    }
}

app.get("/", function(request, response) {
    response.json({names})
});

app.get("/:id", function (request, response) {
    var name = getID(names, request.params.id)
    if (!name) {
        response.status(404).json({
            error: {
                message: "No name found with that ID"
            }
        })
    } else {
    response.json({names: name})
    }   
})

app.listen(process.env.PORT || 3000)