const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jwald3@brockport.edu',
        subject: 'Thank you for joining us.',
        text: `Welcome to the task manager app, ${name}. Let me know how you get along with this service!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jwald3@brockport.edu',
        subject: 'Sorry to see you go!',
        text: `We hate to see you go, ${name}. We hope that you come back again someday!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}