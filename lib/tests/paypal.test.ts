import { generateAccessToken, paypal } from '../paypal';

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

// Test to create PAyPal order
describe('PayPal Order Creation', () => {
  it('should create a PayPAl order', async () => {
    generateAccessToken();
    const price = 10.0;

    const orderResponse = await paypal.createOrder(price);
    console.log(`PayPal Order Response: ${JSON.stringify(orderResponse)}`);
    expect(orderResponse).toBeDefined();
    expect(orderResponse.id).toBeDefined();
    expect(orderResponse.status).toBe('CREATED');
    expect(orderResponse.links).toBeDefined();
    expect(orderResponse.links.length).toBeGreaterThan(0);
  });
});

// Test to capture payments with mock order
describe('PayPal Order Capture', () => {
  it('should capture a PayPal order', async () => {
    const mockOrderId = '100';
    const mockCapturePayments = jest
      .spyOn(paypal, 'capturePayment')
      .mockResolvedValue({
        status: 'COMPLETED',
      });
    const captureResponse = await paypal.capturePayment(mockOrderId);

    console.log(`PayPal Capture Response: ${JSON.stringify(captureResponse)}`);
    expect(captureResponse).toHaveProperty('status', 'COMPLETED');

    mockCapturePayments.mockRestore();
  });
});
