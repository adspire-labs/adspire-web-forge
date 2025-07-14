
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import blogData from "@/data/blog.json";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogPosts = blogData;

  const categories = ["All", "Video Editing", "Digital Marketing", "Graphic Design", "Technology"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header animate-fade-in">
            <h1 className="section-title">Our Blog</h1>
            <p className="section-subtitle">
              Insights, tips, and trends in digital marketing, design, and video production
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => {
              return (
                <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden border-border bg-card hover-scale animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-foreground hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-accent font-medium text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
