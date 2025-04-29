export async function getBackend() {
  if (import.meta.env.MODE === "development") {
    try {
      const module = await import(
        "../../../declarations/icp_portfolio_backend"
      );
      return module.icp_portfolio_backend;
    } catch (e) {
      console.warn("⚠️ Could not import backend in dev mode:", e);
    }
  }

  console.warn("⚠️ Backend not available in this environment.");
  return {
    submit: async () => "Backend unavailable in this environment.",
  };
}
