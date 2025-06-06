// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'patents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/patents',
  operationId: 'searchPatents',
};

export const tool: Tool = {
  name: 'list_patents',
  description: 'Get relevant patents by searching 2-6 relevant keywords.',
  inputSchema: {
    type: 'object',
    properties: {
      full_user_prompt: {
        type: 'string',
        description: 'The entirety of the user request, directly quoted.',
      },
      keywords: {
        type: 'string',
        description: 'Keywords of inquiry which should appear in article. Must be in English.',
      },
      query: {
        type: 'string',
        description:
          'The user query. If the user asks for a specific patent, you MUST hit the API using escaped quotation marks',
      },
      end_year: {
        type: 'string',
        description:
          'The last year, inclusive, to include in the search range. Excluding this value will include all years.',
      },
      generative_mode: {
        type: 'string',
        description:
          'Boolean "true" or "false" to enable generative mode. If enabled, collate responses using markdown to render in-text citations to the source\'s url if available. Set this to true by default.',
      },
      offset: {
        type: 'string',
        description: 'The offset of the first result to return. Defaults to 0.',
      },
      peer_reviewed_only: {
        type: 'string',
        description:
          'Whether to only return peer reviewed articles. Defaults to true, ChatGPT should cautiously suggest this value can be set to false',
      },
      sort: {
        type: 'string',
        description:
          'The sort order for results. Valid values are relevance, cited_by_count, publication_date. Defaults to relevance.',
      },
      start_year: {
        type: 'string',
        description:
          'The first year, inclusive, to include in the search range. Excluding this value will include all years.',
      },
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.patents.list(body));
};

export default { metadata, tool, handler };
