const Vehicle = require('../model/Vehicle');
const VehicleDAO = require('../model/DAO/VehicleDAO');
const path = require('path');

exports.renderMenuPageWithVehicleList = async (req, res) => {
  try {
    const result = await VehicleDAO.getAllVehiclesData(Vehicle);
    return res
      .status(200)
      .render(path.join(__dirname, '..', '/view/menu.ejs'), { result });
  } catch (err) {
    return res.status(401).send(err);
  }
};

exports.renderVehicleForm = async (req, res) => {
  try {
    const result = await VehicleDAO.getVehicleData(Vehicle, req.params.id);

    return res
      .status(200)
      .render(
        path.join(__dirname, '..', '/view/form_vehicle.ejs'),
        result !== null ? { result } : { result: '' }
      );
  } catch (err) {
    return res.status(401).send(err);
  }
};

exports.saveVehicle = async (req, res) => {
  const data = req.body;
  const platePattern = /^[A-Z]{3}-[0-9]{4}/g;
  const validTypes = ['carro', 'moto', 'caminhao', 'aviao', 'trem'];

  if (data.name.length < 4 || data.name.length > 100) {
    return res
      .status(406)
      .send('O nome do veículo deve conter entre 4 à 100 caracteres.');
  } else if (!platePattern.test(data.license_plate)) {
    return res
      .status(406)
      .send('A placa do veículo está com um formato inválido.');
  } else if (!validTypes.includes(data.type)) {
    return res
      .status(406)
      .send('O tipo do veículo está com um valor inválido.');
  } else if (data.status !== 'true' && data.status !== 'false') {
    return res
      .status(406)
      .send('A disponibilidade do veículo está com um valor inválido.');
  }

  if (!data.id) {
    try {
      await Vehicle.create(data);

      return res
        .status(201)
        .send(`Veículo ${data.name} registrado com sucesso!`);
    } catch (err) {
      return res.status(406).send('Não foi possível registrar o veículo.');
    }
  } else {
    try {
      const result = await VehicleDAO.updateVehicleData(Vehicle, data.id, data);

      return res
        .status(202)
        .send(`Veículo ${result.name} atualizado com sucesso!`);
    } catch (err) {
      return res.status(406).send('Não foi possivel atualizar o veículo.');
    }
  }
};

exports.deleteVehicle = async (req, res) => {
  const result = await VehicleDAO.deleteVehicle(Vehicle, req.params.id);

  if (result !== null) {
    return res.status(202).send(`Veículo ${result.name} excluído com sucesso!`);
  } else {
    return res.status(406).send('Não foi possivel deletar o veículo.');
  }
};
