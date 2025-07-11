// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scholarai-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet relevant patents by searching 2-6 relevant keywords.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/paper_metadata'\n  },\n  $defs: {\n    paper_metadata: {\n      type: 'object',\n      properties: {\n        abstract: {\n          type: 'string',\n          description: 'The abstract of this paper. Agentic endpoints may not have this entry.'\n        },\n        answer: {\n          type: 'string',\n          description: 'Answer to the user query based on the information from this paper. Only available if generative_mode is set to true.'\n        },\n        authors: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        cited_by_count: {\n          type: 'integer'\n        },\n        doi: {\n          type: 'string',\n          description: 'Digital Object Identifier'\n        },\n        publication_date: {\n          type: 'string'\n        },\n        ss_id: {\n          type: 'string',\n          description: 'Semantic Scholar ID'\n        },\n        title: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.patents.list(body)));
};

export default { metadata, tool, handler };
