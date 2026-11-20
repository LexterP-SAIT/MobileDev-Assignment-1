# Supabase Authentication Assignment

**Name:** Adrian Lexter Paule  
*This assignment was done individually by Adrian Lexter Paule.*

## Project Structure

- `app/(auth)/` — Sign-in (`sign-in.tsx`) and sign-up (`sign-up.tsx`) screens
- `app/(protected)/` — Authenticated app screens (`index.tsx`)
- `components/authenticationcontexts.tsx` — Authentication state/context provider
- `lib/supabasesetup.ts` — Supabase client initialization
- `lib/schema.ts` — Validation/data schemas
- `lib/authenticationerrors.ts` — Auth error handling helpers

## Setup Steps to Run the App

### Prerequisites
- Node.js (LTS recommended) and `npm`
- **Expo Go** installed on an iOS or Android device (or an iOS Simulator / Android Emulator)
- A Supabase project


### Install Dependencies and Run the App
```bash
cd MobileDev-AuthenticationAssignment-main
npm install
npx expo start
```
Scan the QR code using **Expo Go** (Android) or the Camera app (iOS), or press `a` / `i` / `w` to open on an emulator or web.

## Supabase Project Setup Notes

- **Sign-Up** is **functional**
- **Authentication:** Email/password sign-in and sign-up are enabled under **Authentication → Providers → Email**.
- **Confirm Email** is turned **OFF**
- **Client Setup:** Configured in `lib/supabasesetup.ts` using the environment variables in `.env`.
- Database & RLS: Tables: member_resources & public_announcements.
  - public_announcements Policies:
    - Public can read announcements, COMMAND: SELECT, Applied to: anon, authenticated
  - member_resources Policies:
    - Authenticated users can delete member resources, COMMAND: DELETE, Applied to: authenticated
    - Authenticated users can insert member resources, COMMAND: INSERT, Applied to: authenticated
    - Authenticated users can read member resources, COMMAND: SELECT, Applied to: authenticated
    - Authenticated users can update member resources, COMMAND: UPDATE, Applied to: authenticated


## Test Account
- **Account Name:** `Testing Account`
- **Email:** `mynametest@testexample.com`
- **Password:** `TestingPassword123`
