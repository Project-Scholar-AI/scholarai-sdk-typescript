// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Scholarai from 'scholarai';

const client = new Scholarai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource patents', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.patents.list({
      full_user_prompt: 'full_user_prompt',
      keywords: 'keywords',
      query: 'query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.patents.list({
      full_user_prompt: 'full_user_prompt',
      keywords: 'keywords',
      query: 'query',
      end_year: 'end_year',
      generative_mode: 'generative_mode',
      offset: 'offset',
      peer_reviewed_only: 'peer_reviewed_only',
      sort: 'sort',
      start_year: 'start_year',
    });
  });
});
