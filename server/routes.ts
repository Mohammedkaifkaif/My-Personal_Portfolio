import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, message: "Message sent successfully!", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to send message" });
      }
    }
  });

  // Download CV endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real application, this would serve the actual CV file
    res.json({ 
      success: true, 
      downloadUrl: "https://mohammedkaifkaif.github.io/My-Personal-Portfolio-Website/images/My_CV%20(2)%205.docx",
      message: "CV download link generated"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
