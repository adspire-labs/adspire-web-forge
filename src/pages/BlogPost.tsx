
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogData from "@/data/blog.json";

const BlogPost = () => {
  const { slug } = useParams();
  
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild className="btn-primary">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              ← Back to Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            <span className="text-muted-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded">{post.readTime}</span>
            <span className="text-muted-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">{post.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Related Posts</h2>
            <p className="text-muted-foreground">More insights and tips from our blog</p>
          </div>
          <div className="text-center">
            <Button asChild className="btn-primary">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
