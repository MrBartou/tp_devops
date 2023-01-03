const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');
const OpenApiValidator = require('express-openapi-validator');


const usersRoutes = require("./routes/users.router");
const favorisRoutes = require("./routes/favoris.router");
const filmsRoutes = require("./routes/films.router");
const recommandationsRoutes = require("./routes/recommandation.router");
const seriesRoutes = require("./routes/series.router");

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
    OpenApiValidator.middleware({
      apiSpec: './openapi.yaml',
      validateRequests: true,
    }),
);

app.use("/users", usersRoutes);
app.use("/favoris", favorisRoutes);
app.use("/films", filmsRoutes);
app.use("/recommandations", recommandationsRoutes);
app.use("/series", seriesRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
});

module.exports = app;
