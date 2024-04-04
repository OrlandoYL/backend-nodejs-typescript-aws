# Serverless - AWS Node.js Typescript DynamoDB

Este proyecto se generó utilizando la plantilla `aws-nodejs-typescript` del [Serverless Framework] (https://www.serverless.com/).
Se crearon 3 endpoints son los siguientes:
+ METHOD GET - **https://{URL_AWS}/dev/vehiculo/**
    > Este primer endpoint retorna una lista de vehiculos que se guardo en DynamoDB de AWS.

+ METHOD POST - **https://{URL_AWS}/dev/vehiculo/**
    > Este endpoint guarda un nuevo registro, con el siguiente modelo:
    ~~~
        {
            "title": "string",
            "description": "string"
        }
    ~~~
+ METHOD GET - **https://{{URL_AWS}}/dev/vehiculoSwapi/**
    > Este endpoint lista los vehiculos con los atributos en español desde la integracion del api "https://swapi.py4e.com/api/vehicles/"

## Instrucciones de instalación/implementación

Dependiendo de su administrador de paquetes preferido, siga las instrucciones a continuación para implementar su proyecto.

### Swaggger UI

 Se instalo el plugin **`serverless-auto-swagger`** para generar el swagger UI.
 Para acceder a la documentacion, se debe a la ruta siguiente ruta: **`https://{{URL_AWS}}/dev/swagger`**

###

### Utilizando NPM

- Ejecutar `npm i` para instalar todas las dependencias
- Ejecutar `serverless deploy` para desplegar a AWS

###


### Estructura del proyecto

La base del código del proyecto se encuentra principalmente dentro de la carpeta `src`. Esta carpeta se divide en:

- `functions` - contiene código base y configuración para sus funciones lambda
- `libs` - contiene código base compartido entre sus lambdas

```
.
├── src
│   ├── functions               
│   │   └── vehiculo
│   │       └── handler.ts     
│   │       └── index.ts  
│   │
│   ├── libs                  
│   │   └── apiGateway.ts       
│   │   └── handlerResolver.ts  
│   │   └── lambda.ts  
│   │    
│   ├── model                  
│   │   └── index.ts       
│   │   └── request.vehiculo.ts  
│   │   └── response.vehiculo-es.ts 
│   │   └── response.vehiculo.ts
│   │   └── Vehiculo.ts
│   │
│   └── services                  
│       └── index.ts       
│       └── integration.ts  
│       └── VehiculosServices.ts 
│
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

