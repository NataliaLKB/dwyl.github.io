var Path = require('path');
var index = Path.resolve(__dirname + '/index.html');
console.log(index);
module.exports = [
  { path: '/', method: 'GET',
    config: {
      auth: false,
      handler: function (request, reply) {
        reply.file(index);
      }
    }
  },
  { path: '/websummit', method: 'GET',
    config: {
      auth: false,
      handler: function (request, reply) {
        reply.file(index);
      }
    }
  },
  { path: '/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.normalize(__dirname + '/') }
    }
  },
  { path: '/img/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.normalize(__dirname + '/img/') }
    }
  },
  { path: '/css/{param*}', method: 'GET',
    handler: {
      directory: { path: Path.normalize(__dirname + '/css/') }
    }
  }

]