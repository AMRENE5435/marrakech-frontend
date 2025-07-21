import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Users, 
  Star, 
  FileText, 
  TrendingUp, 
  Settings,
  Shield,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const AdminDashboard = () => {
  const location = useLocation();
  const isMainDashboard = location.pathname === '/admin' || location.pathname === '/admin/';

  const stats = {
    totalUsers: 1247,
    totalReviews: 3456,
    totalArticles: 89,
    pendingReviews: 23,
    averageRating: 4.6,
    monthlyGrowth: 12.5
  };

  const recentActivity = [
    {
      id: 1,
      type: 'review',
      user: 'Sarah Johnson',
      action: 'submitted a review for',
      target: 'Jemaa el-Fnaa Square',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'user',
      user: 'Ahmed Benali',
      action: 'joined the platform',
      target: '',
      time: '4 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'article',
      user: 'Maria Rodriguez',
      action: 'published an article about',
      target: 'Best Restaurants in Marrakech',
      time: '6 hours ago',
      status: 'completed'
    }
  ];

  const pendingReviews = [
    {
      id: 1,
      title: 'Majorelle Garden',
      author: 'John Doe',
      rating: 5,
      submitted: '2025-01-15',
      category: 'Gardens'
    },
    {
      id: 2,
      title: 'Bahia Palace',
      author: 'Jane Smith',
      rating: 4,
      submitted: '2025-01-15',
      category: 'Historical Sites'
    },
    {
      id: 3,
      title: 'Nomad Restaurant',
      author: 'Mike Johnson',
      rating: 5,
      submitted: '2025-01-14',
      category: 'Restaurants'
    }
  ];

  if (!isMainDashboard) {
    return (
      <Routes>
        <Route path="/users" element={<div>User Management</div>} />
        <Route path="/reviews" element={<div>Review Management</div>} />
        <Route path="/articles" element={<div>Article Management</div>} />
        <Route path="/analytics" element={<div>Analytics</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your Marrakech Reviews platform</p>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
          <Link to="/admin/users">
            <Users className="h-6 w-6" />
            <span className="text-sm">Users</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
          <Link to="/admin/reviews">
            <Star className="h-6 w-6" />
            <span className="text-sm">Reviews</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
          <Link to="/admin/articles">
            <FileText className="h-6 w-6" />
            <span className="text-sm">Articles</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
          <Link to="/admin/analytics">
            <BarChart3 className="h-6 w-6" />
            <span className="text-sm">Analytics</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
          <Link to="/admin/moderation">
            <Shield className="h-6 w-6" />
            <span className="text-sm">Moderation</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" asChild>
          <Link to="/admin/settings">
            <Settings className="h-6 w-6" />
            <span className="text-sm">Settings</span>
          </Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.monthlyGrowth}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalReviews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {stats.pendingReviews} pending approval
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}</div>
            <p className="text-xs text-muted-foreground">
              Across all reviews
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest platform activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    {activity.type === 'review' && <Star className="h-4 w-4 text-orange-600" />}
                    {activity.type === 'user' && <Users className="h-4 w-4 text-orange-600" />}
                    {activity.type === 'article' && <FileText className="h-4 w-4 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      {activity.action}{' '}
                      {activity.target && <span className="font-medium">{activity.target}</span>}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      <Badge 
                        variant={activity.status === 'pending' ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Reviews</CardTitle>
            <CardDescription>Reviews awaiting moderation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingReviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{review.title}</h4>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <span>by {review.author}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{review.rating}</span>
                      </div>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {review.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/admin/reviews">View All Pending</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

