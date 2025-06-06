// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'add_to_project',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/add_to_project',
  operationId: 'post_api_add_to_project',
};

export const tool: Tool = {
  name: 'create_add_to_project',
  description:
    'Accept a PDF url or multipart form-data containing a file, and add it to the user\'s project in the database. If no project is specified, add it to a project named "GPT"',
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
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.addToProject.create(body));
};

export default { metadata, tool, handler };
