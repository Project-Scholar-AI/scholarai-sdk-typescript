// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Scholarai } from '../client';

export abstract class APIResource {
  protected _client: Scholarai;

  constructor(client: Scholarai) {
    this._client = client;
  }
}
