// api/submit-form.ts
// This can be deployed as a Cloudflare Worker or Vercel Serverless Function

import { createClient } from '@supabase/supabase-js';

// Environment variables (set these in your hosting platform)
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;

interface FormData {
  name: string;
  email: string;
  phone: string;
  selectedServices: string[];
  message: string;
  consent: boolean;
  ageVerification: boolean;
}

// Rate limiting (simple in-memory, use Redis for production)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < 60000); // Last minute

  if (recentRequests.length >= 5) { // Max 5 requests per minute
    return true;
  }

  rateLimitMap.set(ip, [...recentRequests, now]);
  return false;
}

// Input validation
function validateFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Invalid email address');
  }

  const phoneRegex = /^[+]?[\d\s-()]+$/;
  if (!data.phone || !phoneRegex.test(data.phone) || data.phone.length < 10) {
    errors.push('Invalid phone number');
  }

  if (!Array.isArray(data.selectedServices) || data.selectedServices.length === 0) {
    errors.push('Please select at least one service');
  }

  if (!data.consent) {
    errors.push('Consent is required');
  }

  if (!data.ageVerification) {
    errors.push('Age verification is required');
  }

  return { valid: errors.length === 0, errors };
}

// Sanitize input
function sanitizeString(str: string): string {
  return str.trim().replace(/[<>]/g, '');
}

// Send email using Resend
async function sendAcknowledgmentEmail(data: FormData) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: '007Phere <noreply@007phere.com>',
        to: data.email,
        subject: 'Thank you for contacting 007Phere - Confidential Acknowledgment',
        html: `
          <div style="font-family: 'Source Serif 4', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #faf9ff;">
            <div style="background: white; padding: 40px; border-radius: 16px; border: 1px solid #d9d0ff;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #a78bfa; font-family: 'Playfair Display', serif; margin: 0;">007Phere</h1>
                <p style="color: #64748b; margin: 10px 0 0 0;">Matrimonial Support</p>
              </div>
              
              <h2 style="color: #1e293b; font-family: 'Playfair Display', serif;">Dear ${sanitizeString(data.name)},</h2>
              
              <p style="color: #64748b; line-height: 1.7;">
                Thank you for reaching out to 007Phere. We have received your confidential inquiry 
                and our team will review your request with the utmost discretion.
              </p>
              
              <div style="background: #f4f1ff; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #a78bfa;">
                <h3 style="color: #a78bfa; margin: 0 0 10px 0;">Your Submission Details:</h3>
                <p style="color: #64748b; margin: 5px 0;"><strong>Services of Interest:</strong> ${data.selectedServices.join(', ')}</p>
                <p style="color: #64748b; margin: 5px 0;"><strong>Contact Email:</strong> ${data.email}</p>
                <p style="color: #64748b; margin: 5px 0;"><strong>Contact Phone:</strong> ${data.phone}</p>
              </div>
              
              <p style="color: #64748b; line-height: 1.7;">
                <strong>What happens next?</strong><br>
                Our confidential support team will review your inquiry and reach out to you within 24-48 hours 
                via your preferred contact method. All communications are protected under our strict privacy protocols.
              </p>
              
              <div style="background: #ede8ff; padding: 15px; border-radius: 8px; margin: 25px 0;">
                <p style="color: #1e293b; margin: 0; font-size: 14px;">
                  🔒 <strong>Privacy Reminder:</strong> All information shared with 007Phere is confidential 
                  and protected. We never share your details with third parties.
                </p>
              </div>
              
              <p style="color: #64748b; line-height: 1.7;">
                If you have urgent concerns, please call our 24/7 confidential helpline at 
                <strong style="color: #a78bfa;">+91 98765 43210</strong>.
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #d9d0ff; text-align: center;">
                <p style="color: #64748b; margin: 0; font-size: 14px;">
                  <strong>007Phere</strong> - Love deserves protection<br>
                  Mumbai • Delhi • Bangalore<br>
                  <a href="https://007phere.com" style="color: #a78bfa;">www.007phere.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

// Admin notification email
async function sendAdminNotification(data: FormData) {
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: '007Phere System <admin@007phere.com>',
        to: 'hello@007phere.com', // Change to your admin email
        subject: `New Form Submission - ${data.name}`,
        html: `
          <h2>New Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizeString(data.name)}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Services:</strong> ${data.selectedServices.join(', ')}</p>
          <p><strong>Message:</strong> ${sanitizeString(data.message || 'N/A')}</p>
          <p><a href="https://007phere.com/admin">View in Dashboard</a></p>
        `,
      }),
    });
  } catch (error) {
    console.error('Admin notification failed:', error);
  }
}

// Main handler
export default async function handler(req: Request) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': 'https://007phere.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // Only accept POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers }
    );
  }

  try {
    // Rate limiting
    const ip = req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers }
      );
    }

    // Parse request body
    const data: FormData = await req.json();

    // Validate input
    const validation = validateFormData(data);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', errors: validation.errors }),
        { status: 400, headers }
      );
    }

    // Sanitize data
    const sanitizedData = {
      name: sanitizeString(data.name),
      email: data.email.toLowerCase().trim(),
      phone: data.phone.trim(),
      selected_services: data.selectedServices,
      message: data.message ? sanitizeString(data.message) : null,
      consent: data.consent,
      age_verification: data.ageVerification,
      ip_address: ip,
      user_agent: req.headers.get('user-agent') || 'unknown',
    };

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Insert into database
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert([sanitizedData])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission. Please try again.' }),
        { status: 500, headers }
      );
    }

    // Send emails (non-blocking)
    Promise.all([
      sendAcknowledgmentEmail(data),
      sendAdminNotification(data),
    ]).catch(err => console.error('Email error:', err));

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully. Check your email for confirmation.',
        submissionId: submission.id,
      }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Handler error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again.' }),
      { status: 500, headers }
    );
  }
}