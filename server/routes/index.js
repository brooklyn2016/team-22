import express from 'express';
import path from 'path';
import passport from 'passport';
import Lesson from '../../models/lesson'
import passportConfig from '../../models/passport';
import User from '../../models/user'

import { signUp, signIn, ensureAuthenticated } from '../../models/authentication';

const requireSignin = passport.authenticate('local', {session: false});


let router = express();

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

router.post("/register", signUp);

// LOGIN ROUTE
router.post("/login", requireSignin, signIn);

// SEND objective
router.post("/lessons", function(req, res) {
    var data = req.body;
    var lessons = new Lesson({
        lessonName: data.lessonName,
        time: data.time,
        numQuestions: data.numQuestions,
        objective: data.objective,
        background: data.background,
        questions: data.questions,
    });
    lessons.save(function( err) {
        if (err) {
            return res.send(err);
        }
        res.status(201).send({message: "Lesson created succesfully!"});
    });
});

// get all lessons, to populate main app page
router.get("/lessons", function(req, res) {
    Lesson.find({}, function(err, existingLesson) {
        if (existingLesson) {
            return res.send({lesson: existingLesson})
;        }
    });
});

// get specified lesson
router.get("/lessons/:name", function(req, res) {
    Lesson.findOne({lessonName: req.params.name}, function(err, existingLesson) {
        if (existingLesson) {
            return res.send({lesson: existingLesson});
        }
    });
});

// returns user's points, zipcode, and modules started and progress in each, for
// user profile page
router.get("/user", ensureAuthenticated, (req, res) => {
    const user = req.user;
    console.log(req.user);
    User.findOne({username: req.user.username}, function(err, existingUser) {
        if (existingUser) {
            return res.send({points: existingUser.points, zipCode: existingUser.zipCode,
                lessons: existingUser.lessons});
        }
    });
});

// returns array of friends usernames and points, for leaderboard page
router.get("/friends", ensureAuthenticated, function(req, res) {
    const user = req.user;
    console.log(req.user);
    User.findOne({username: req.user.username}, function(err, existingUser) {
        if (existingUser) {
            return res.send({friends: existingUser.friends});
        }
    });
});

router.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

export default router;
