const router = require('express').Router();
const { 
    getAllThoughts,  
    addThought, 
    getThoughtById,
    updateThought,
    removeThought,
    createReaction,
    deleteReaction 
} = require('../../controllers/thought-controller');

// /api/thought/<userId>
router.route('/')
.get(getAllThoughts)

// /api/:userId to create thoughts for a user
router.route('/:userId')
.post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;