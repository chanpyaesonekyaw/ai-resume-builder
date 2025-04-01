# AI Resume Builder

A modern web application that helps users create professional resumes with the assistance of AI. Built with React, Vite, and powered by Google's Generative AI.

## Features

- 🤖 AI-powered resume content generation
- 📝 Rich text editor for easy content editing
- 🎨 Modern and responsive UI design
- 📱 Mobile-friendly interface
- 🔄 Real-time preview
- 📄 PDF export functionality
- 🔗 Shareable resume links
- 🔐 Secure authentication with Clerk
- 🎯 Tailwind CSS for styling

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Authentication:** Clerk
- **AI Integration:** Google Generative AI
- **HTTP Client:** Axios
- **PDF Generation:** html2pdf.js
- **State Management:** React Context
- **Routing:** React Router DOM
- **Rich Text Editor:** react-simple-wysiwyg
- **Notifications:** Sonner
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chanpyaesonekyaw/ai-resume-builder.git
cd ai-resume-builder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_api_key
VITE_STRAPI_API_KEY=your_strapi_backend_api_key
VITE_GOOGLE_AI_API_KEY=your_google_ai_key
VITE_API_BASE_URL=your_backend_api_base_url
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Sign up or log in using Clerk authentication
2. Create a new resume or edit an existing one
3. Use the AI-powered content generation to enhance your resume
4. Customize your resume using the rich text editor
5. Preview your resume in real-time
6. Download your resume as PDF or share it via a unique URL

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Clerk](https://clerk.com/) for authentication
- [Google AI](https://ai.google.dev/) for content generation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) for accessible components
