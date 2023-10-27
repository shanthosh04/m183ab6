const pino = require('pino');
const rotatingFile = require('@vrbo/pino-rotating-file');

const logger = pino({
  base: null,
  serializers: pino.stdSerializers,

}, rotatingFile({
  path: 'logs', 
  maxsize: 1e6,
  keep: 5, 
}));

module.exports = logger;
