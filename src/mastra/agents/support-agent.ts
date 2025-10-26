import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
// import { weatherTool } from '../tools/weather-tool';

export const SupportAgent = new Agent({
  name: 'Support Agent',
  instructions: `
      You are a helpful assistant.
`,
  model: 'google/gemini-2.5-pro',
  // tools: { weatherTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db',
    }),
  }),
});
