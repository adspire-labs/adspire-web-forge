import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import websiteDevImg from "@/assets/website-development.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import videoProductionImg from "@/assets/video-production.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Crafting responsive and user-friendly websites tailored to your business needs.",
      image: websiteDevImg,
      features: [
        "Custom website design",
        "E-commerce solutions",
        "SEO optimization",
        "Mobile responsiveness",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to enhance your online presence and drive conversions.",
      image: digitalMarketingImg,
      features: [
        "Social media marketing",
        "Search engine optimization",
        "Content marketing",
        "Email marketing",
      ],
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Creative design services to visually communicate your brand's message and identity.",
      image: graphicDesignImg,
      features: [
        "Logo design",
        "Branding guidelines",
        "Marketing collateral",
        "UI/UX design",
      ],
    },
    {
      id: 4,
      title: "Video Production",
      description: "High-quality video production services to engage your audience and tell your story.",
      image: videoProductionImg,
      features: [
        "Promotional videos",
        "Corporate videos",
        "Event coverage",
        "Animation",
      ],
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "We start by understanding your business goals and target audience.",
    },
    {
      id: 2,
      title: "Planning",
      description: "Developing a strategic plan tailored to your specific needs and objectives.",
    },
    {
      id: 3,
      title: "Execution",
      description: "Implementing the plan with precision and creativity to achieve optimal results.",
    },
    {
      id: 4,
      title: "Optimization",
      description: "Continuously monitoring and optimizing performance to maximize your ROI.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive digital solutions to grow your business and brand
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              return (
                <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden border-border bg-card">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A streamlined process to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl font-bold">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your project and explore how we can help you achieve your goals.
          </p>
          <Button asChild className="btn-primary btn-hover">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
