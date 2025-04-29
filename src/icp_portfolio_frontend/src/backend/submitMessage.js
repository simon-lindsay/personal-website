let submitMessage;

(async () => {
  if (import.meta.env.MODE === "development") {
    const mod = await import("./submitMessage.dev.js");
    submitMessage = mod.submitMessage;
  } else {
    const mod = await import("./submitMessage.prod.js");
    submitMessage = mod.submitMessage;
  }
})();

export { submitMessage };
