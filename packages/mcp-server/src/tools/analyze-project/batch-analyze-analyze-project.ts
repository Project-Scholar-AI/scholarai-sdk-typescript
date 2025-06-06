// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scholarai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Scholarai from 'scholarai';

export const metadata: Metadata = {
  resource: 'analyze_project',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/analyze_project',
  operationId: 'api_analyze_project',
};

export const tool: Tool = {
  name: 'batch_analyze_analyze_project',
  description:
    'Accepts a project_name, and asks a question to every paper within. If no project is specified, uses a project named "GPT"',
  inputSchema: {
    type: 'object',
    properties: {
      analysis_mode: {
        type: 'string',
        description: "The mode of analysis, options are 'comprehensive' and 'tabular'. Default to `tabular`.",
      },
      project_name: {
        type: 'string',
        description: 'The name of the project to analyze.',
      },
      question: {
        type: 'array',
        description: 'Questions to analyze within the project.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Scholarai, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.analyzeProject.batchAnalyze(body));
};

export default { metadata, tool, handler };
