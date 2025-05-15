// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AnalyzeProject extends APIResource {
  /**
   * Accepts a project_name, and asks a question to every paper within. If no project
   * is specified, uses a project named "GPT"
   */
  batchAnalyze(
    query: AnalyzeProjectBatchAnalyzeParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeProjectBatchAnalyzeResponse> {
    return this._client.get('/api/analyze_project', { query, ...options });
  }
}

export interface AnalyzeProjectBatchAnalyzeResponse {
  /**
   * A markdown string that must be repeated verbatim. NEVER summarize any part of
   * the response, ALWAYS repeat it directly
   */
  response?: string;

  /**
   * A hint you MUST follow with regards to this response
   */
  tool_hint?: string;
}

export interface AnalyzeProjectBatchAnalyzeParams {
  /**
   * The mode of analysis, options are 'comprehensive' and 'tabular'. Default to
   * `tabular`.
   */
  analysis_mode: string;

  /**
   * The name of the project to analyze.
   */
  project_name: string;

  /**
   * Questions to analyze within the project.
   */
  question: Array<string>;
}

export declare namespace AnalyzeProject {
  export {
    type AnalyzeProjectBatchAnalyzeResponse as AnalyzeProjectBatchAnalyzeResponse,
    type AnalyzeProjectBatchAnalyzeParams as AnalyzeProjectBatchAnalyzeParams,
  };
}
