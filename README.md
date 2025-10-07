# Scroll

A modern, full-stack web application built with React for creating, editing, and sharing blog posts. Scroll provides a seamless writing experience with rich text editing, user authentication, and a clean, responsive UI.

## Features

- **User Authentication**: Secure user registration and login powered by Appwrite.
- **Rich Text Editing**: Integrated TinyMCE editor for creating and editing posts with advanced formatting options.
- **Post Management**: Create, view, edit, and delete blog posts.
- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive user interface.
- **State Management**: Redux Toolkit for efficient state management.
- **Routing**: Client-side routing with React Router for smooth navigation.
- **Protected Routes**: Authentication-based route protection.

## Technologies Used

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Backend-as-a-Service**: Appwrite
- **Rich Text Editor**: TinyMCE
- **Icons**: Lucide React, React Icons
- **Forms**: React Hook Form
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hasnain-tanoli/scroll.git
   cd scroll
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Appwrite configuration:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev` - Starts the development server with hot reload
- `npm run build` - Builds the project for production
- `npm run lint` - Runs ESLint for code linting
- `npm run preview` - Previews the production build locally

## Project Structure

```
src/
├── backend/          # Appwrite configuration and services
├── components/       # Reusable UI components
├── features/         # Redux slices and state management
├── pages/            # Page components and routes
├── store/            # Redux store configuration
└── conf/             # Configuration files
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
