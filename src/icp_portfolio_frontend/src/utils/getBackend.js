export async function getBackend() {
  try {
    const module = await import("../../../declarations/icp_portfolio_backend");
    return module.icp_portfolio_backend;
  } catch (e) {
    console.warn("⚠️ Backend not available in this environment.");
    return {
      submit: async () => "Backend unavailable in this environment.",
    };
  }
}
