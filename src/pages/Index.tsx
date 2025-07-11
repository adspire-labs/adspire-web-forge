
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, Zap, Shield, BookOpen } from "lucide-react";
import websiteDevImg from "@/assets/website-development.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import graphicDesignImg from "@/assets/graphic-design.jpg";
import videoProductionImg from "@/assets/video-production.jpg";

const Index = () => {
  const services = [
    {
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers",
      image: websiteDevImg
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive real business growth",
      image: digitalMarketingImg
    },
    {
      title: "Video Production",
      description: "Compelling visual stories that engage your audience",
      image: videoProductionImg
    },
    {
      title: "Graphic Design",
      description: "Brand identity that makes you stand out",
      image: graphicDesignImg
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "30+", label: "Students Trained" },
    { number: "1", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Creative Agency in <span className="text-primary">Butwal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Creativity that Converts. Execution that Inspires.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 btn-primary">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border text-foreground hover:bg-muted">
                <Link to="/courses">
                  Join a Course
                </Link>
              </Button>
            </div>
            
            {/* Certificate Verification Button */}
            <div className="mt-8">
              <Button asChild variant="ghost" className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50">
                <Link to="/verify-certificate" className="flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  Verify Certificate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help businesses grow through strategic digital solutions and creative excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 border-border text-foreground hover:bg-muted">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Learn From Industry Experts</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Master in-demand skills with hands-on training programs designed for the modern digital landscape.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Users className="text-primary mr-4 h-6 w-6 flex-shrink-0" />
                  <span className="text-lg text-foreground">200+ Students Trained</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-primary mr-4 h-6 w-6 flex-shrink-0" />
                  <span className="text-lg text-foreground">Industry-Recognized Certificates</span>
                </div>
                <div className="flex items-center">
                  <Zap className="text-primary mr-4 h-6 w-6 flex-shrink-0" />
                  <span className="text-lg text-foreground">Practical, Job-Ready Skills</span>
                </div>
              </div>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                  alt="Students learning" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Materials Notice */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-y border-blue-200 dark:border-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <span className="text-2xl">📚</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Course Materials & Resources
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Access additional study materials, course resources, and supplementary content to enhance your learning experience.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a 
              href="https://pu-study-hub.vercel.app/additional-resources" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Visit Study Hub
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 text-muted-foreground leading-relaxed">
            Whether you're a business looking to grow or someone eager to learn new skills, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 btn-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-border text-foreground hover:bg-muted">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
