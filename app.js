const express = require('express');
const students = require('./students.json');
const fs = require('fs');
const cors =require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const  port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('server is listening on port ' + port);
})

app.get('/students', (req, res)=>{
    res.send(students);
})

app.post('/student', (req, res) => {
    let student = {
        "id": students.length +1,
        "name": req.body.name,
        "lastName": req.body.lastName,
        "school": req.body.school
    }

    console.log(student)
    students.push(student)

    fs.writeFileSync('students.json', JSON.stringify(students))
    res.send(students)
})

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const student = search(id, students)
    res.send(student)
})

function search(id, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].id === id) {
            return myArray[i];
        }
    }
}
