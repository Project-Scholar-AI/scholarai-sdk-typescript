// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Scholarai from 'scholarai';

const client = new Scholarai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analyzeProject', () => {
  // skipped: tests are disabled for the time being
  test.skip('batchAnalyze: only required params', async () => {
    const responsePromise = client.analyzeProject.batchAnalyze({
      analysis_mode: 'analysis_mode',
      project_name: 'project_name',
      question: ['string'],
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
  test.skip('batchAnalyze: required and optional params', async () => {
    const response = await client.analyzeProject.batchAnalyze({
      analysis_mode: 'analysis_mode',
      project_name: 'project_name',
      question: ['string'],
    });
  });
});
