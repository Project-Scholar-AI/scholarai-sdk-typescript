// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'create_project',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/create_project',
  operationId: 'api_create_project',
};

export const tool: Tool = {
  name: 'create_create_project',
  description: 'Creates a project using query params',
  inputSchema: {
    type: 'object',
    properties: {
      project_name: {
        type: 'string',
        description: 'Desired name for the project',
      },
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.createProject.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
