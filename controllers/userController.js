const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        }
        );
    },

    // get one user by id
    getUserById(req, res) {
        User.findOne({ _id: params.id })
        .select ('-__v')
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        }
        );
    },

    // createUser
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(400).json(err));
    },

    // update user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true, runValidators: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch((err) => res.status(400).json(err));
    },

    // delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch((err) => res.status(400).json(err));
    },

    // add friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true, runValidators: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch((err) => res.status(400).json(err));
    },

    // delete friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true, runValidators: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch((err) => res.status(400).json(err));
    },
};

module.exports = userController;


