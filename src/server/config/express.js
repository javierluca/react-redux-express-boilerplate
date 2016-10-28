import express from 'express';
import bodyParser from 'body-parser';

export default function(app) {
  // Configure Express
  app.use(bodyParser.urlencoded({ extended: true, limit: '15mb' }));
  app.use(bodyParser.json({ limit: '15mb' }));
  // app.use(express.static(__dirname + '/../../public'));
  app.use(express.static('public'));
}
