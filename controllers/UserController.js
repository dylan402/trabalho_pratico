const User = require('../model/User');
const UserDAO = require('../model/DAO/UserDAO');

exports.userRegister = async (req, res) => {
  const data = req.body;

  if (data.username.length < 4 || data.username.length > 20) {
    return res
      .status(406)
      .send('O campo Usuário deve conter entre 4 à 20 caracteres.');
  } else if (data.password.length < 4 || data.username.length > 20) {
    return res
      .status(406)
      .send('O campo Senha deve conter entre 4 à 20 caracteres.');
  }

  try {
    if (await UserDAO.checkUserExists(User, data)) {
      return res.status(406).send('Usuário já cadastrado.');
    }

    await User.create(data);
    return res.status(200).send('REGISTERED');
  } catch (err) {
    return res.status(406).send('Falha ao registrar.');
  }
};

exports.userLogin = async (req, res) => {
  const data = req.body;

  if (data.username.length < 4 || data.username.length > 20) {
    return res
      .status(406)
      .send('O campo Usuário deve conter entre 4 à 20 caracteres.');
  } else if (data.password.length < 4 || data.username.length > 20) {
    return res
      .status(406)
      .send('O campo Senha deve conter entre 4 à 20 caracteres.');
  }

  try {
    if (!(await UserDAO.checkUserExists(User, data))) {
      return res.status(406).send('Usuário não existe no sistema.');
    }

    if ((await UserDAO.compareUserAndPassword(User, data)) !== null) {
      return res.status(202).send('LOGIN');
    } else {
      return res.status(404).send('A senha está incorreta.');
    }
  } catch (err) {
    return res.status(406).send('Falha ao logar.');
  }
};
