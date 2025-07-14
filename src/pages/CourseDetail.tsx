import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Award, BookOpen, CheckCircle, ArrowLeft, MessageCircle, Smartphone, Video, Camera, Palette } from "lucide-react";
import coursesData from "@/data/courses.json";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  
  // Find course by ID from JSON data
  const course = coursesData.courses.find(c => c.id === courseSlug);

  const iconComponents = {
    Smartphone: <Smartphone className="h-8 w-8" />,
    Video: <Video className="h-8 w-8" />,
    Camera: <Camera className="h-8 w-8" />,
    Palette: <Palette className="h-8 w-8" />
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Button asChild className="btn-primary">
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hi! I'm interested in the ${course.title} course. Can you provide more details about enrollment and schedule?`;
  const whatsappUrl = `https://wa.me/9779845323733?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Blurred Background */}
      <section className="relative overflow-hidden">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link to="/courses" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block mb-6">
                  {iconComponents[course.icon]}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{course.title}</h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 text-white mr-2" />
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                  </div>
                </div>
              
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enroll via WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Award className="w-5 h-5 mr-2 text-white" />
                      Course Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-white/90">
                          <CheckCircle className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Course Curriculum</h2>
            <p className="text-xl text-muted-foreground">Detailed breakdown of what you'll learn</p>
          </div>
          
          <div className="space-y-6">
            {course.curriculum.map((module, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">{module.week}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Tools & Software</h3>
              <div className="flex flex-wrap gap-3">
                {course.tools.map((tool, idx) => (
                  <span key={idx} className="bg-card text-foreground px-4 py-2 rounded-full border border-border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Career Outcomes</h3>
              <ul className="space-y-3">
                {course.careerOpportunities.map((outcome, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  Prerequisites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.prerequisites}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Adspire Labs Professional Certificate</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Class Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Maximum 10 students per batch for personalized attention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join our {course.title} course and transform your skills with hands-on training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Enroll Now via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;