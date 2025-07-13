# 🥦 CalQulate

**Smart Food Insights from Your Grocery Cart**

CalQulate is an AI-powered nutrition assistant that helps users instantly analyze food label photos. With a simple upload, CalQulate extracts nutritional values, performs a health check, and uses AI to provide personalized dietary recommendations — all with a focus on privacy and simplicity.

---

## 🚀 Features

- 📸 Upload food label images (snap a photo or drag & drop)
- 🧠 AI-powered extraction and analysis of nutrients
- 📊 Health analysis with nutrient checks (sugar, sodium, fat, fiber, etc.)
- 🤖 LLM-based insights using **Groq LLaMA 3**
- 🔐 Privacy-first: no data is stored or shared
- 💡 Tailored suggestions and warnings for dietary goals

---

## 🖥️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Frontend     | [Next.js 14](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) |
| UI Components| Custom + `shadcn/ui` style system |
| AI Layer     | Groq LLaMA 3 (`llama3-70b-vision`) |
| Styling      | CSS Modules, Tailwind |
| Hosting      | Vercel (or any Node-compatible environment) |

---

## 📸 Demo

Coming soon...

> 🌐 Live URL: [https://your-calqulate-app.vercel.app](https://your-calqulate-app.vercel.app)

---

## 📂 Project Structure

```
calqulate/
├── app/
│   ├── page.tsx           # Home page
│   ├── upload/page.tsx    # Upload interface + AI results
│   ├── about/page.tsx     # About and usage details
├── components/
│   ├── Navbar.tsx         # Responsive navigation bar
│   ├── ui/button.tsx      # Reusable styled button
├── public/                # Static assets
├── styles/
│   └── globals.css        # Tailwind + base styles
├── .env.local             # Your API keys (excluded from Git)
├── .gitignore
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/calqulate.git
cd calqulate
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Create a `.env.local` file

```
# .env.local

NEXT_PUBLIC_API_URL=https://your-backend.com/
NEXT_PUBLIC_GROQ_API_URL=your-groq-api-key
```

> ✅ **Note:** All public client-side env vars must start with `NEXT_PUBLIC_`

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

---

## 💡 How It Works

1. User uploads a **photo of a nutrition label**
2. The app sends the image to an OCR backend (`API_URL`)
3. Extracted data is:
   - Checked for health score (calories, fat, sugar, fiber, etc.)
   - Sent to **Groq LLM** for AI-generated benefits/risks/recommendations
4. Results are displayed in a beautiful and easy-to-read UI

---

## 🧪 Example Use Case

- Upload a cereal box label
- CalQulate highlights high sugar and low fiber
- Groq suggests healthier alternatives and reasons to moderate use

---

## ✅ Deployment

This app can be deployed on:

- [Vercel](https://vercel.com/) (best for Next.js)
- Netlify
- AWS Amplify / S3 + Lambda
- Dockerized container on any cloud

To deploy on **Vercel**:

```bash
vercel login
vercel
```

---

## 📦 Future Improvements

- 🍎 Add barcode scanning via camera
- 🧠 GPT-4 or Claude 3 integration for deeper insights
- 📊 Trend tracking (history of food uploads)
- 🗃️ Database of scanned items per user (optional account system)
- 🌍 Multilingual support

---

## 🙌 Credits

- Built by [Your Name] with ❤️
- Inspired by the need for **accessible and instant food transparency**
- Uses:
  - [Groq](https://groq.com/) for LLaMA 3 models
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Next.js](https://nextjs.org/)

---
