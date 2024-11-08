#Plantify
Plantify is a web application that allows users to identify plants with a single snap. Designed for gardening enthusiasts, nature explorers, or anyone curious about plants, it enables users to upload images of plants and provides detailed information about the identified species.

#Features
User Authentication: Sign in with Google or via Magic Link.
Image Upload: Easily upload pictures of plants to identify them.
Plant Information: Access detailed descriptions and care instructions for various plants.
My Plants Section: View and manage your saved plants.
Protected Dashboard: Only accessible by authenticated users, displaying a personalized dashboard and options to upload images.

#Tech Stack
Frontend: Next.js, Shadcn for component styling, TailwindCSS for additional styling and dark mode support.
Backend: NextAuth with Google OAuth and Magic Link (using Resend), PostgreSQL (hosted on Neon).
State Management: Redux for storing user information and authentication state.
Image Storage and Processing: Plant image upload and storage.

#Project Structure

Copy code
├── components # UI components
├── lib # Authentication, hooks, and providers
├── pages # Page components and routes
├── public # Static files
├── store # Redux store and slices
├── styles # Global styles
└── utils # Utility functions
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/plantify.git
cd plantify
Install dependencies:

bash
Copy code
npm install
Environment Variables:

Create a .env file in the root of the project with the following variables:

plaintext
Copy code
NEXTAUTH_URL = your domain name
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SENDGRID_API_KEY=your_sendgrid_api_key
DATABASE_URL=your_neon_postgresql_url
Run the application locally:

bash
Copy code
npm run dev
Set up Authentication and State Management:

The app uses NextAuth for authentication. Configure authOptions with Google OAuth and Magic Link settings.
Redux Persist is used to maintain user state across page reloads.
Deployment
Plantify is optimized for deployment on Vercel. Follow these steps to deploy:

Note: This is a hobby project, and it's still a work in progress. Some features may not be fully functional yet, but I'm actively working to release updates as soon as possible. Thank you for your patience!
