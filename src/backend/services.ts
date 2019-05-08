import * as dao from './dao';

/*CLIENTS*/
export async function listAllUsers(data) {
  return(await dao.readAll('clients', data));
}
export function registerClients(data) {
  dao.register('clients', data);
}
export function deleteClients(data) {
  dao.deleteClients('clients', data);
}
export async function rent(data) {
  console.log(data);
  dao.rent('clients', 'vehicle', data);
}
export async function endRent(data) {
  console.log(data);
  dao.endRent('clients', 'vehicle', data);
}
/*VEHICLES*/
export async function listAllVehicles(data) {
  return(await dao.readAll('vehicle', data));
}
export function registerVehicles(data) {
  dao.register('vehicle', data);
}




