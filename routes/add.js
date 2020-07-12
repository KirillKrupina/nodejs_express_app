const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add a new course',
        isAdd: true
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);

    res.redirect('/courses');
});

module.exports = router;