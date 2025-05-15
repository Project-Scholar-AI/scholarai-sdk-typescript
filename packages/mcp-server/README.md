# Scholarai TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/scholarai-typescript.git
cd scholarai-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export SCHOLARAI_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y scholarai-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "scholarai_api": {
      "command": "node",
      "args": ["/path/to/local/scholarai-typescript/packages/mcp-server", "--client=claude", "--tools=all"],
      "env": {
        "SCHOLARAI_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "scholarai-mcp/server";

// import a specific tool
import createCompletionChat from "scholarai-mcp/tools/chat/create-completion-chat";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createCompletionChat, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `chat`:

- `create_completion_chat` (`write`): Mimics the input and output to the OpenAI Chat Completion API: https://platform.openai.com/docs/api-reference/chat/create

### Resource `fulltext`:

- `retrieve_fulltext` (`read`): Retrieves the full text of an article by its pdf_url. May use a cached entry or read from other data sources before trying PDF parsing.
  :param pdf_url: the url of the pdf
  :param chunk: the chunk number to retrieve
  :return: the chunk of the full text requested with the page number and total number of pages

### Resource `question`:

- `ask_question` (`read`): Uses embedding model to find section of PDF most relevant for answering a question
  :param pdf_url: the url
  :param question: the question
  :return: the chunk most relevant to answering that question and its source

### Resource `abstracts`:

- `search_abstracts` (`read`): Retrieves relevant abstracts and paper metadata by a search. Generates an answer using LLMs if generative_mode is set to true.
  For an API meant for faster and more replete data retrieval, use /api/fast_paper_search

### Resource `patents`:

- `list_patents` (`read`): Get relevant patents by searching 2-6 relevant keywords.

### Resource `save_citation`:

- `retrieve_save_citation` (`read`): Saves a citation to the user's citation manager

### Resource `add_to_project`:

- `create_add_to_project` (`write`): Accept a PDF url or multipart form-data containing a file, and add it to the user's project in the database. If no project is specified, add it to a project named "GPT"
- `retrieve_add_to_project` (`read`): Accept a PDF url or multipart form-data containing a file, and add it to the user's project in the database. If no project is specified, add it to a project named "GPT"

### Resource `create_project`:

- `create_create_project` (`write`): Creates a project using query params

### Resource `analyze_project`:

- `batch_analyze_analyze_project` (`read`): Accepts a project_name, and asks a question to every paper within. If no project is specified, uses a project named "GPT"
