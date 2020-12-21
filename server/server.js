const express = require('express');
const app = express();
const cors = require('cors');
const StudentService = require('./Services/StudentService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.delete('/student/:id', (request, response) => {
    const { id } = request.params;
    const studentService = new StudentService();
    const result = studentService.delete(id);
    result.then(
        data => {
            response.json({ success: true });
        }
    ).catch(err => {
        response.status(500).send('Internal server error');
    })
})

app.put('/student', (request, response) => {
    const studentService = new StudentService();
    const result = studentService.update(request.body);
    result.then(
        data => {
            response.json({ success: true });
        }
    ).catch(err => {
        response.status(500).send('Internal server error');
    })
})

app.post('/student', (request, response) => {
    const studentService = new StudentService();
    const result = studentService.insert(request.body);
    result.then(
        data => {
            response.json({ success: true });
        }
    ).catch(err => {
        response.status(500).send('Internal server error');
    })
})


app.get('/student', (request, response) => {
    const studentService = new StudentService();
    const result = studentService.getAll();
    result.then(
        data => {
            response.json({ success: true, data: data });
        }
    ).catch(err => {
        response.status(500).send(err);
    })
})



app.listen(4000, (err) => {
    console.log('App is running')
})