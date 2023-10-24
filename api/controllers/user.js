export const updateUser = (async (req, res) => {
    // const newUser = new User(req.body)
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err)
    }
});

//Delete User:
export const deleteUser = (async (req, res) => {
    // const newUser = new User(req.body)
    try {
        await User.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("User deleted");
    } catch (err) {
        console.log(err)
    }
});

// Get User :
export const getUser = (async (req, res) => {
    try {
        const savedUser = await User.findById(req.params.id);
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

// Get all :
export const getAllUser = (async (req, res) => {
    try {
        const savedUser = await User.find();
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});