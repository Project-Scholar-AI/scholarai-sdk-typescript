// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'abstracts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/abstracts',
  operationId: 'api_get_abstract',
};

export const tool: Tool = {
  name: 'search_abstracts',
  description:
    'Retrieves relevant abstracts and paper metadata by a search. Generates an answer using LLMs if generative_mode is set to true.\nFor an API meant for faster and more replete data retrieval, use /api/fast_paper_search',
  inputSchema: {
    type: 'object',
    properties: {
      keywords: {
        type: 'string',
        description: 'Keywords of inquiry which should appear in the article. Must be in English.',
      },
      query: {
        type: 'string',
        description:
          "The user query, as a natural language question. E.g. 'Tell me about recent drugs for cancer treatment'",
      },
      end_year: {
        type: 'integer',
        description:
          'The last year, inclusive, to include in the search range. Excluding this value will include all years.',
      },
      generative_mode: {
        type: 'boolean',
        description:
          'Boolean "true" or "false" to enable generative mode. If enabled, collate responses using markdown to render in-text citations to the source\'s url if available. Set this to true by default.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of the first result to return. Defaults to 0.',
      },
      peer_reviewed_only: {
        type: 'boolean',
        description:
          'Whether to only return peer-reviewed articles. Defaults to true, ChatGPT should cautiously suggest this value can be set to false',
      },
      sort: {
        type: 'string',
        description:
          'The sort order for results. Valid values are relevance, cited_by_count, publication_date. Defaults to relevance.',
      },
      start_year: {
        type: 'integer',
        description:
          'The first year, inclusive, to include in the search range. Excluding this value will include all years.',
      },
    },
  },
};

export const handler = (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.abstracts.search(body);
};

export default { metadata, tool, handler };
