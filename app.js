const express = require('express');
const students = require('./students.json');
const fs = require('fs');

const app = express();
app.use(express.json());

const  port = 3000;

app.listen(port, () =>{

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

    students.push(student)

    fs.writeFileSync('students.json', JSON.stringify(students))
    res.send(students)
})

app.get('/students/:id', (req, res) => {

})
