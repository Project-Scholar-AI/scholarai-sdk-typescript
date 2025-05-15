// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SaveCitation extends APIResource {
  /**
   * Saves a citation to the user's citation manager
   */
  retrieve(
    query: SaveCitationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SaveCitationRetrieveResponse> {
    return this._client.get('/api/save-citation', { query, ...options });
  }
}

export interface SaveCitationRetrieveResponse {
  /**
   * Confirmation of successful save or error message.
   */
  message?: string;
}

export interface SaveCitationRetrieveParams {
  /**
   * Digital Object Identifier (DOI) of the article
   */
  doi: string;

  /**
   * Zotero API Key
   */
  zotero_api_key: string;

  /**
   * Zotero User ID
   */
  zotero_user_id: string;
}

export declare namespace SaveCitation {
  export {
    type SaveCitationRetrieveResponse as SaveCitationRetrieveResponse,
    type SaveCitationRetrieveParams as SaveCitationRetrieveParams,
  };
}
