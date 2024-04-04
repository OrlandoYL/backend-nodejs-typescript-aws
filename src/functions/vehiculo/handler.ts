import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { v4 } from "uuid";
import vehiculosService from '../../services'
import { IntegrationService } from "src/services/integration";
import { VehiculoRequest } from "src/model/request.vehiculo";


export const getAllVehiculos = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const vehiculos = await vehiculosService.getAllVehiculos();
    return formatJSONResponse ({
        vehiculos
    })
});
export const getAllVehiculosSwapi = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const service = new IntegrationService();
    const vehiculoRequest: VehiculoRequest = { id:""};
    const data = await service.auth(vehiculoRequest);
    console.log(data);
    return formatJSONResponse ({    
        data
    })
});
export const createVehiculo= middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const id = v4();
        //console.log("GUID: "+id);
        //console.log(event.body);

        //let requestBody : Vehiculo; // Parsea el cuerpo del evento y lo tipa como CreateVehiculoRequest
        //requestBody = JSON.parse(event.body) as Vehiculo;

        //console.log('DDDD: '+requestBody);
        const vehiculo = await vehiculosService.createVehiculo({
            todosId: id,
            title: event.body?.title,
            description: event.body?.description,
            createdAt: new Date().toISOString(),
            status: false
        })
        return formatJSONResponse({
            vehiculo
        });
    } catch (e) {
        console.error('Error al analizar el cuerpo del evento:', e);

        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
});