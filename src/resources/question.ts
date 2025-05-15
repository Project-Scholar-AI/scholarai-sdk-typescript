// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FulltextAPI from './fulltext';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Question extends APIResource {
  /**
   * Uses embedding model to find section of PDF most relevant for answering a
   * question :param pdf_url: the url :param question: the question :return: the
   * chunk most relevant to answering that question and its source
   */
  ask(query: QuestionAskParams, options?: RequestOptions): APIPromise<FulltextAPI.PaperContent> {
    return this._client.get('/api/question', { query, ...options });
  }
}

export interface QuestionAskParams {
  /**
   * id for PDF. Must begin with be one of `PDF_URL:some.url.com` or `PROJ:some_path`
   */
  pdf_id: string;

  /**
   * The user question. Must be in English.
   */
  question: string;
}

export declare namespace Question {
  export { type QuestionAskParams as QuestionAskParams };
}
