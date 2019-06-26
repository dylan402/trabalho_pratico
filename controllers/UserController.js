const User = require("../model/User");
const UserDAO = require("../model/DAO/UserDAO");

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