
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Mobile-First Approach",
        "Content Management Systems",
        "E-commerce Solutions"
      ],
      icon: "🌐",
      color: "from-primary to-accent"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive real results",
      features: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Google Ads Management",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      icon: "📱",
      color: "from-accent to-secondary"
    },
    {
      title: "Graphic Design & Branding",
      description: "Visual identity that makes your brand memorable",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Marketing Materials",
        "Print Design",
        "Packaging Design",
        "Brand Strategy"
      ],
      icon: "🎨",
      color: "from-secondary to-light-accent"
    },
    {
      title: "Video Production",
      description: "Compelling video content that tells your story",
      features: [
        "Promotional Videos",
        "Social Media Reels",
        "Storytelling Ads",
        "Product Videos",
        "Corporate Videos",
        "Animation"
      ],
      icon: "🎬",
      color: "from-light-accent to-primary"
    },
    {
      title: "Social Media Management",
      description: "Complete social media presence management",
      features: [
        "Content Creation",
        "Post Scheduling",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Strategy",
        "Performance Analytics"
      ],
      icon: "📊",
      color: "from-primary to-secondary"
    },
    {
      title: "Daraz Store Management",
      description: "Complete e-commerce store management for Daraz platform",
      features: [
        "Store Setup & Optimization",
        "Product Listing",
        "Inventory Management",
        "Order Processing",
        "Customer Support",
        "Performance Optimization"
      ],
      icon: "🛒",
      color: "from-accent to-light-accent"
    },
    {
      title: "Product Photography",
      description: "Professional photography for your products and services",
      features: [
        "Product Photography",
        "Lifestyle Photography",
        "E-commerce Images",
        "Portrait Photography",
        "Event Photography",
        "Image Editing & Retouching"
      ],
      icon: "📸",
      color: "from-secondary to-primary"
    }
  ];

  const clients = [
    "Organic Divine Group",
    "Samragyee Nirman Sewa",
    "4D Architect",
    "Mansoon Ply",
    "Build Sansar Nepal"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive creative solutions to grow your business and establish your brand presence
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="flex items-center text-white">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-white/90">{service.description}</CardDescription>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we work with you to achieve amazing results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your business, goals, and target audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a customized strategy tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Execution</h3>
              <p className="text-gray-600">We bring your vision to life with creative excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-light-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Results</h3>
              <p className="text-gray-600">We measure success and optimize for continuous growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted by Leading Brands</h2>
            <p className="text-lg text-gray-600">Companies that have chosen us for their creative needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <p className="font-semibold text-primary">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and establish a strong market presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Contact Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
