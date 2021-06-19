module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'clever-yonath.82-223-23-80.plesk.page'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'briefcase'),
        username: env('DATABASE_USERNAME', 'tovaz'),
        password: env('DATABASE_PASSWORD', 'To34v@80z5200'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
