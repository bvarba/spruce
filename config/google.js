var client_id = process.env.g_client_id || '977873307903-bpjrfdup4h8e88nrrjoib39j9h002o7m.apps.googleusercontent.com',
	client_secret = process.env.g_client_secret || 'OSqMXvVzsmkxJJBiTmdkwiRt',
    redirect_uri = process.env.g_redirect_uri || 'http://localhost/account/oauth/google',
    auth_url = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=' + redirect_uri + '&scope=profile%20email&client_id=' + client_id

module.exports = {
		client_id: client_id,
		client_secret: client_secret,
		auth_url: auth_url,
		redirect_uri: redirect_uri
};

