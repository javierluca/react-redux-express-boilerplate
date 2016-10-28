import logger from 'winston';

let error  = function (status_code, message) {
  let e = new Error(message);
  e.code = status_code;
  e.message = message;
  return e;
};

function friendlyError(req, err) {
  let errorMapping = {
    '400' : 'error-400',
    '401' : 'error-401',
    '500' : 'error-500'
  };

  let message = req.__ ? req.__(errorMapping[err.code]) : err.message ;

  return { code : err.code, error: message };
}

export default function (app) {
  // catch 404 and forward to error handler
  app.use(function(_, __, next) { return next(error(404, 'error-404-notfound')); } );

  // error handler
  app.use((err, req, res, next) => {
    let error = {
      code: err.code || 500,
      error: friendlyError(req,err) || err.error || err.message
    };

    if (error.code != 404) {
      logger.error(err, 'url:', req.url, 'Error:', error);
    }

    res.status(error.code).json(error);
  });

}
