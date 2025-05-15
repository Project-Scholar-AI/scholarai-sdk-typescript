// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_completion_chat',
  description:
    'Mimics the input and output to the OpenAI Chat Completion API: https://platform.openai.com/docs/api-reference/chat/create',
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
    },
  },
};

export const handler = (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.chat.createCompletion(body);
};

export default { metadata, tool, handler };
