import * as express from 'express';
import * as srs from './services';

const router = express.Router();

/*CLIENTS*/
router.get('/clients/listAllClients', async (req, res) => {
  res.status(200).send(await srs.listAllClients(req.query));
});

router.post('/clients/register', async (req, res) => {
  res.status(200).send(await srs.registerClients(req.body));
});
router.post('/clients/update', (req, res) => {
  srs.updateClients(req.body);
  res.status(200).send('Client deleted');
});
/*vehicles*/
router.get('/vehicles/listAllVehicles', async (req, res) => {
  res.status(200).send(await srs.listAllVehicles(req.query));
});
router.post('/vehicles/register', async (req, res) => {
  res.status(200).send(await srs.registerVehicles(req.body));
});

router.post('/rent', async (req, res) => {
  res.status(200).send(await srs.rent(req.body));
});
router.post('/finishrent', async (req, res) => {
  res.status(200).send(await srs.finishRent(req.body));
});

router.get('/orders/listAllOrders', async (req, res) => {
  res.status(200).send(await srs.listAllOrders(req.query));
});

// @ts-ignore
module.exports = router;


