import dynamoDBClient from "../model/index";
import VehiculosService from "./VehiculosService";
const vehiculosService = new VehiculosService(dynamoDBClient());
export default vehiculosService;
//# sourceMappingURL=index.js.map