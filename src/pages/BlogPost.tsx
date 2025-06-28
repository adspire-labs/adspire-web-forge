
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock blog post data - in real app this would come from a CMS or markdown files
  const blogPosts = {
    "top-5-video-editing-tools-beginners": {
      title: "Top 5 Video Editing Tools for Beginners",
      date: "2024-01-15",
      category: "Video Editing",
      readTime: "5 min read",
      content: `
        <h2>Getting Started with Video Editing</h2>
        <p>Video editing has become an essential skill in today's digital world. Whether you're creating content for social media, YouTube, or professional projects, having the right tools is crucial for success.</p>
        
        <h3>1. DaVinci Resolve</h3>
        <p>DaVinci Resolve is a professional-grade video editing software that's completely free. It offers advanced color correction, audio editing, and visual effects capabilities that rival expensive alternatives.</p>
        
        <h3>2. Adobe Premiere Pro</h3>
        <p>Industry standard for video editing, Adobe Premiere Pro offers seamless integration with other Adobe Creative Suite applications and powerful editing features.</p>
        
        <h3>3. Final Cut Pro</h3>
        <p>Exclusively for Mac users, Final Cut Pro provides intuitive editing workflows and excellent performance optimization for Apple hardware.</p>
        
        <h3>4. CapCut</h3>
        <p>Perfect for mobile editing and social media content creation, CapCut offers user-friendly interface with powerful editing features.</p>
        
        <h3>5. OpenShot</h3>
        <p>A free, open-source video editor that's perfect for beginners who want to learn basic editing without overwhelming complexity.</p>
        
        <h2>Conclusion</h2>
        <p>Choose the tool that best fits your needs, budget, and skill level. Remember, the best video editor is the one you'll actually use consistently to improve your skills.</p>
      `
    },
    "why-every-business-butwal-needs-digital-marketing": {
      title: "Why Every Business in Butwal Needs Digital Marketing",
      date: "2024-01-10",
      category: "Digital Marketing",
      readTime: "7 min read",
      content: `
        <h2>The Digital Revolution in Nepal</h2>
        <p>Digital marketing has transformed how businesses reach and engage with customers in Nepal. Even in smaller cities like Butwal, having a strong digital presence is no longer optional—it's essential for business growth.</p>
        
        <h3>Local Market Opportunities</h3>
        <p>Butwal's growing economy presents unique opportunities for businesses that embrace digital marketing strategies. From restaurants to construction companies, every business can benefit from online visibility.</p>
        
        <h3>Cost-Effective Marketing</h3>
        <p>Digital marketing offers better ROI compared to traditional advertising methods, making it perfect for small and medium businesses in Butwal.</p>
        
        <h3>Reaching Mobile Users</h3>
        <p>With increasing smartphone adoption in Nepal, businesses must optimize their digital presence for mobile users to stay competitive.</p>
        
        <h2>Getting Started</h2>
        <p>Start with basic social media presence, then expand to website development and targeted advertising campaigns.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{post.category}</span>
            <span className="text-white/80">{post.readTime}</span>
            <span className="text-white/80">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: '#374151',
              lineHeight: '1.75'
            }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Related Posts</h2>
            <p className="text-gray-600">More insights and tips from our blog</p>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
