const router = require('express').Router();
// bye=delete
const {
  thoughts,
  oneThought,
  createThought,
  byeThought,
  updateThought,
  createReaction,
  byeReaction
} = require('../../controllers/thoughtController.js');

router.route('/')
.get(thoughts)
.post(createThought);

router.route('/:thoughtId')
.get(oneThought)
.put(updateThought)
.delete(byeThought);

router.route('/:thoughtId/reactions')
.post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(byeReaction);

module.exports = router;