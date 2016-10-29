import express from 'express';
import path from 'path';
import passport from 'passport';
import Module from "../../models/module"

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
router.post("/modules", function(req, res) {
    var data = req.body;
    var modules = new Module({
        moduleName: data.moduleName,
        time: data.time,
        numQuestions: data.numQuestions,
        objective: data.objective,
        background: data.background,
        questions: data.questions,
    });
    modules.save(function( err) {
        if (err) {
            return res.send(err);
        }
        res.status(201).send({message: "Module created succesfully!"});
    });
});

// get all modules
router.get("/modules", function(req, res) {
    Module.find({}, function(err, existingModule) {
        if (existingModule) {
            return res.send({module: existingModule})
;        }
    });
});

// get specified modules
router.get("/modules/:test", function(req, res) {
    Module.findOne({moduleName: req.params.test}, function(err, existingModule) {
        if (existingModule) {
            return res.send({module: existingModule});
        }
    });
});

router.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

export default router;
