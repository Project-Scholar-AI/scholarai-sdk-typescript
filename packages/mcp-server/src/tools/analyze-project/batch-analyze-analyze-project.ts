// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scholarai-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAccepts a project_name, and asks a question to every paper within. If no project is specified, uses a project named \"GPT\"\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    response: {\n      type: 'string',\n      description: 'A markdown string that must be repeated verbatim. NEVER summarize any part of the response, ALWAYS repeat it directly'\n    },\n    tool_hint: {\n      type: 'string',\n      description: 'A hint you MUST follow with regards to this response'\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.analyzeProject.batchAnalyze(body)));
};

export default { metadata, tool, handler };
