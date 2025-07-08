# Google Sheets Integration Setup

## Step 1: Create Google Sheets Web App

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if first row is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
    }
    
    // Add the form data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Deploy Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 3: Create Google Sheet

1. Create a new Google Sheet
2. Link it to your Apps Script project
3. The script will automatically create headers when first form is submitted

## Step 4: Configure Portfolio

Add your Google Sheets Web App URL as an environment variable:

```bash
GOOGLE_SHEETS_URL=your_web_app_url_here
```

## That's it!

Your contact form will now save directly to Google Sheets without needing a database.