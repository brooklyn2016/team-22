import express from 'express';
import path from 'path';

let router = express();

router.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname,'../index.html'));
});

export default router;
