// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AbstractsAPI from './abstracts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Patents extends APIResource {
  /**
   * Get relevant patents by searching 2-6 relevant keywords.
   */
  list(query: PatentListParams, options?: RequestOptions): APIPromise<PatentListResponse> {
    return this._client.get('/api/patents', { query, ...options });
  }
}

export type PatentListResponse = Array<AbstractsAPI.PaperMetadata>;

export interface PatentListParams {
  /**
   * The entirety of the user request, directly quoted.
   */
  full_user_prompt: string;

  /**
   * Keywords of inquiry which should appear in article. Must be in English.
   */
  keywords: string;

  /**
   * The user query. If the user asks for a specific patent, you MUST hit the API
   * using escaped quotation marks
   */
  query: string;

  /**
   * The last year, inclusive, to include in the search range. Excluding this value
   * will include all years.
   */
  end_year?: string;

  /**
   * Boolean "true" or "false" to enable generative mode. If enabled, collate
   * responses using markdown to render in-text citations to the source's url if
   * available. Set this to true by default.
   */
  generative_mode?: string;

  /**
   * The offset of the first result to return. Defaults to 0.
   */
  offset?: string;

  /**
   * Whether to only return peer reviewed articles. Defaults to true, ChatGPT should
   * cautiously suggest this value can be set to false
   */
  peer_reviewed_only?: string;

  /**
   * The sort order for results. Valid values are relevance, cited_by_count,
   * publication_date. Defaults to relevance.
   */
  sort?: string;

  /**
   * The first year, inclusive, to include in the search range. Excluding this value
   * will include all years.
   */
  start_year?: string;
}

export declare namespace Patents {
  export { type PatentListResponse as PatentListResponse, type PatentListParams as PatentListParams };
}
