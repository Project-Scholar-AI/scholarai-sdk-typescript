// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'save_citation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/save-citation',
  operationId: 'api_save_citation',
};

export const tool: Tool = {
  name: 'retrieve_save_citation',
  description: "Saves a citation to the user's citation manager",
  inputSchema: {
    type: 'object',
    properties: {
      doi: {
        type: 'string',
        description: 'Digital Object Identifier (DOI) of the article',
      },
      zotero_api_key: {
        type: 'string',
        description: 'Zotero API Key',
      },
      zotero_user_id: {
        type: 'string',
        description: 'Zotero User ID',
      },
    },
  },
};

export const handler = (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.saveCitation.retrieve(body);
};

export default { metadata, tool, handler };
