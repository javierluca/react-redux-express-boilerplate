import express from 'express';

var router = express.Router();

router.get('/test', (req, res, next) => {
    // res.setHeader('Content-Type', 'application/json');
    res.json({
        "key": "value"
    });
});

export default router;