import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import {
  Search,
  Star,
  MapPin,
  Users,
  BookOpen,
  TrendingUp,
  Utensils,
  Building,
  Camera,
  ShoppingBag,
  Sparkles,
  Activity,
} from 'lucide-react'
import heroImage from '../assets/images/marrakech-architecture-hero.jpg'
import souksImage from '../assets/images/marrakech-souks.jpg'
import foodImage from '../assets/images/marrakech-food.jpg'
import desertImage from '../assets/images/marrakech-desert.jpg'
import riadImage from '../assets/images/marrakech-riad.jpg'

const HomePage = () => {
  const categories = [
    {
      name: 'Restaurants',
      icon: Utensils,
      count: '150+',
      color: 'bg-orange-100 text-orange-600',
      href: '/reviews?placeType=Restaurant',
    },
    {
      name: 'Hotels & Riads',
      icon: Building,
      count: '80+',
      color: 'bg-blue-100 text-blue-600',
      href: '/reviews?placeType=Hotel/Riad',
    },
    {
      name: 'Attractions',
      icon: Camera,
      count: '120+',
      color: 'bg-green-100 text-green-600',
      href: '/reviews?placeType=Attraction',
    },
    {
      name: 'Shopping',
      icon: ShoppingBag,
      count: '90+',
      color: 'bg-purple-100 text-purple-600',
      href: '/reviews?placeType=Shopping',
    },
    {
      name: 'Activities',
      icon: Activity,
      count: '60+',
      color: 'bg-red-100 text-red-600',
      href: '/reviews?placeType=Activity/Tour',
    },
    {
      name: 'Hidden Gems',
      icon: Sparkles,
      count: '45+',
      color: 'bg-yellow-100 text-yellow-600',
      href: '/reviews?placeType=Hidden Gem',
    },
  ]

  const featuredReviews = [
    {
      id: 1,
      title: 'La Mamounia - A Palace of Luxury',
      author: 'Sarah Johnson',
      rating: 5,
      category: 'Hotel/Riad',
      image: riadImage,
      excerpt:
        "An unforgettable experience in one of Marrakech's most iconic hotels...",
      date: '2 days ago',
    },
    {
      id: 2,
      title: 'Jemaa el-Fnaa: Heart of Marrakech',
      author: 'Ahmed Hassan',
      rating: 4,
      category: 'Attraction',
      image: souksImage,
      excerpt:
        'The main square comes alive at sunset with storytellers, musicians...',
      date: '1 week ago',
    },
    {
      id: 3,
      title: 'Dar Yacout - Culinary Excellence',
      author: 'Maria Rodriguez',
      rating: 5,
      category: 'Restaurant',
      image: foodImage,
      excerpt:
        'Traditional Moroccan cuisine elevated to an art form in this rooftop...',
      date: '2 weeks ago',
    },
  ]

  const latestArticles = [
    {
      id: 1,
      title: 'Ultimate Guide to Marrakech Souks',
      category: 'Shopping',
      readTime: '8 min read',
      image: souksImage,
      excerpt:
        'Navigate the labyrinthine markets like a pro with our insider tips...',
    },
    {
      id: 2,
      title: 'Best Desert Tours from Marrakech',
      category: 'Activities',
      readTime: '12 min read',
      image: desertImage,
      excerpt: 'From day trips to multi-day adventures, discover the Sahara...',
    },
    {
      id: 3,
      title: 'Traditional Moroccan Cuisine Guide',
      category: 'Food',
      readTime: '10 min read',
      image: foodImage,
      excerpt:
        'Explore the rich flavors and spices that make Moroccan food unique...',
    },
  ]

  const stats = [
    { label: 'Reviews', value: '2,500+', icon: Star },
    { label: 'Places', value: '800+', icon: MapPin },
    { label: 'Contributors', value: '1,200+', icon: Users },
    { label: 'Articles', value: '150+', icon: BookOpen },
  ]

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[600px] flex items-center justify-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className='absolute inset-0 bg-black/40' />
        </div>

        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Discover the Magic of
            <span className='block text-primary'>Marrakech</span>
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-gray-200'>
            Your trusted guide to the best restaurants, hotels, attractions, and
            hidden gems in Morocco's enchanting Red City
          </p>

          {/* Search Bar */}
          <div className='max-w-2xl mx-auto mb-8'>
            <div className='flex bg-white rounded-lg p-2 shadow-lg'>
              <Input
                type='text'
                placeholder='Search for restaurants, hotels, attractions...'
                className='flex-1 border-0 focus-visible:ring-0 text-foreground'
              />
              <Button size='sm' className='ml-2'>
                <Search className='h-4 w-4 mr-2' />
                Search
              </Button>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-primary/90'
            >
              <Link to='/reviews'>
                <Star className='mr-2 h-5 w-5' />
                Browse Reviews
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='bg-white/10 border-white text-white hover:bg-white/20'
            >
              <Link to='/add-review'>
                <TrendingUp className='mr-2 h-5 w-5' />
                Share Your Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className='text-center'>
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4'>
                    <Icon className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-3xl font-bold text-foreground mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-muted-foreground'>{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Explore by Category
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Find exactly what you're looking for in Marrakech
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link key={index} to={category.href}>
                  <Card className='hover:shadow-lg transition-shadow cursor-pointer group'>
                    <CardContent className='p-6 text-center'>
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${category.color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className='h-6 w-6' />
                      </div>
                      <h3 className='font-semibold mb-2'>{category.name}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {category.count} places
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-12'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Featured Reviews
              </h2>
              <p className='text-xl text-muted-foreground'>
                Discover the most popular and highly-rated places
              </p>
            </div>
            <Button asChild variant='outline'>
              <Link to='/reviews'>View All Reviews</Link>
            </Button>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredReviews.map((review) => (
              <Card
                key={review.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='aspect-video relative overflow-hidden'>
                  <img
                    src={review.image}
                    alt={review.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform'
                  />
                  <Badge className='absolute top-4 left-4 bg-white/90 text-foreground'>
                    {review.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='text-sm text-muted-foreground'>
                      {review.date}
                    </span>
                  </div>
                  <CardTitle className='line-clamp-2'>{review.title}</CardTitle>
                  <CardDescription>By {review.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground line-clamp-3'>
                    {review.excerpt}
                  </p>
                  <Button asChild variant='link' className='p-0 mt-2'>
                    <Link to={`/reviews/${review.id}`}>Read full review</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-12'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Latest Articles
              </h2>
              <p className='text-xl text-muted-foreground'>
                Travel tips, guides, and insights from local experts
              </p>
            </div>
            <Button asChild variant='outline'>
              <Link to='/articles'>View All Articles</Link>
            </Button>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {latestArticles.map((article) => (
              <Card
                key={article.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='aspect-video relative overflow-hidden'>
                  <img
                    src={article.image}
                    alt={article.title}
                    className='w-full h-full object-cover'
                  />
                  <Badge className='absolute top-4 left-4 bg-white/90 text-foreground'>
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-muted-foreground'>
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className='line-clamp-2'>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground line-clamp-3'>
                    {article.excerpt}
                  </p>
                  <Button asChild variant='link' className='p-0 mt-2'>
                    <Link to={`/articles/${article.id}`}>Read article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Share Your Marrakech Experience
          </h2>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            Help fellow travelers discover amazing places by sharing your
            reviews and experiences
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' variant='secondary'>
              <Link to='/reviews/add'>
                <Star className='mr-2 h-5 w-5' />
                Write a Review
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary'
            >
              <Link to='/register'>
                <Users className='mr-2 h-5 w-5' />
                Join Our Community
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
