import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import websiteDevImg from "@/assets/website-development.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import videoProductionImg from "@/assets/video-production.jpg";
import servicesData from "@/data/services.json";

const Services = () => {
  // Map imported images to services data
  const imageMap = {
    "/src/assets/website-development.jpg": websiteDevImg,
    "/src/assets/digital-marketing.jpg": digitalMarketingImg,
    "/src/assets/graphic-design.jpg": graphicDesignImg,
    "/src/assets/video-production.jpg": videoProductionImg,
  };

  const services = servicesData.services.map(service => ({
    ...service,
    image: imageMap[service.image] || service.image
  }));

  const processSteps = servicesData.processSteps;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
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
                <Card key={service.id} className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden border-border bg-card animate-fade-in group"
                  style={{ animationDelay: `${service.id * 0.1}s` }}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              <div key={step.id} className="text-center animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${step.id * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-colors duration-300">
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
