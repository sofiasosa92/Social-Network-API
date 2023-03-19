const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users
//http://localhost:3001/api/users/
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
//http://localhost:3001/api/users/1
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
//http://localhost:3001/api/users/1/friends/2
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;