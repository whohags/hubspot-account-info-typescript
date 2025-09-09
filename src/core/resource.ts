// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { HubspotAccountInfo } from '../client';

export abstract class APIResource {
  protected _client: HubspotAccountInfo;

  constructor(client: HubspotAccountInfo) {
    this._client = client;
  }
}
