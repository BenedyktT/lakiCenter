module.exports = getPasswordResetURL = (user, token) =>
	`http://localhost:5000/password/reset/${user._id}/${token}`;

module.exports = resetPasswordTemplate = (user, url) => {
	const from = process.env.EMAIL_LOGIN;
	const to = user.email;
	const subject = "Hotel Laki availability app password reset";
	const html = `
  <p>Hey ${user.email},</p>
  
 <p>You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>–Your friends at Hotel Laki</p>
  `;

	return { from, to, subject, html };
};
