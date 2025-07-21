import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ReviewsPage from './pages/ReviewsPage';
import AddReviewPage from './pages/AddReviewPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Placeholder components for admin and profile routes
const AdminPage = () => <div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Admin Dashboard</h1><p>Coming soon...</p></div>;
const ProfilePage = () => <div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Profile Page</h1><p>Coming soon...</p></div>;
const SettingsPage = () => <div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Settings Page</h1><p>Coming soon...</p></div>;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Auth routes (without layout) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Main routes (with layout) */}
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/articles" element={<ArticlesPage />} />
                  <Route path="/articles/:id" element={<ArticleDetailPage />} />
                  <Route path="/reviews" element={<ReviewsPage />} />
                  <Route path="/reviews/add" element={<AddReviewPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/admin/*" element={<AdminPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="*" element={
                    <div className="container mx-auto px-4 py-8 text-center">
                      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                      <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
                    </div>
                  } />
                </Routes>
              </Layout>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

