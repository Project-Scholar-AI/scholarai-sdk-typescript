// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_completion_chat from './chat/create-completion-chat';
import retrieve_fulltext from './fulltext/retrieve-fulltext';
import ask_question from './question/ask-question';
import search_abstracts from './abstracts/search-abstracts';
import list_patents from './patents/list-patents';
import retrieve_save_citation from './save-citation/retrieve-save-citation';
import create_add_to_project from './add-to-project/create-add-to-project';
import retrieve_add_to_project from './add-to-project/retrieve-add-to-project';
import create_create_project from './create-project/create-create-project';
import batch_analyze_analyze_project from './analyze-project/batch-analyze-analyze-project';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_completion_chat);
addEndpoint(retrieve_fulltext);
addEndpoint(ask_question);
addEndpoint(search_abstracts);
addEndpoint(list_patents);
addEndpoint(retrieve_save_citation);
addEndpoint(create_add_to_project);
addEndpoint(retrieve_add_to_project);
addEndpoint(create_create_project);
addEndpoint(batch_analyze_analyze_project);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
