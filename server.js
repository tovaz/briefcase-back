module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    url: env('URL', 'https://williamvaldez.clever-yonath.82-223-23-80.plesk.page/'),
    port: env.int('PORT', 1337),
    //proxy: env('PROXY', true),
    //NODE_ENV: 'development',
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'd4e5c1fb58bde3a1dadfadfa23426433c7450944966'),
      },
    },
  });
  
  const strapi = require('strapi');
  
  strapi().start();
  