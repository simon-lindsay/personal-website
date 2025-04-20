let backend;

if (import.meta.env.MODE === "development") {
  try {
    backend = await import("../../../declarations/icp_portfolio_backend").then(
      (mod) => mod.icp_portfolio_backend
    );
  } catch (e) {
    console.warn("⚠️ Backend not available in dev mode:", e);
  }
}

export async function submitMessage(data) {
  if (backend) {
    return backend.submit(data);
  }

  return "Backend unavailable in this environment.";
}
