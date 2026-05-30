# Dr. Saad El Mahdy — Booking Site

A simple therapy session booking site. Patients browse available slots and book without creating an account. Payment is handled offline via InstaPay or Vodafone Cash.

## Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Deployment:** Vercel

## Environment Variables

See `.env.example`. Set in Vercel dashboard or `.env.local` for local dev.

## Routes
- `/` — Dr. Saad's profile + available slot browser + booking flow
- `/admin` — Password-protected view of upcoming bookings
