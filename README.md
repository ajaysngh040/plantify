Plantify

Plantify is a web application that enables users to identify plants with just a snap. Designed for gardening enthusiasts, nature explorers, or anyone curious about plants, Plantify lets users upload images of plants and provides detailed information about each identified species.

Features
User Authentication: Sign in with Google or via Magic Link.
Image Upload: Easily upload pictures of plants to identify them.
Plant Information: Access detailed descriptions and care instructions for various plants.
My Plants Section: View and manage your saved plants.
Protected Dashboard: Only accessible to authenticated users, with a personalized dashboard and image upload options.

Tech Stack
Frontend: Next.js, Shadcn for component styling, TailwindCSS for additional styling and dark mode support.
Backend: NextAuth with Google OAuth and Magic Link (using Resend), PostgreSQL (hosted on Neon).
State Management: Redux for storing user information and authentication state.
Image Storage and Processing: Supports plant image upload and storage.

Project Structure

├── components # UI components
├── lib # Authentication, hooks, and providers
├── pages # Page components and routes
├── public # Static files
├── store # Redux store and slices
├── styles # Global styles
└── utils # Utility functions

Setup

1. Clone the Repository
   git clone https://github.com/your-username/plantify.git
   cd plantify

2. Install Dependencies
   npm install

3. Environment Variables
   Create a .env file in the root of the project with the following variables:
   NEXTAUTH_URL=your_domain_name
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SENDGRID_API_KEY=your_sendgrid_api_key
   DATABASE_URL=your_neon_postgresql_url

4. Run the Application Locally
   npm run dev

Authentication and State Management
Plantify uses NextAuth for authentication, configured with Google OAuth and Magic Link options.
Redux Persist is implemented to maintain user state across page reloads.

Note: This is a hobby project, and it’s currently a work in progress. Some features may not yet be fully functional, but I’m actively working on improvements and updates. Thank you for your patience!
