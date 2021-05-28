const router = require('express').Router();
const { addThought, removeThought, getAllThoughts } = require('../../controllers/thought-controller');

// /api/comment/<userId>
router.route('/:userId').post(addThought);
router.route('/').get(getAllThoughts);

// /api/comments/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;