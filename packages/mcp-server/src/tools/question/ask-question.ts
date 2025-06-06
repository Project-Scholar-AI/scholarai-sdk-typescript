// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'question',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/question',
  operationId: 'api_question',
};

export const tool: Tool = {
  name: 'ask_question',
  description:
    'Uses embedding model to find section of PDF most relevant for answering a question\n:param pdf_url: the url\n:param question: the question\n:return: the chunk most relevant to answering that question and its source',
  inputSchema: {
    type: 'object',
    properties: {
      pdf_id: {
        type: 'string',
        description: 'id for PDF. Must begin with be one of `PDF_URL:some.url.com` or `PROJ:some_path`',
      },
      question: {
        type: 'string',
        description: 'The user question. Must be in English.',
      },
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.question.ask(body));
};

export default { metadata, tool, handler };
