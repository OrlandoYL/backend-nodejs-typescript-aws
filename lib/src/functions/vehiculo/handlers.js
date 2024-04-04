import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { v4 } from "uuid";
import vehiculosService from '../../services';
export const getAllVehiculos = middyfy(async () => {
    const vehiculos = await vehiculosService.getAllVehiculos();
    return formatJSONResponse({
        vehiculos
    });
});
export const createVehiculo = middyfy(async (event) => {
    try {
        const id = v4();
        const requestBody = JSON.parse(event.body);
        const vehiculo = await vehiculosService.createVehiculo({
            todosId: id,
            title: requestBody.title,
            description: requestBody.description,
            createdAt: new Date().toISOString(),
            status: false
        });
        return formatJSONResponse({
            vehiculo
        });
    }
    catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
});
//# sourceMappingURL=handlers.js.map