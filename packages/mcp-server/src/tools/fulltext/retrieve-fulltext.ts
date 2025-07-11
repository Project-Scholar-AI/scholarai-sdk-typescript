// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scholarai-mcp/filtering';
import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'fulltext',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/fulltext',
  operationId: 'api_get_fulltext',
};

export const tool: Tool = {
  name: 'retrieve_fulltext',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the full text of an article by its pdf_url. May use a cached entry or read from other data sources before trying PDF parsing.\n:param pdf_url: the url of the pdf\n:param chunk: the chunk number to retrieve\n:return: the chunk of the full text requested with the page number and total number of pages\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/paper_content',\n  $defs: {\n    paper_content: {\n      type: 'object',\n      properties: {\n        chunks: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              chunk: {\n                type: 'string'\n              },\n              chunk_num: {\n                type: 'integer'\n              },\n              img_mds: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              pdf_url: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        hint: {\n          type: 'string'\n        },\n        total_chunk_num: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      pdf_id: {
        type: 'string',
        description: 'id for PDF. Must begin with be one of `PDF_URL:some.url.com` or `PROJ:some_path`',
      },
      chunk: {
        type: 'integer',
        description: 'chunk number to retrieve, defaults to 1',
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
  return asTextContentResult(await maybeFilter(args, await client.fulltext.retrieve(body)));
};

export default { metadata, tool, handler };
