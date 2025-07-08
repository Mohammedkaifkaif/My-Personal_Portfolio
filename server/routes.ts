import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Simple validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission to Google Sheets
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // Google Sheets Web App URL - User will need to provide this
      const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;
      
      if (!googleSheetsUrl) {
        return res.status(500).json({ 
          success: false, 
          message: "Google Sheets integration not configured" 
        });
      }

      // Send data to Google Sheets
      const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactData,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        res.json({ success: true, message: "Message sent successfully!" });
      } else {
        res.status(500).json({ success: false, message: "Failed to send message" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        console.error('Contact form error:', error);
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
