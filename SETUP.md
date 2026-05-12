# Laptop Wizard — Setup Instructions

## Prerequisites
- Node.js installed (download from https://nodejs.org — choose the LTS version)

## Steps

### 1. Add your Supabase credentials
In the `web` folder, create a file called `.env.local` (copy from `.env.local.example`)
and fill in your Supabase URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 2. Open a terminal in the web folder
- On Windows: open the `web` folder, then type `cmd` in the address bar and press Enter

### 3. Install dependencies
```
npm install
```

### 4. Start the development server
```
npm run dev
```

### 5. Open the site
Go to http://localhost:3000 in your browser.

## Deploy to Vercel (when ready)
1. Push the `web` folder to a GitHub repo
2. Go to vercel.com and import the repo
3. Add the same environment variables in Vercel's project settings
4. Deploy — Vercel handles the rest automatically
