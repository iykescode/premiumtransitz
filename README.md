## 🚗 PremiumTransitz
PremiumTransitz is a modern private car hire web application inspired by services like Uber and Lyft, with a focus on luxury, client-tailored transportation experiences.

Built with a performance-first mindset using Next.js, the platform provides a seamless booking interface, real-time location input, and automated communication via email.

## ✨ Features
    🚘 Luxury Ride Booking Interface
Users can request private transportation based on personalized needs.

    📍 Google Places Autocomplete Integration
Smart location input using Google Places API for accurate pickup and drop-off selection.

	📧 Automated Email Notifications
Contact form submissions are processed and delivered via email using Resend API.

	⚡ Fast & Optimized Performance
Built with Next.js for efficient rendering and smooth user experience.

	📱 Responsive Design
Fully responsive UI built with modern CSS practices (Tailwind CSS).

## 🛠️ Tech Stack
* Frontend: Next.js (Pages Router), React.js
* Styling: Tailwind CSS
* APIs:
  * Google Places API (location autocomplete)
  * Resend API (email delivery)
* Deployment: Railway 
* Version Control: Git & GitHub

## 🧠 Architecture Overview

This project follows a clean and scalable structure:
* Pages Router for routing and SPA-like navigation
* Component-based UI architecture for reusability 
* API integration layer for handling external services 
* Environment-based configuration for secure API usage
 
## 🔐 Environment Variables

Create a .env.local file in the root directory:


    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_api_key
    RESEND_API_KEY=your_resend_api_key

⚠️ These variables must also be configured in your deployment environment (e.g., Railway).

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-username/premiumtransitz.git
cd premiumtransitz
```
2. Install dependencies
```bash
npm install
```
3. Run development server
```bash
npm run dev
```

App will be available at:

    http://localhost:3000

## 📦 Production Build

```bash
npm run build
npm start
```

## 🌍 Deployment

This project is deployed using Railway, which automatically:
* Installs dependencies 
* Builds the Next.js application 
* Serves it in production

## 🎯 Project Goals
* Deliver a premium, user-friendly booking experience 
* Demonstrate strong full-stack web development skills 
* Showcase integration of third-party APIs in real-world applications 
* Build a scalable foundation for future expansion (auth, payments, ride tracking)

## 💡 Future Improvements
* User authentication (accounts, booking history)
* Payment integration (Stripe)
* Real-time ride tracking 
* Admin dashboard for ride management 
* Backend service layer for scalability

## 👨‍💻 Author

[Iykescode](https://www.iykescode.com) (Michael Chuks)
* Full-stack developer specializing in Next.js, React, and modern web applications
* Focused on building scalable, high-performance, user-centric solutions