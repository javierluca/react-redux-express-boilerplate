#! /usr/bin/env node
'use strict';

import server from './app';
import logger from 'winston';

let default_port = 3000;

var port = process.env.PORT || process.env.VCAP_APP_PORT || default_port;

server.listen(port, function () {
  logger.info('Listening at:', port);
});

export default server;