/**
 * Google Sheets Integration Utility
 * 
 * 📚 COMPLETE SETUP GUIDE: See /GOOGLE_SHEETS_QUICK_SETUP.md
 * 
 * QUICK INSTRUCTIONS:
 * 1. Create 4 Google Sheets (one for each form type)
 * 2. For each sheet: Extensions > Apps Script
 * 3. Paste the Apps Script code (see setup guide)
 * 4. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 5. Copy each Web App URL
 * 6. Replace the placeholder URLs below with your actual URLs
 * 
 * ⚠️ IMPORTANT: You need 4 separate Web App URLs:
 *    - TPO Registration Sheet URL
 *    - Industry Registration Sheet URL
 *    - Student Registration Sheet URL
 *    - Contact Form Sheet URL
 */

// Replace these with your Google Apps Script Web App URLs
const GOOGLE_SHEETS_URLS = {
  tpo: 'https://script.google.com/macros/s/AKfycbzF9prrWw1HR3-WJA498D9jMcjlhzBxrqx5Iodzsy_S0_EKzfHp8OrjPM69HsTJMrO2/exec',
  industry: 'https://script.google.com/macros/s/AKfycbxGGqmqwKTeHr4FkSpXB8VJqTc0c7zs8tcDQzIVEOaIghsv1qT4sLRlGM2B2Cz340e-/exec',
  student: 'https://script.google.com/macros/s/AKfycbxL7hCl2AQ_H8TksgW-8_gqDcs-JtmXVb1Mdvv2O7TPxPNltc2Rx-21lJt1FBkPQjNNRw/exec',
  contact: 'https://script.google.com/macros/s/AKfycbxXq8RlPMq8BH4vyiHnBR-Owhjg6l9qPQom48jKiOde3tk9dm8cP7jObF6VoJbfTPsXOA/exec'
};

export async function submitToGoogleSheets(
  formType: 'tpo' | 'industry' | 'student' | 'contact',
  data: Record<string, any>
): Promise<{ success: boolean; message: string }> {
  const url = GOOGLE_SHEETS_URLS[formType];
  
  // If URL is not configured, show a warning but don't fail
  if (url.includes('YOUR_') || url.includes('_HERE')) {
    console.warn(`Google Sheets URL for ${formType} is not configured. Data:`, data);
    return {
      success: true,
      message: 'Form submitted successfully (Google Sheets not configured)'
    };
  }

  try {
    // Add timestamp
    const submissionData = {
      ...data,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    });

    // Note: With no-cors mode, we can't read the response
    // We assume success if no error was thrown
    return {
      success: true,
      message: 'Form submitted successfully to Google Sheets'
    };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      message: 'Failed to submit to Google Sheets. Please try again.'
    };
  }
}
