import * as express from 'express';
import * as srs from './services';

const router = express.Router();


/*CLIENTS*/
router.get('/clients/list', async (req, res) => {
  res.status(200).send(await srs.listAllUsers(req.query));
});
router.post('/clients/reg', (req, res) => {
  srs.registerClients(req.body);
  res.status(200).send('Client registrated.');
});
router.post('/clients/delete', (req, res) => {
  srs.deleteClients(req.body);
  res.status(200).send('Client deleted');
});
router.post('/clients/rent', (req, res) => {
  srs.rent(req.body);
  res.status(200).send('Client and Car status updated.');
});
router.post('/clients/endRent', (req, res) => {
  srs.endRent(req.body);
  res.status(200).send('Client and Car status updated.');
});


/*VEHICLES*/
router.get('/vehicle/list', async (req, res) => {
  res.status(200).send(await srs.listAllVehicles(req.query));
});
router.post('/vehicle/reg', (req, res) => {
  srs.registerVehicles(req.body);
  res.status(200).send('Vehicle registrated.');
});


module.exports = router;
