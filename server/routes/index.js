import express from 'express';
import path from 'path';

let router = express();

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

router.post("/register", Authenticate.signUp);

// LOGIN ROUTE

router.post("/login", requireSignin, Authenticate.signIn);

export default router;
