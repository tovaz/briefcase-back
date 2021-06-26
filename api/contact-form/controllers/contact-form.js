'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async sendmail(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services['contact-form'].create(data, { files });
        } else {
          entity = await strapi.services['contact-form'].create(ctx.request.body);
        }

        this.send(ctx.request.body);
        return sanitizeEntity(entity, { model: strapi.models['contact-form'] });
      },

    async send(data){
        await strapi.plugins['email'].services.email.send({
            to: data.email,
            from: 'info@williamvaldez.com',
            //cc: 'helenedarroze@strapi.io',
            //bcc: 'ghislainearabian@strapi.io',
            //replyTo: 'annesophiepic@strapi.io',
            subject: 'Portfolio - ' + data.name,
            text: data.message,
            html: `<p><b>Name: ${data.name}</b></p>
                   <p><b>Phone: ${data.phone}</b></p>
                   <p><b>Message</b></p>
                   <p>${data.message}</p>`,
        });
    }
};
