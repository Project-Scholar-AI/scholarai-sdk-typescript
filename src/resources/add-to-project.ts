// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AbstractsAPI from './abstracts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddToProject extends APIResource {
  /**
   * Accept a PDF url or multipart form-data containing a file, and add it to the
   * user's project in the database. If no project is specified, add it to a project
   * named "GPT"
   */
  create(params: AddToProjectCreateParams, options?: RequestOptions): APIPromise<AddToProjectCreateResponse> {
    const { paper_id, project_id, project_name } = params;
    return this._client.post('/api/add_to_project', {
      query: { paper_id, project_id, project_name },
      ...options,
    });
  }

  /**
   * Accept a PDF url or multipart form-data containing a file, and add it to the
   * user's project in the database. If no project is specified, add it to a project
   * named "GPT"
   */
  retrieve(
    query: AddToProjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AddToProjectRetrieveResponse> {
    return this._client.get('/api/add_to_project', { query, ...options });
  }
}

export type AddToProjectCreateResponse = Array<AbstractsAPI.PaperMetadata>;

export type AddToProjectRetrieveResponse = Array<AbstractsAPI.PaperMetadata>;

export interface AddToProjectCreateParams {
  /**
   * Identifier of the paper to add, must be of the format
   * <identifier_type>:<identifier_value>. Identifier type can be one of DOI, PMID,
   * SS_ID, ARXIV, MAG, ACL, or PMCID.
   */
  paper_id: string;

  /**
   * The project ID to which the items are being added. Default to 'gpt'
   */
  project_id?: string;

  /**
   * The project name to which the items are being added. Alternative to project_id
   */
  project_name?: string;
}

export interface AddToProjectRetrieveParams {
  /**
   * Identifier of the paper to add, must be of the format
   * <identifier_type>:<identifier_value>. Identifier type can be one of DOI, PMID,
   * SS_ID, ARXIV, MAG, ACL, or PMCID.
   */
  paper_id: string;

  /**
   * The project ID to which the items are being added. Default to 'gpt'
   */
  project_id?: string;

  /**
   * The project name to which the items are being added. Alternative to project_id
   */
  project_name?: string;
}

export declare namespace AddToProject {
  export {
    type AddToProjectCreateResponse as AddToProjectCreateResponse,
    type AddToProjectRetrieveResponse as AddToProjectRetrieveResponse,
    type AddToProjectCreateParams as AddToProjectCreateParams,
    type AddToProjectRetrieveParams as AddToProjectRetrieveParams,
  };
}
