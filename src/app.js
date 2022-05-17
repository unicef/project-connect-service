const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const PORT = 3000;

const errors = require("./error-middleware");

const router = require("./routers/index");
const app = express();

app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Connect Daily Check App (PCDC) Backend API",
      description: "This is a backend API for the Project Connect Daily Check App. PCDC is a window-based desktop application that sends internet connectivity information of schools to Project Connect on daily basis.",
      termsOfService: "https://projectconnect.unicef.org/privacy",
      contact: {
        name: "API Support",
        url: "http://16.170.227.39/api/v1/",
        email: "yyeneneh@unicef.org",
      },
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html",
      },
      version: "1.0.1",
      servers: ["http://localhost:3000"],
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: "http",
          description: "Enter Authorization Bearer token ",
          scheme: "bearer",         
          bearerFormat: "JWT"
        },
      }
    }
    ,
    security: [{
      Bearer: []
    }],
    servers: [
      {
       // url: "http://16.170.227.39"
        url: "http://localhost:3000"
      },
    ],
  },
  apis: ["src/routers/*.js"],
};

app.use("/api/v1", router);

const swaggerSpec = swaggerJsDoc(options);

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errors.notFound);
app.use(errors.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is started on PORT: ${PORT}`);
});
