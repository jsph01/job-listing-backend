const express = require('express');
const auth = require('../middleware/auth');
const usersCtrl = require('../controllers/usersCtrl');
const router = express.Router();

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);

router.use(auth.authenticate);
router.put('/:id', auth.checkAuth, usersCtrl.update);

module.exports = router;
