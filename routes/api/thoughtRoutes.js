const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
//http://localhost:3001/api/thoughts/
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id
//http://localhost:3001/api/thoughts/1
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
//http://localhost:3001/api/thoughts/1/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
//http://localhost:3001/api/thoughts/1/reactions/2
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

