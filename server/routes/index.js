import express from 'express';
import path from 'path';
import passport from 'passport';

import { signUp, signIn } from '../../models/authentication';

const requireSignin = passport.authenticate('local', {session: false});


let router = express();

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

router.post("/register", signUp);

// LOGIN ROUTE

router.post("/login", requireSignin, signIn);

export default router;
