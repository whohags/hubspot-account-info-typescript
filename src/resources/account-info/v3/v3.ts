// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIUsageAPI from './api-usage';
import { APIUsage, APIUsageRetrieveDailyResponse } from './api-usage';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V3 extends APIResource {
  apiUsage: APIUsageAPI.APIUsage = new APIUsageAPI.APIUsage(this._client);

  /**
   * Get account details
   */
  retrieveDetails(options?: RequestOptions): APIPromise<V3RetrieveDetailsResponse> {
    return this._client.get('/account-info/v3/details', options);
  }
}

export interface V3RetrieveDetailsResponse {
  companyCurrency?: string;

  portalId?: number;

  timeZone?: string;
}

V3.APIUsage = APIUsage;

export declare namespace V3 {
  export { type V3RetrieveDetailsResponse as V3RetrieveDetailsResponse };

  export { APIUsage as APIUsage, type APIUsageRetrieveDailyResponse as APIUsageRetrieveDailyResponse };
}
