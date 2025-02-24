# Campus Dabba Web Application

A modern web platform connecting students with local home cooks for authentic regional cuisine delivery on campus.

## Features

- 🍱 Browse local home cooks and their menus
- 🗺️ Location-based cook discovery
- 💬 AI-powered chatbot for menu inquiries
- 🛒 Easy ordering and checkout system
- 📱 Responsive design for all devices
- 🌙 Dark/Light theme support
- 🔐 Secure authentication system
- 💳 Integrated payment processing

## Tech Stack

- **Frontend Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Authentication:** Supabase Auth
- **Database:** Supabase
- **State Management:** React Hooks
- **Maps Integration:** Google Maps API
- **AI Integration:** Google Gemini
- **Animations:** Framer Motion

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```
2. Install dependencies:
'''bash
npm install
'''
3. Set up environment variables:
- Create a .env.local file in the root directory.
- Add the following variables:
'''
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
'''
4. Start the development server:
'''bash
npm run dev


## Project Structure
- /app - Next.js app router pages and API routes
- /components - Reusable UI components
- /hooks - Custom React hooks
- /lib - Utility functions and configurations
- /public - Static assets
- /styles - Global styles and Tailwind configurations
- /utils - Helper functions and services
## Key Features
### For Students
- Browse cooks by location and cuisine type
- View detailed menus and pricing
- Place orders with real-time tracking
- Chat with AI assistant for menu information
- Save favorite cooks and meals
### For Cooks
- Manage menu items and availability
- Track orders and earnings
- Set delivery zones
- Update profile and credentials
## Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/amazing-feature )
3. Commit your changes ( git commit -m 'Add some amazing feature' )
4. Push to the branch ( git push origin feature/amazing-feature )
5. Open a Pull Request