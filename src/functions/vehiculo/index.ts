
import { handlerPath } from '@libs/handler-resolver';
/**
 * @function getAllVehiculos
 * @summary Obtiene la lista de vehiculos desde DynamoDB
 * @license Orlando Netty Yarasca Lupuche: yarasca.lupuche.orlando@gmail.com
 */
export const getAllVehiculos = {
    handler: `${handlerPath(__dirname)}/handler.getAllVehiculos`,
    events: [
        {
            http: {
                method: 'get',
                path: 'vehiculo/'
            },
        },
    ],
};
/**
 * @function createVehiculo
 * @summary Crear un registro nuevo en DynamoDB
 * @license Orlando Netty Yarasca Lupuche: yarasca.lupuche.orlando@gmail.com
 */
export const createVehiculo = {
    handler: `${handlerPath(__dirname)}/handler.createVehiculo`,
    events: [
        {
            http: {
                method: 'post',
                path: 'vehiculo',
            },
        },
    ],
};
/**
 * @function getAllVehiculosSwapi
 * @summary Obtiene todos los vehiculos del API de SWAPI
 * @license Orlando Netty Yarasca Lupuche: yarasca.lupuche.orlando@gmail.com
 */
export const getAllVehiculosSwapi = {
    handler: `${handlerPath(__dirname)}/handler.getAllVehiculosSwapi`,
    events: [
        {
            http: {
                method: 'get',
                path: 'vehiculoSwapi/',
            },
        },
    ],
};