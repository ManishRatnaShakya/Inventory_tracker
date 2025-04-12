const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventory Tracker API',
      version: '1.0.0',
      description: 'A full-featured inventory tracker built with Node.js, Express, and Sequelize',
    },
    servers: [
      {
        url: 'http://localhost:5001/api/v1',
        description: 'Local dev server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },

        schemas: {
          UserRegister: {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
              name: { type: 'string', example: 'John Doe' },
              email: { type: 'string', example: 'john@example.com' },
              password: { type: 'string', example: 'strongpassword123' },
              role: { type: 'string', enum: ['user', 'admin'], example: 'user' }
            }
          },
          UserLogin: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: { type: 'string', example: 'john@example.com' },
              password: { type: 'string', example: 'strongpassword123' }
            }
          }
        
      }
      
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./routes/*.js'], // 📌 point to your route files
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
