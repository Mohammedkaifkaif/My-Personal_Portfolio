import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: "https://portfolio-frontend-9yy6.onrender.com",
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Root test route
app.get("/", (_req: Request, res: Response) => {
  res.send("🚀 Portfolio backend is running on Render!");
});

// ✅ CV download endpoint
app.get("/api/download-cv", (_req: Request, res: Response) => {
  const downloadUrl = "https://raw.githubusercontent.com/Mohammedkaifkaif/My_Portfolio/main/images/My_CV%20(1)%205.docx";
  res.json({
    success: true,
    downloadUrl,
    message: "CV download link generated"
  });
});

// ✅ Contact form POST endpoint
app.post("/api/contact", (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  console.log("Received contact form submission:", { name, email, message });

  // Simulate success (in real-world, you'd send an email or store it)
  res.json({ success: true, message: "Message received successfully!" });
});

// ✅ Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
