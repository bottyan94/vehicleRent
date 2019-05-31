import * as clientsDAO from './clientsDAO';
import * as vehicleDAO from './vehicleDAO';
import * as rentDAO from './rentDAO';


export async function rent(data) {
  const v = await vehicleDAO.read({id: data.vehicleID});
  if (v[0].status !== 'Rented') {
    await clientsDAO.rent(data);
    await vehicleDAO.rent(data);
    await rentDAO.rent(data);
    return ({rent:'Rent registered!'});
  } else { return ({rent:'this car is rented!'}); }
}

export async function finishRent(data) {
  await vehicleDAO.finishRent(data);
  await rentDAO.finishRent(data);
  return;
}

export async function listAllClients(data) {
  return (await clientsDAO.readAll(data));
}

export async function registerClients(data) {
  clientsDAO.register(data);
  return ({reg: 'Client registered!'});
}

export async function updateClients(data) {
  clientsDAO.update(data);
  return ('Client updated!');
}

export async function listAllVehicles(data) {
  return (await vehicleDAO.readAll(data));
}

export async function registerVehicles(data) {
  vehicleDAO.register(data);
  return ({reg: 'Vehicle registered!'});
}

export async function listAllOrders(data) {
  return (await rentDAO.readAll(data));
}
