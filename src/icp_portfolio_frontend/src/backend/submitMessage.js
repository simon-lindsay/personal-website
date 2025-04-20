export async function submitMessage(data) {
  if (import.meta.env.MODE === "development") {
    try {
      const module = await import(
        "../../../declarations/icp_portfolio_backend"
      );
      const backend = module.icp_portfolio_backend;
      return backend.submit(data);
    } catch (e) {
      console.warn("Backend not available in dev mode:", e);
    }
  }

  return "Backend unavailable in this environment.";
}
