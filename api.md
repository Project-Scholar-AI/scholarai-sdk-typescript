# Chat

Methods:

- <code title="post /api/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> void</code>

# Fulltext

Types:

- <code><a href="./src/resources/fulltext.ts">PaperContent</a></code>

Methods:

- <code title="get /api/fulltext">client.fulltext.<a href="./src/resources/fulltext.ts">retrieve</a>({ ...params }) -> PaperContent</code>

# Question

Methods:

- <code title="get /api/question">client.question.<a href="./src/resources/question.ts">ask</a>({ ...params }) -> PaperContent</code>

# Abstracts

Types:

- <code><a href="./src/resources/abstracts.ts">PaperMetadata</a></code>
- <code><a href="./src/resources/abstracts.ts">AbstractSearchResponse</a></code>

Methods:

- <code title="get /api/abstracts">client.abstracts.<a href="./src/resources/abstracts.ts">search</a>({ ...params }) -> AbstractSearchResponse</code>

# Patents

Types:

- <code><a href="./src/resources/patents.ts">PatentListResponse</a></code>

Methods:

- <code title="get /api/patents">client.patents.<a href="./src/resources/patents.ts">list</a>({ ...params }) -> PatentListResponse</code>

# SaveCitation

Types:

- <code><a href="./src/resources/save-citation.ts">SaveCitationRetrieveResponse</a></code>

Methods:

- <code title="get /api/save-citation">client.saveCitation.<a href="./src/resources/save-citation.ts">retrieve</a>({ ...params }) -> SaveCitationRetrieveResponse</code>

# AddToProject

Types:

- <code><a href="./src/resources/add-to-project.ts">AddToProjectCreateResponse</a></code>
- <code><a href="./src/resources/add-to-project.ts">AddToProjectRetrieveResponse</a></code>

Methods:

- <code title="post /api/add_to_project">client.addToProject.<a href="./src/resources/add-to-project.ts">create</a>({ ...params }) -> AddToProjectCreateResponse</code>
- <code title="get /api/add_to_project">client.addToProject.<a href="./src/resources/add-to-project.ts">retrieve</a>({ ...params }) -> AddToProjectRetrieveResponse</code>

# CreateProject

Methods:

- <code title="post /api/create_project">client.createProject.<a href="./src/resources/create-project.ts">create</a>({ ...params }) -> void</code>

# AnalyzeProject

Types:

- <code><a href="./src/resources/analyze-project.ts">AnalyzeProjectBatchAnalyzeResponse</a></code>

Methods:

- <code title="get /api/analyze_project">client.analyzeProject.<a href="./src/resources/analyze-project.ts">batchAnalyze</a>({ ...params }) -> AnalyzeProjectBatchAnalyzeResponse</code>
