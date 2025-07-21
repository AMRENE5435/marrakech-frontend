import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Star, 
  Edit, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Award,
  Plus,
  Calendar
} from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();

  const userStats = {
    reviewsWritten: 12,
    totalViews: 1847,
    totalLikes: 234,
    averageRating: 4.6,
    rank: 'Gold Reviewer'
  };

  const recentReviews = [
    {
      id: 1,
      title: "Jemaa el-Fnaa Square",
      rating: 5,
      views: 156,
      likes: 23,
      date: "2025-01-15",
      status: "published"
    },
    {
      id: 2,
      title: "Majorelle Garden",
      rating: 4,
      views: 89,
      likes: 12,
      date: "2025-01-12",
      status: "published"
    },
    {
      id: 3,
      title: "Bahia Palace",
      rating: 5,
      views: 234,
      likes: 45,
      date: "2025-01-10",
      status: "published"
    }
  ];

  const achievements = [
    { name: "First Review", description: "Wrote your first review", earned: true },
    { name: "Popular Reviewer", description: "Got 100+ views on a review", earned: true },
    { name: "Helpful Reviewer", description: "Received 50+ likes", earned: true },
    { name: "Prolific Writer", description: "Write 25 reviews", earned: false },
    { name: "Local Expert", description: "Review 50 different places", earned: false }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName || user?.first_name}!
          </h1>
          <p className="text-gray-600">
            Manage your reviews and track your impact on the community
          </p>
        </div>
        <Button asChild>
          <Link to="/reviews/new">
            <Plus className="mr-2 h-4 w-4" />
            Write New Review
          </Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reviews Written</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.reviewsWritten}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalViews.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalLikes}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.averageRating}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-orange-600">{userStats.rank}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Reviews */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
              <CardDescription>
                Your latest reviews and their performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{review.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{review.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{review.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{review.likes} likes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={review.status === 'published' ? 'default' : 'secondary'}>
                        {review.status}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/reviews/${review.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/profile/reviews">View All Reviews</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>
                Your progress and milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/profile">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/reviews/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Write Review
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/profile/analytics">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

