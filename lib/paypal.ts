const base = process.env.PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com';

export const paypal = {};

// Genrate a new paypal access token
async function generateAccessToken() {
  const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env;

  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString(
    'base64'
  );

  if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
    throw new Error('PayPal client ID and secret are required');
  }

  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (response.ok) {
    const jsonData = await response.json();
    return jsonData.access_token;
  } else {
    throw new Error(`Failed to generate access token: ${response.statusText}`);
  }
}
