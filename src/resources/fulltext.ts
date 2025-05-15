// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Fulltext extends APIResource {
  /**
   * Retrieves the full text of an article by its pdf_url. May use a cached entry or
   * read from other data sources before trying PDF parsing. :param pdf_url: the url
   * of the pdf :param chunk: the chunk number to retrieve :return: the chunk of the
   * full text requested with the page number and total number of pages
   */
  retrieve(query: FulltextRetrieveParams, options?: RequestOptions): APIPromise<PaperContent> {
    return this._client.get('/api/fulltext', { query, ...options });
  }
}

export interface PaperContent {
  chunks?: Array<PaperContent.Chunk>;

  hint?: string;

  total_chunk_num?: number;
}

export namespace PaperContent {
  export interface Chunk {
    chunk?: string;

    chunk_num?: number;

    img_mds?: Array<string>;

    pdf_url?: string;
  }
}

export interface FulltextRetrieveParams {
  /**
   * id for PDF. Must begin with be one of `PDF_URL:some.url.com` or `PROJ:some_path`
   */
  pdf_id: string;

  /**
   * chunk number to retrieve, defaults to 1
   */
  chunk?: number;
}

export declare namespace Fulltext {
  export { type PaperContent as PaperContent, type FulltextRetrieveParams as FulltextRetrieveParams };
}
