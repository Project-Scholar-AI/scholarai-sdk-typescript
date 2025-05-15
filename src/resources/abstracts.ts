// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Abstracts extends APIResource {
  /**
   * Retrieves relevant abstracts and paper metadata by a search. Generates an answer
   * using LLMs if generative_mode is set to true. For an API meant for faster and
   * more replete data retrieval, use /api/fast_paper_search
   */
  search(query: AbstractSearchParams, options?: RequestOptions): APIPromise<AbstractSearchResponse> {
    return this._client.get('/api/abstracts', { query, ...options });
  }
}

export interface PaperMetadata {
  /**
   * The abstract of this paper. Agentic endpoints may not have this entry.
   */
  abstract?: string;

  /**
   * Answer to the user query based on the information from this paper. Only
   * available if generative_mode is set to true.
   */
  answer?: string;

  authors?: Array<string>;

  cited_by_count?: number;

  /**
   * Digital Object Identifier
   */
  doi?: string;

  publication_date?: string;

  /**
   * Semantic Scholar ID
   */
  ss_id?: string;

  title?: string;

  url?: string;
}

export type AbstractSearchResponse = Array<PaperMetadata>;

export interface AbstractSearchParams {
  /**
   * Keywords of inquiry which should appear in the article. Must be in English.
   */
  keywords: string;

  /**
   * The user query, as a natural language question. E.g. 'Tell me about recent drugs
   * for cancer treatment'
   */
  query: string;

  /**
   * The last year, inclusive, to include in the search range. Excluding this value
   * will include all years.
   */
  end_year?: number;

  /**
   * Boolean "true" or "false" to enable generative mode. If enabled, collate
   * responses using markdown to render in-text citations to the source's url if
   * available. Set this to true by default.
   */
  generative_mode?: boolean;

  /**
   * The offset of the first result to return. Defaults to 0.
   */
  offset?: number;

  /**
   * Whether to only return peer-reviewed articles. Defaults to true, ChatGPT should
   * cautiously suggest this value can be set to false
   */
  peer_reviewed_only?: boolean;

  /**
   * The sort order for results. Valid values are relevance, cited_by_count,
   * publication_date. Defaults to relevance.
   */
  sort?: string;

  /**
   * The first year, inclusive, to include in the search range. Excluding this value
   * will include all years.
   */
  start_year?: number;
}

export declare namespace Abstracts {
  export {
    type PaperMetadata as PaperMetadata,
    type AbstractSearchResponse as AbstractSearchResponse,
    type AbstractSearchParams as AbstractSearchParams,
  };
}
