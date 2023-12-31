const express = require('express');
const entryController = require('../controllers/entryController');


const router = express.Router();

router.post('/entries', entryController.createEntry);
router.get('/entries', entryController.getEntries);
router.put('/entries/:id', entryController.updateEntry);
router.delete('/entries/:id', entryController.deleteEntry);

module.exports = router;
