const nodemailer = require('nodemailer');

const mailer = () => {
  const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: 'jafetguerra@hotmail.com',
      pass: 'JHGF10876!',
    },
  });

  const mailOptions = {
    from: 'jafetguerra@hotmail.com',
    to: 'adm@cayama.com.br',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<p>Olá, tudo bem?</p>',
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = mailer;
