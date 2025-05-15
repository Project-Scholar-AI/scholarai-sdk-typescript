// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class CreateProject extends APIResource {
  /**
   * Creates a project using query params
   */
  create(params: CreateProjectCreateParams, options?: RequestOptions): APIPromise<void> {
    const { project_name } = params;
    return this._client.post('/api/create_project', {
      query: { project_name },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CreateProjectCreateParams {
  /**
   * Desired name for the project
   */
  project_name: string;
}

export declare namespace CreateProject {
  export { type CreateProjectCreateParams as CreateProjectCreateParams };
}
