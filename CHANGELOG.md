# Changelog

## 0.1.0-alpha.1 (2025-07-11)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([e1e5a91](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/e1e5a91a1b574537b2c81adf9168a286e1437b97))
* **mcp:** fallback for void-typed methods ([9bdd8d7](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/9bdd8d7d429f804f93abbd315758ff1ee87b609a))
* **mcp:** implement support for binary responses ([d96b41f](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/d96b41f49ddd22d3b44eada0dc7332164a5a6cbe))
* **mcp:** include http information in tools ([5f9aa70](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/5f9aa70b3e710cbf2e95953fbf589e799f5921f5))
* **mcp:** set X-Stainless-MCP header ([13bcd57](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/13bcd571ecc30a55cba23dfe3498af86e2c1d1ee))
* **mcp:** support filtering tool results by a jq expression ([630c341](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/630c34174de0afed9da6a7797a11cc74fa32daba))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([adc3b46](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/adc3b46901bb60d255dd82be164eea8356c4cbfe))
* **client:** explicitly copy fetch in withOptions ([df26d7b](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/df26d7be48b51267528a046996346d169580bb47))
* **client:** get fetchOptions type more reliably ([36430e4](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/36430e423fc4a409d13409c3d973cf3d27e5f3e5))
* compat with more runtimes ([8f2713e](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/8f2713e8643b887d3a56d833a643616a0557c185))
* **mcp:** fix cursor schema transformation issue with recursive references ([b3fb18d](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/b3fb18db4eeb40a54cc67b318ac385eb93c04a94))
* **mcp:** include description in dynamic tool search ([82ecc22](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/82ecc22c08775f6e25beb77235de7f6eb05ac4ac))
* **mcp:** relax input type for asTextContextResult ([b5b444d](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/b5b444d0afa1a1979963187b8f6863b49ca6e51c))
* publish script — handle NPM errors correctly ([3792fc2](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/3792fc2c43c9644a439e3836d8a403f26476643b))


### Chores

* add docs to RequestOptions type ([eee76a5](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/eee76a52f3a5d8861da28a87a00ceb96d9e9203e))
* adjust eslint.config.mjs ignore pattern ([2da00e6](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/2da00e6cee1720db9ec0f49ca2267fba46f48b1c))
* avoid type error in certain environments ([207f865](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/207f865a3a1916b7766d3a519a716ae58a3efab5))
* **ci:** enable for pull requests ([0855cdd](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/0855cdd5330e7630b364beb2a1f9e6b34706d010))
* **ci:** only run for pushes and fork pull requests ([963e632](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/963e6322046acdef9a3f59446befa22db6837f55))
* **client:** improve path param validation ([4449779](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/44497796f47918db493e4805ef1e5f4731b894f7))
* **client:** refactor imports ([bd84bf8](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/bd84bf86625fe11f48a71fc2b8c93fc95b75e890))
* **deps:** bump eslint-plugin-prettier ([2f63460](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/2f6346012f819579845a50c26bfb9641a3b7eb72))
* **docs:** grammar improvements ([02105b7](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/02105b73effe401c720d04dcbd26121583a54b82))
* **docs:** use top-level-await in example snippets ([c43f464](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/c43f4647deb6efb37a55ee60e77f3f06579f7925))
* improve publish-npm script --latest tag logic ([90f63e5](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/90f63e54c02e2fb3a5f3ee200f740dd752c2799d))
* **internal:** add pure annotations, make base APIResource abstract ([1e7f9ba](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/1e7f9baf57e6f6ab73b7c4367e1e977b9d059cb3))
* **internal:** codegen related update ([88ae181](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/88ae1819d2ab3e5de7a165620cb06ad13fc3009c))
* **internal:** fix readablestream types in node 20 ([e6eec92](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/e6eec920f166fb137376002efb16bafb400d7599))
* **internal:** update jest config ([d1af771](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/d1af7719300771c03d0ede8026952e00379e6a21))
* make some internal functions async ([f103167](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/f103167f6d85c1e76c038f7b74deee650ba66596))
* **mcp:** provides high-level initMcpServer function and exports known clients ([3a4e3f5](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/3a4e3f564d4c1fea4d8ac2a176ad40b847c90262))
* **mcp:** remove duplicate assignment ([60b3b40](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/60b3b40842dfadad455cf9abba02f845323276a2))
* **readme:** update badges ([7874cc9](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/7874cc915fc0cce807a869f03bfc4e22ae901242))
* **readme:** use better example snippet for undocumented params ([65fe075](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/65fe0756ea0f1025773863551d7c557f956ddd0f))

## 0.0.1-alpha.1 (2025-05-15)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([0abff2c](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/0abff2c3dbd6a674108d8a2b07768d0e2cfc74ae))
* update SDK settings ([16fd6e1](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/16fd6e18327422e34bf66b56dbc6a1762c0cc752))
* update SDK settings ([be3f305](https://github.com/Project-Scholar-AI/scholarai-sdk-typescript/commit/be3f3050521e31d4c1b1c795e8ef637031484311))
