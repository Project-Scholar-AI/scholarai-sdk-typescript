// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Mimics the input and output to the OpenAI Chat Completion API:
   * https://platform.openai.com/docs/api-reference/chat/create
   */
  createCompletion(body: ChatCreateCompletionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/chat/completions', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChatCreateCompletionParams {
  messages?: Array<ChatCreateCompletionParams.Message>;

  /**
   * Model being used. Currently ignored and defaults to "scholarai" with GPT4-turbo
   */
  model?: string;

  /**
   * Whether or not to stream the response. Streaming is recommended!
   */
  stream?: boolean;
}

export namespace ChatCreateCompletionParams {
  export interface Message {
    /**
     * Content of the message. Must be a string.
     */
    content?: string;

    /**
     * Role of the message. Must be "user"
     */
    role?: string;
  }
}

export declare namespace Chat {
  export { type ChatCreateCompletionParams as ChatCreateCompletionParams };
}
