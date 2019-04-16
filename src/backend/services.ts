import * as clientsDAO from './clientsDAO';
import * as vehicleDAO from './vehicleDAO';

/*CLIENTS*/
export async function listAllUsers(data) {
  return(await clientsDAO.readAll(data));
}
export function registerClients(data) {
  clientsDAO.register(data);
}
export function deleteClients(data) {
  clientsDAO.deleteClients(data);
}

/*VEHICLES*/
export async function listAllVehicles(data) {
  return(await vehicleDAO.readAll(data));
}
export function registerVehicles(data) {
  clientsDAO.register(data);
}

