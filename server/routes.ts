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
      
      // Your Google Sheets Web App URL
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbx8_LkegbJrBddN5lnZP051calEnydIHjxWDwoKC3QG8ZhgcgIqjL7404RWTQ_MP1npsw/exec';
      
      // Create FormData for Google Sheets (matches your script format)
      const formData = new URLSearchParams();
      formData.append('name', contactData.name);
      formData.append('email', contactData.email);
      formData.append('message', contactData.message);
      formData.append('timestamp', new Date().toISOString());

      // Send data to Google Sheets
      const response = await fetch(googleSheetsUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: contactData.name,
    email: contactData.email,
    message: contactData.message,
    timestamp: new Date().toISOString()
  }),
 });

      if (response.ok) {
        res.json({ success: true, message: "Message sent successfully to Google Sheets!" });
      } else {
        console.error('Google Sheets response:', response.status, response.statusText);
        res.status(500).json({ success: false, message: "Failed to send message to Google Sheets" });
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
      downloadUrl: "https://raw.githubusercontent.com/Mohammedkaifkaif/My_Portfolio/main/images/My_CV%20(1)%205.docx",
      message: "CV download link generated"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
