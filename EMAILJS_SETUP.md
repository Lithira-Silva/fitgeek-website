# EmailJS Integration Setup

Your contact form is now integrated with EmailJS! To make it fully functional, you need to set up your EmailJS account and update the configuration.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use these template variables in your email template:
   ```
   From: {{from_name}} ({{from_email}})
   Phone: {{phone}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from the FitGeek website contact form.
   ```
4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `user_abcdef123`)

### 5. Update Your Configuration
In your `Contact.tsx` file, replace these placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your public key
```

### 6. Test Your Form
1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Security Note
For production applications, consider using environment variables to store your EmailJS credentials:

1. Create a `.env` file in your project root
2. Add your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Update your Contact.tsx to use these variables:
   ```typescript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ```

## Features Included
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error handling
- ✅ Form reset after successful submission
- ✅ User feedback messages
- ✅ Responsive design

Your contact form is now ready to send real emails!
