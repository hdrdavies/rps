const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

const Port = process.env.PORT || 3000;

server.connection({ port: Port });

server.register(Inert, () => {

  server.route([{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./lib/index.html');
    }
  }, {
    method: 'GET',
    path: '/{file*}',
    handler: {
      file: function (request) {
            return request.params.file;
        }
    }
  }]);
});

server.start(() => { console.log('Server running at: ', server.info.uri);})
