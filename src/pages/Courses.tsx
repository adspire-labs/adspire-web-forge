
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Award, BookOpen, Smartphone, Video, Camera, Palette } from "lucide-react";
import coursesData from "@/data/courses.json";

const Courses = () => {
  const courses = coursesData.courses;
  
  const iconComponents = {
    Users: <Users className="h-6 w-6" />,
    Award: <Award className="h-6 w-6" />,
    BookOpen: <BookOpen className="h-6 w-6" />,
    Smartphone: <Smartphone className="h-8 w-8" />,
    Video: <Video className="h-8 w-8" />,
    Camera: <Camera className="h-8 w-8" />,
    Palette: <Palette className="h-8 w-8" />
  };

  const features = coursesData.features.map(feature => ({
    ...feature,
    icon: iconComponents[feature.icon] || feature.icon
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h1 className="section-title">Our Courses</h1>
            <p className="section-subtitle">
              Professional training programs to boost your digital skills
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Path</h2>
            <p className="text-xl text-muted-foreground">Comprehensive courses designed for real-world success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card border-border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                    {iconComponents[course.icon]}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-foreground">{course.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tools & Software:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.tools.map((tool, idx) => (
                        <span key={idx} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 btn-primary">
                      <Link to={`/courses/${course.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-border text-foreground hover:bg-muted">
                      <Link to="/contact">Enroll Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join hundreds of students who have transformed their careers with our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
