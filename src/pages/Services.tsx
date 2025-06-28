
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading", "Content Management"],
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital campaigns that drive real business growth",
      features: ["Social Media Marketing", "Google Ads", "Content Strategy", "Analytics & Reporting", "Brand Development"],
      icon: "📱"
    },
    {
      title: "Graphic Design & Branding",
      description: "Visual identity that makes your brand memorable and impactful",
      features: ["Logo Design", "Brand Guidelines", "Print Design", "Digital Assets", "Brand Strategy"],
      icon: "🎨"
    },
    {
      title: "Video Production",
      description: "Compelling visual stories that engage and convert your audience",
      features: ["Commercial Videos", "Social Media Reels", "Storytelling Ads", "Product Videos", "Event Coverage"],
      icon: "🎬"
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy and execution for your brand",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics", "Strategy Development"],
      icon: "📲"
    },
    {
      title: "Daraz Store Management",
      description: "Complete e-commerce solutions for Nepal's largest marketplace",
      features: ["Store Setup", "Product Optimization", "Inventory Management", "Marketing Campaigns", "Performance Analytics"],
      icon: "🛒"
    },
    {
      title: "Product Photography",
      description: "Professional photography that showcases your products perfectly",
      features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Image Editing", "Brand Consistency"],
      icon: "📸"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Comprehensive digital solutions designed to grow your business and strengthen your brand presence
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-gray-900 mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
