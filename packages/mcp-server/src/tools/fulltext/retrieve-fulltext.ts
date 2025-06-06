// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    'Retrieves the full text of an article by its pdf_url. May use a cached entry or read from other data sources before trying PDF parsing.\n:param pdf_url: the url of the pdf\n:param chunk: the chunk number to retrieve\n:return: the chunk of the full text requested with the page number and total number of pages',
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
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.fulltext.retrieve(body));
};

export default { metadata, tool, handler };
