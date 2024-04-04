import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Vehiculo from "../model/Vehiculo";

export default class VehiculosService {
    
    private Tablename: string = "VehiculosTable";

    constructor(private docClient: DocumentClient) { }
    async getAllVehiculos(): Promise<Vehiculo[]> {
        const vehiculos = await this.docClient.scan({
            TableName: this.Tablename,
        }).promise()
        return vehiculos.Items as Vehiculo[];
     }
     async createVehiculo(vehiculo: Vehiculo): Promise<Vehiculo> {
        await this.docClient.put({
            TableName: this.Tablename,
            Item: vehiculo
        }).promise()
        return vehiculo as Vehiculo;

    }
    
    }