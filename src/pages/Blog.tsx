
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "top-5-video-editing-tools-beginners",
      title: "Top 5 Video Editing Tools for Beginners",
      description: "Discover the best video editing software for those just starting their creative journey.",
      date: "2024-01-15",
      category: "Video Editing",
      readTime: "5 min read",
      image: "📹"
    },
    {
      id: 2,
      slug: "why-every-business-butwal-needs-digital-marketing",
      title: "Why Every Business in Butwal Needs Digital Marketing",
      description: "Understanding the importance of digital presence for local businesses in Nepal.",
      date: "2024-01-10",
      category: "Digital Marketing", 
      readTime: "7 min read",
      image: "📱"
    },
    {
      id: 3,
      slug: "graphic-design-tips-local-brands",
      title: "Graphic Design Tips for Local Brands",
      description: "Essential design principles to make your local brand stand out in the market.",
      date: "2024-01-05",
      category: "Graphic Design",
      readTime: "6 min read", 
      image: "🎨"
    },
    {
      id: 4,
      slug: "how-ai-changing-content-creation",
      title: "How AI is Changing Content Creation",
      description: "Exploring the impact of artificial intelligence on modern content creation workflows.",
      date: "2024-01-01",
      category: "Technology",
      readTime: "8 min read",
      image: "🤖"
    },
    {
      id: 4,
      slug: "how-ai-changing-content-creation",
      title: "How AI is Changing Content Creation",
      description: "Exploring the impact of artificial intelligence on modern content creation workflows.",
      date: "2024-01-01",
      category: "Technology",
      readTime: "8 min read",
      image: "🤖"
    },
    {
      id: 4,
      slug: "how-ai-changing-content-creation",
      title: "How AI is Changing Content Creation",
      description: "Exploring the impact of artificial intelligence on modern content creation workflows.",
      date: "2024-01-01",
      category: "Technology",
      readTime: "8 min read",
      image: "🤖"
    }
    
  ];

  const categories = ["All", "Video Editing", "Digital Marketing", "Graphic Design", "Technology"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Insights, tips, and trends in digital marketing, design, and video production
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-6xl text-white">{post.image}</span>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-light-accent text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-primary hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-accent font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
