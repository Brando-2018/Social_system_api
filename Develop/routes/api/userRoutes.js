const router = require('express').Router();
// bye=delete
const {
  users,
  oneUser,
  createUser,
  updateUser,
  byeUser,
  addFriend,
  byeFriend
} = require('../../controllers/userController');

router.route('/')
.get(users)
.post(createUser);

router.route('/:userId')
.get(oneUser)
.put(updateUser)
.delete(byeUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(byeFriend);

module.exports = router;