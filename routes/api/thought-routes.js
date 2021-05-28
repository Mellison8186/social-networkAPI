const router = require('express').Router();
const { 
    getAllThoughts,  
    addThought, 
    getThoughtById,
    updateThought,
    removeThought } = require('../../controllers/thought-controller');

// /api/thought/<userId>
router.route('/')
.get(getAllThoughts)

// /api/:userId to create thoughts for a user
router.route('/:userId')
.post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

module.exports = router;