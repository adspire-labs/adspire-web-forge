
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, Zap, Monitor, Smartphone, Video, Palette, Shield } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers",
      icon: Monitor
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive real business growth",
      icon: Smartphone
    },
    {
      title: "Video Production",
      description: "Compelling visual stories that engage your audience",
      icon: Video
    },
    {
      title: "Graphic Design",
      description: "Brand identity that makes you stand out",
      icon: Palette
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "200+", label: "Students Trained" },
    { number: "3", label: "Years Experience" }
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
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-6" />
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

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Whether you're a business looking to grow or someone eager to learn new skills, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
