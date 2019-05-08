import * as dao from './dao';

/*CLIENTS*/
export async function listAllUsers(data) {
  return(await dao.readAll('clients', data));
}
export function registerClients(data) {
  console.log(data)
  dao.register('clients', data);
}
export function deleteClients(data) {
  console.log(data)
  dao.deleteClients('clients', data);
}
export async function rent(data) {
  console.log(data);
  dao.rent('clients', 'vehicles', data);
}
export async function endRent(data) {
  console.log(data);
  dao.endRent('clients', 'vehicles', data);
}
/*VEHICLES*/
export async function listAllVehicles(data) {
  return(await dao.readAll('vehicles', data));
}
export function registerVehicles(data) {
  dao.register('vehicles', data);
}




