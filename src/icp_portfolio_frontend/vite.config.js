import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let canisterIds = {};

try {
  const localCanisters = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../../.dfx/local/canister_ids.json")
    )
  );
  canisterIds = localCanisters;
} catch (error) {
  console.warn(
    "Warning: Could not load canister IDs. Is the local replica running?",
    error
  );
}

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      VITE_BACKEND_CANISTER_ID: JSON.stringify(
        canisterIds.icp_portfolio_backend?.local ??
          "backend-canister-id-not-found"
      ),
    },
  },
  server: {
    port: 3000,
  },
});
