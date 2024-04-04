export default class VehiculosService {
    constructor(docClient) {
        this.docClient = docClient;
        this.Tablename = "VehiculosTable";
    }
    async getAllVehiculos() {
        const vehiculos = await this.docClient.scan({
            TableName: this.Tablename,
        }).promise();
        return vehiculos.Items;
    }
    async createVehiculo(vehiculo) {
        await this.docClient.put({
            TableName: this.Tablename,
            Item: vehiculo
        }).promise();
        return vehiculo;
    }
}
//# sourceMappingURL=VehiculosService.js.map