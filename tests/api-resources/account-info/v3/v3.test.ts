// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotAccountInfo from 'hubspot-account-info';

const client = new HubspotAccountInfo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v3', () => {
  // Prism tests are disabled
  test.skip('retrieveDetails', async () => {
    const responsePromise = client.accountInfo.v3.retrieveDetails();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
