
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers",
      icon: "🌐"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that grow your brand and increase sales",
      icon: "📱"
    },
    {
      title: "Graphic Design",
      description: "Visual identity that makes your brand memorable and professional",
      icon: "🎨"
    },
    {
      title: "Video Production",
      description: "Compelling video content that tells your story and engages audiences",
      icon: "🎬"
    }
  ];

  const courses = [
    {
      title: "Digital Marketing Course",
      duration: "2 months",
      description: "Master Canva, CapCut, AI tools, and Meta Ads",
      icon: "📊"
    },
    {
      title: "Video Editing Course",
      duration: "2.5 months",
      description: "Professional video editing with DaVinci Resolve",
      icon: "✂️"
    },
    {
      title: "Filmmaking Course",
      duration: "5 months",
      description: "Complete filmmaking and video production training",
      icon: "🎥"
    }
  ];

  const partners = [
    "Cloth & Food Bank Nepal",
    "Siddhartha E-Business School",
    "Nepathya College",
    "Organic Divine Group"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creative Agency in Butwal<br />
              <span className="text-light-accent">That Builds Brands That Inspire</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Creativity that Converts. Execution that Inspires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/courses">Join a Course</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Professional solutions for your business growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-primary hover:bg-accent">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Learn with Us</h2>
            <p className="text-lg text-gray-600">Professional courses designed for real-world success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl">{course.icon}</div>
                    <span className="bg-light-accent text-white px-3 py-1 rounded-full text-sm">
                      {course.duration}
                    </span>
                  </div>
                  <CardTitle className="text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-primary hover:bg-accent">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600">Trusted by leading organizations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-center font-medium text-gray-800">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Success stories from businesses we've helped grow</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-6">
                <p className="mb-4">"Adspire Labs transformed our online presence completely. Their creative approach and professional execution exceeded our expectations."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold mr-3">
                    O
                  </div>
                  <div>
                    <p className="font-semibold">Organic Divine Group</p>
                    <p className="text-sm opacity-90">Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-600">"The video editing course was incredibly practical. I learned industry-standard techniques that I use in my work every day."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    S
                  </div>
                  <div>
                    <p className="font-semibold">Course Student</p>
                    <p className="text-sm text-gray-500">Video Editing Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-600">"Professional service, creative solutions, and excellent results. Adspire Labs is our go-to creative partner."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">4D Architect</p>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="https://maps.app.goo.gl/fPtd1fk99duGSgW7A" target="_blank" rel="noopener noreferrer">
                View Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Whether you need creative services or want to learn new skills, we're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Contact Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/courses">Join Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
