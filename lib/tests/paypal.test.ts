import { generateAccessToken } from '../paypal';

// Test to generate access token for PayPAl
describe('PayPal Access Token Generation', () => {
  it('should generate a valid access token', async () => {
    const token = await generateAccessToken();
    console.log(`Generated PayPal Access Token: ${token}`);
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });
});
