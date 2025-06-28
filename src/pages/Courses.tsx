
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Digital Marketing Course",
      duration: "2 months",
      description: "Master Canva, CapCut, AI tools, and Meta Ads for effective digital marketing",
      price: "Contact for pricing",
      tools: ["Canva", "CapCut", "AI Tools", "Meta Ads Manager", "Analytics Tools"],
      icon: "📊",
      color: "from-primary to-accent"
    },
    {
      title: "Video Editing Course",
      duration: "2.5 months", 
      description: "Professional video editing with DaVinci Resolve",
      price: "Contact for pricing",
      tools: ["DaVinci Resolve", "Color Grading", "Audio Editing", "Motion Graphics"],
      icon: "✂️",
      color: "from-accent to-secondary"
    },
    {
      title: "Filmmaking & Video Production",
      duration: "5 months",
      description: "Complete filmmaking and video production training",
      price: "Contact for pricing", 
      tools: ["Camera Operation", "Lighting", "Audio Recording", "Post-Production", "Storytelling"],
      icon: "🎥",
      color: "from-secondary to-light-accent"
    },
    {
      title: "Graphic Design Course",
      duration: "3 months",
      description: "Professional graphic design using industry-standard tools",
      price: "Contact for pricing",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Brand Design", "Print Design"],
      icon: "🎨",
      color: "from-light-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Courses</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Learn industry-standard skills with hands-on training and real-world projects
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Enroll Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${course.color} p-6`}>
                  <div className="flex items-center text-white">
                    <span className="text-4xl mr-4">{course.icon}</span>
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-white/90">{course.description}</CardDescription>
                      <div className="flex items-center mt-2 space-x-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{course.duration}</span>
                        <span className="text-sm font-semibold">{course.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-4">Course Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-accent">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Highlight */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 mb-6">
              <span className="text-2xl mr-3">🏆</span>
              <span className="font-semibold">Proven Success</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Students Excel</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our team secured a position in the Business Plan Competition through our Adspire Skill Share program, 
              proving the effectiveness of our practical training approach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-gray-600">Fill out the form below or contact us directly</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">Apply for any course or get more information</p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Training Programs:</strong> training@adspirelabs.com.np
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> 9845323733
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <p className="text-gray-600 mb-4">Course Application Form</p>
              <p className="text-sm text-gray-500">[Google Form will be embedded here]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
