import express from 'express';
import expressConfig from './config/express';
import router from './router';
import errorHandler from './config/error-handler';

let app = express();

// Bootstrap application settings
expressConfig(app);

// Add routes to app
router(app);

// error-handler settings
errorHandler(app);

export default app;
