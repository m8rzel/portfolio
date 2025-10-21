// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message?: string;
  error?: string;
};

// TODO: Set your Google reCAPTCHA Secret Key here
// Get it from: https://www.google.com/recaptcha/admin
const RECAPTCHA_SECRET_KEY = 'YOUR_RECAPTCHA_SECRET_KEY_HERE';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return res.status(400).json({
        success: false,
        error: 'reCAPTCHA token is missing'
      });
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({
        success: false,
        error: 'reCAPTCHA verification failed'
      });
    }

    // TODO: Here you would typically:
    // 1. Send an email using a service like SendGrid, Nodemailer, etc.
    // 2. Store the message in a database
    // 3. Send a notification
    
    // For now, we'll just return a success response (dummy response)
    console.log('Contact form submission:', { name, email, message });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request'
    });
  }
}
