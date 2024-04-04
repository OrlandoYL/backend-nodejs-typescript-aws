import { handlerPath } from '@libs/handler-resolver';
export const getAllVehiculos = {
    handler: `${handlerPath(__dirname)}/handler.getAllVehiculos`,
    events: [
        {
            http: {
                method: 'get',
                path: 'vehiculo/',
            },
        },
    ],
};
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
//# sourceMappingURL=index.js.map