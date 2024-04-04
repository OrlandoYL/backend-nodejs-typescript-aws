import { AxiosInstance } from "axios";
import Axios from "axios";
import { VehiculoRequest } from "src/model/request.vehiculo";
import { VehiculoResponse } from "src/model/response.vehiculo";
import { VehiculoEsResponse } from "src/model/response.vehiculo-es";

export class IntegrationService {
    private api: AxiosInstance;
    private CONTENT_TYPE_JSON = "application/json";

    constructor() {
        const API_URL_SWAPI = process.env.API_BASE_URL;

        this.api = Axios.create({
            baseURL: API_URL_SWAPI
        });
    }

    private getDefaultHeaders = (token: string = "") => token
        ? { Authorization: `${token}`, 'Content-Type': this.CONTENT_TYPE_JSON }
        : { 'Content-Type': this.CONTENT_TYPE_JSON };

    async auth(params: VehiculoRequest): Promise<VehiculoEsResponse[]> {

        const response = await this.api.get('');
        const vehiculosResponse: VehiculoResponse[] = response.data.results;
        // Mapear la lista de vehículos de respuesta a tu modelo de vehículo
        const vehiculos: VehiculoEsResponse[] = vehiculosResponse.map((vehiculoResponse: VehiculoResponse) => ({
            nombre: vehiculoResponse.name,
            modelo: vehiculoResponse.model,
            creado: vehiculoResponse.created,
            editado: vehiculoResponse.edited,
            url: vehiculoResponse.url,
        }));
        return vehiculos;
    }
}