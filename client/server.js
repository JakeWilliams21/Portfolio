const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const multer = require("multer");
const Project = require('./models/Project');
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

const storage = multer.memoryStorage()
const upload = multer({ storage})

mongoose.connect('mongodb+srv://Pilgrim:Ct9TmXQGJbNGmM3k@cluster0.bpyvgx1.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(bodyParser.json())


app.post('/api/projects', upload.single('image'), async (req, res) => {
    try {
        const { title, description, skills, url } = req.body
        const iamgeBuffer = req.file.buffer;
        const project = new Project({
            title,
            description,
            skills: skills.split(','),
            image: {
                data: iamgeBuffer,
                contentType: 'image/jpeg'
            },
            url,
        })
        await project.save()
        res.status(201).send(project)
    } catch(error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'})
    }
})

app.get('/api/data', (req, res) => {
    res.json({message: 'Server Connected'})
})

app.listen(port, () => {
    console.log('Listening on PORT 5000');
})
