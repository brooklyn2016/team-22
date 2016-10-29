import express from 'express';
import path from 'path';
import passport from 'passport';
import Lesson from "../../models/lesson"
import passportConfig from '../../models/passport';

import { signUp, signIn } from '../../models/authentication';

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

// get all modules
router.get("/lessons", function(req, res) {
    Lesson.find({}, function(err, existingLesson) {
        if (existingLesson) {
            return res.send({lesson: existingLesson})
;        }
    });
});

// get specified modules
router.get("/lessons/:test", function(req, res) {
    Lesson.findOne({moduleName: req.params.test}, function(err, existingLesson) {
        if (existingLesson) {
            return res.send({lesson: existingLesson});
        }
    });
});

router.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

export default router;
