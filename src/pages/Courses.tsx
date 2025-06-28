
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Award, BookOpen } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Digital Marketing Mastery",
      duration: "2 months",
      price: "NPR 15,000",
      description: "Master the art of digital marketing with hands-on training in modern tools and strategies",
      tools: ["Canva", "CapCut", "AI Tools", "Meta Ads Manager", "Google Analytics"],
      highlights: [
        "Social Media Marketing",
        "Content Creation",
        "Paid Advertising",
        "Analytics & Reporting",
        "AI-powered Marketing"
      ],
      icon: "📱"
    },
    {
      title: "Video Editing Professional",
      duration: "2.5 months", 
      price: "NPR 18,000",
      description: "Become a professional video editor with comprehensive training in industry-standard software",
      tools: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Color Grading", "Audio Editing"],
      highlights: [
        "Professional Video Editing",
        "Color Correction & Grading",
        "Motion Graphics",
        "Audio Synchronization",
        "Export Optimization"
      ],
      icon: "🎬"
    },
    {
      title: "Filmmaking & Video Production",
      duration: "5 months",
      price: "NPR 35,000",
      description: "Complete filmmaking course from pre-production to post-production",
      tools: ["Camera Operation", "Lighting", "Audio Recording", "Directing", "Post-Production"],
      highlights: [
        "Script Writing",
        "Camera Techniques",
        "Lighting Setup",
        "Sound Design",
        "Film Editing"
      ],
      icon: "🎥"
    },
    {
      title: "Graphic Design Fundamentals",
      duration: "3 months",
      price: "NPR 20,000", 
      description: "Master graphic design principles and create stunning visual communications",
      tools: ["Adobe Photoshop", "Illustrator", "InDesign", "Canva Pro", "Figma"],
      highlights: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
        "Design Principles"
      ],
      icon: "🎨"
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Small Class Sizes",
      description: "Maximum 10 students per batch for personalized attention"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Certification",
      description: "Recognized certificates to boost your career prospects"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Practical Learning",
      description: "Real-world projects and hands-on experience"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Training Courses</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Learn in-demand digital skills from industry experts and launch your creative career
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                200+ Students Trained
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5" />
                Industry Recognized
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Practical Learning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Comprehensive courses designed for real-world success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{course.icon}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tools & Software:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.tools.map((tool, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
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
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join hundreds of students who have transformed their careers with our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
