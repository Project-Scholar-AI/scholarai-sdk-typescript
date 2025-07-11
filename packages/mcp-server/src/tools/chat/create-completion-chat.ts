// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/chat/completions',
  operationId: 'api_chat_completions',
};

export const tool: Tool = {
  name: 'create_completion_chat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMimics the input and output to the OpenAI Chat Completion API: https://platform.openai.com/docs/api-reference/chat/create\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      messages: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            content: {
              type: 'string',
              description: 'Content of the message. Must be a string.',
            },
            role: {
              type: 'string',
              description: 'Role of the message. Must be "user"',
            },
          },
          required: [],
        },
      },
      model: {
        type: 'string',
        description: 'Model being used. Currently ignored and defaults to "scholarai" with GPT4-turbo',
      },
      stream: {
        type: 'boolean',
        description: 'Whether or not to stream the response. Streaming is recommended!',
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
  const response = await client.chat.createCompletion(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
