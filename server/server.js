require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const multer = require("multer");
const Project = require('./models/Project');
const mongoose = require('mongoose')
const buffer = require('buffer')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const path = require('path')
const port = process.env.PORT || 8080



const storage = multer.memoryStorage()
const upload = multer({ storage})

mongoose.connect(`mongodb+srv://Pilgrim:${process.env.MONGO_KEY}@cluster0.bpyvgx1.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(bodyParser.json())

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false}))

const cacheOptions = {
  maxAge: '7d'
}

app.use(express.static(path.join(__dirname + '/public')))



passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({username: username}, (err, user) => {
        if (err) {
          return done(err)
        }
        if(!user) {
          return done( null, false, { message: 'Incorrect Username'})
        }
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            //passwords match
            return done(null, user)
          } else {
            //passwords do not match
            return done(null, false, { message: 'Incorrect Password'})
          }
        })
      })
    })
  )
  
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user)
    })
  })

  app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
  })

  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }


app.post('/api/projects', authenticateToken, upload.single('image'), async (req, res) => {
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

app.get('/api/project/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const project = await Project.find({_id: req.params.id})
        res.status(200).json(project)
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'})
    }
})

app.get('/api/data', (req, res) => {
    res.json({message: 'Server Connected'})
})

app.post('/api/user', async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username }).exec();
    if (user === null) {
      return res.status(400).json({ message: 'Cannot find user' });
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      const currentUser = { username: user.username };
      const accessToken = jwt.sign(currentUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
      res.json({ accessToken: accessToken });
    } else {
      res.json({ message: 'Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});



app.listen(port, () => {
    console.log('Listening on PORT 8080');
})
