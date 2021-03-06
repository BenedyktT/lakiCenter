module.exports = credentials = {
	type: "service_account",
	project_id: "lakiconnect",
	private_key_id: process.env.private_key_id_calendar,
	private_key: process.env.private_key_calendar,
	client_email: "calendarconnect@lakiconnect.iam.gserviceaccount.com",
	client_id: process.env.client_id_calendar,
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/calendarconnect%40lakiconnect.iam.gserviceaccount.com"
};
