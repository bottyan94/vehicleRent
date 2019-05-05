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
export async function rent(data) {
  clientsDAO.rent(data);
  vehicleDAO.rent(data);
}
/*VEHICLES*/
export async function listAllVehicles(data) {
  return(await vehicleDAO.readAll(data));
}
export function registerVehicles(data) {
  vehicleDAO.register(data);
}
export function update(data) {
  vehicleDAO.update(data);
}



