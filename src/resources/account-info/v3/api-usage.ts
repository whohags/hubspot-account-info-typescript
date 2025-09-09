// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class APIUsage extends APIResource {
  /**
   * Get daily API usage
   */
  retrieveDaily(options?: RequestOptions): APIPromise<APIUsageRetrieveDailyResponse> {
    return this._client.get('/account-info/v3/api-usage/daily', options);
  }
}

export interface APIUsageRetrieveDailyResponse {
  results?: Array<APIUsageRetrieveDailyResponse.Result>;
}

export namespace APIUsageRetrieveDailyResponse {
  export interface Result {
    currentUsage?: number;

    name?: string;

    usageLimit?: number;
  }
}

export declare namespace APIUsage {
  export { type APIUsageRetrieveDailyResponse as APIUsageRetrieveDailyResponse };
}
