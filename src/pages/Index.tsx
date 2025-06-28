
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, Zap, Monitor, Smartphone, Video, Palette } from "lucide-react";

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
      <section className="relative bg-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Creative Agency in <span className="text-primary">Butwal</span> That Builds Brands That <span className="text-primary">Inspire</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed px-4">
              Creativity that Converts. Execution that Inspires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto btn-hover">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto btn-hover">
                <Link to="/courses">
                  Join a Course
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">What We Do</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We help businesses grow through strategic digital solutions and creative excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 md:p-8 text-center">
                  <service.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4 md:mb-6" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Button asChild variant="outline" size="lg" className="px-6 md:px-8 btn-hover">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">Learn From Industry Experts</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Master in-demand skills with hands-on training programs designed for the modern digital landscape.
              </p>
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex items-center">
                  <Users className="text-primary mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span className="text-base md:text-lg text-gray-700">200+ Students Trained</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-primary mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span className="text-base md:text-lg text-gray-700">Industry-Recognized Certificates</span>
                </div>
                <div className="flex items-center">
                  <Zap className="text-primary mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span className="text-base md:text-lg text-gray-700">Practical, Job-Ready Skills</span>
                </div>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto btn-hover">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
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
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 md:mb-12 opacity-90 leading-relaxed">
            Whether you're a business looking to grow or someone eager to learn new skills, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto btn-hover">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary btn-hover">
              <Link to="/about">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
