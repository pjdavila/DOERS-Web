import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve Spline files from attached_assets
  app.get("/api/spline/:filename", (req: Request, res: Response) => {
    const filename = req.params.filename;
    const filePath = path.resolve(`./attached_assets/${filename}`);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({
        message: "Spline file not found"
      });
    }
  });

  // API routes - prefix all routes with /api
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation failed",
          errors: validationError.details
        });
      }
      
      res.status(500).json({
        message: "An error occurred while submitting the contact form"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
