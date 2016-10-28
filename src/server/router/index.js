import express from 'express';
import home from './routes/home';
import api from './routes/api';

export default function (app) {
  // Routes
  app.use('/', home);
  app.use('/api', api);
}
