module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        host: 'smtp.gmail.com', //SMTP Host
        port: 465   , //SMTP Port
        secure: true,
        username: '2017experiencia@gmail.com',
        password: 'drnapjxsimmbjfah',//'to24va47z9889999',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
      settings: {
        from: 'info@williamvaldez.com',
        //replyTo: 'my.username@gmail.com',
      },
    },
  });