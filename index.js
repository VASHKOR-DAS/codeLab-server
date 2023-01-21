const express = require('express')
const app = express()
const cors = require('cors') // load data on other domain
const port = process.env.PORT || 5000;

app.use(cors());

// load data
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('CodeLab API running');
});

// route anujayi data sent krr jnno
app.get('/free', (req, res) => {
    const free = courses.filter(element => element.category === 'free');
    res.send(free);
});


// value er name anujayi search
app.get('/paid-course', (req, res) => {
    const paidCourse = courses.filter(element => element.category === 'paid');
    res.send(paidCourse);
});

// CourseDetails
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n._id === id);
    res.send(selectedCourse);
});










app.listen(port, () => {
    console.log("CodLab Server running on port", port);
})