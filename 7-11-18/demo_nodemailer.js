var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khan.aasif1990@gmail.com',
    pass: 'haiderali1942'
  }
});


var mailOptions = {
	from: 'khan.aasif1990@gmail.com',
	to: 'khan.aasif13@gmail.com',
	subject: 'Sending Email using Node JS:',
	text:'That was Easy!'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});