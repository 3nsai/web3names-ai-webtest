import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // This is where your test files are located

  timeout: 60000, 

  projects: [
    {
      name: "web3names",
      testDir: "./tests", // Ensure this is set to the 'tests' folder in the root
    },
  ],
});
