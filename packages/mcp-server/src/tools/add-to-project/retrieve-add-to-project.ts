// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scholarai-mcp/filtering';
import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'add_to_project',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/add_to_project',
  operationId: 'get_api_add_to_project',
};

export const tool: Tool = {
  name: 'retrieve_add_to_project',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAccept a PDF url or multipart form-data containing a file, and add it to the user's project in the database. If no project is specified, add it to a project named \"GPT\"\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/paper_metadata'\n  },\n  $defs: {\n    paper_metadata: {\n      type: 'object',\n      properties: {\n        abstract: {\n          type: 'string',\n          description: 'The abstract of this paper. Agentic endpoints may not have this entry.'\n        },\n        answer: {\n          type: 'string',\n          description: 'Answer to the user query based on the information from this paper. Only available if generative_mode is set to true.'\n        },\n        authors: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        cited_by_count: {\n          type: 'integer'\n        },\n        doi: {\n          type: 'string',\n          description: 'Digital Object Identifier'\n        },\n        publication_date: {\n          type: 'string'\n        },\n        ss_id: {\n          type: 'string',\n          description: 'Semantic Scholar ID'\n        },\n        title: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      paper_id: {
        type: 'string',
        description:
          'Identifier of the paper to add, must be of the format <identifier_type>:<identifier_value>. Identifier type can be one of DOI, PMID, SS_ID, ARXIV, MAG, ACL, or PMCID.',
      },
      project_id: {
        type: 'string',
        description: "The project ID to which the items are being added. Default to 'gpt'",
      },
      project_name: {
        type: 'string',
        description: 'The project name to which the items are being added. Alternative to project_id',
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
  return asTextContentResult(await maybeFilter(args, await client.addToProject.retrieve(body)));
};

export default { metadata, tool, handler };
