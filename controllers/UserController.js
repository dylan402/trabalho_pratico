const User = require("../model/User");
const UserDAO = require("../model/DAO/UserDAO");

exports.user_login = async (req, res) => {
    try {
        if (await UserDAO.checkUserAndPassword(User, req.body) != null) {
            return res.status(200).redirect('/menu');
        } else {
            return res.status(400).send({ error: 'Usuário não cadastrado!' });
        }
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao logar.' });
    }
};

exports.user_register = async (req, res) => {
    const { username } = req.body;
    try {
        if (await UserDAO.checkUserExists(User, username)) {
            return res.status(400).send({ error: 'Usuário já cadastrado.' });
        }

        await User.create(req.body);
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao registrar.' });
    }
};

exports.user_details = async (req, res) => {
    await User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.user_delete = async (req, res) => {
    await User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};