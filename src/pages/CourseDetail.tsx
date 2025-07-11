import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Award, BookOpen, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  
  const courses = {
    "digital-marketing-mastery": {
      title: "Digital Marketing Mastery",
      duration: "2 months",
      price: "NPR 20,000",
      description: "Master the art of digital marketing with hands-on training in modern tools and strategies",
      tools: ["Canva", "CapCut", "AI Tools", "Meta Ads Manager", "Google Analytics"],
      highlights: [
        "Social Media Marketing",
        "Content Creation", 
        "Paid Advertising",
        "Analytics & Reporting",
        "AI-powered Marketing"
      ],
      icon: "📱",
      whatsappMessage: "Hi! I'm interested in the Digital Marketing Mastery course. Can you provide more details about enrollment and schedule?",
      modules: [
        {
          title: "Week 1-2: Digital Marketing Fundamentals",
          topics: ["Digital Marketing Overview", "Consumer Behavior Online", "Digital Marketing Strategy", "Platform Analysis"]
        },
        {
          title: "Week 3-4: Social Media Marketing",
          topics: ["Facebook & Instagram Marketing", "Content Planning", "Engagement Strategies", "Community Management"]
        },
        {
          title: "Week 5-6: Content Creation & Design",
          topics: ["Canva Mastery", "Visual Content Strategy", "Video Content with CapCut", "Brand Consistency"]
        },
        {
          title: "Week 7-8: Paid Advertising & Analytics",
          topics: ["Meta Ads Manager", "Google Ads Basics", "Analytics Setup", "ROI Measurement"]
        }
      ],
      prerequisites: "Basic computer skills and internet knowledge",
      certification: "Adspire Labs Digital Marketing Certificate",
      careerOutcomes: [
        "Digital Marketing Specialist",
        "Social Media Manager", 
        "Content Marketing Executive",
        "Freelance Digital Marketer"
      ]
    },
    "video-editing-professional": {
      title: "Video Editing Professional",
      duration: "2.5 months",
      price: "NPR 25,000",
      description: "Become a professional video editor with comprehensive training in industry-standard software",
      tools: ["DaVinci Resolve", "Advance Editing", "Basic Animation", "Basic Color Grading", "Basic Audio Editing"],
      highlights: [
        "Professional Video Editing",
        "Color Correction & Grading",
        "Motion Graphics",
        "Audio Synchronization", 
        "Export Optimization"
      ],
      icon: "🎬",
      whatsappMessage: "Hi! I'm interested in the Video Editing Professional course. Can you share details about the curriculum and enrollment process?",
      modules: [
        {
          title: "Week 1-2: DaVinci Resolve Basics",
          topics: ["Interface Overview", "Import & Organization", "Basic Cuts & Trims", "Timeline Management"]
        },
        {
          title: "Week 3-4: Advanced Editing Techniques",
          topics: ["Multi-cam Editing", "Keyframe Animation", "Effects & Transitions", "Speed & Time Manipulation"]
        },
        {
          title: "Week 5-6: Color Grading & Correction",
          topics: ["Color Theory", "Primary Corrections", "Secondary Grading", "LUTs & Styles"]
        },
        {
          title: "Week 7-8: Audio & Final Output",
          topics: ["Audio Editing", "Sound Design", "Export Settings", "Delivery Formats"]
        },
        {
          title: "Week 9-10: Portfolio Projects",
          topics: ["Client Work Simulation", "Portfolio Development", "Industry Standards", "Career Guidance"]
        }
      ],
      prerequisites: "Basic computer skills, creative mindset",
      certification: "Professional Video Editor Certificate",
      careerOutcomes: [
        "Video Editor",
        "YouTube Content Creator",
        "Freelance Editor",
        "Post-Production Specialist"
      ]
    },
    "filmmaking-video-production": {
      title: "Filmmaking & Video Production",
      duration: "5 months", 
      price: "NPR 50,000",
      description: "Complete filmmaking course from pre-production to post-production",
      tools: ["Camera Operation", "Lighting", "Audio Recording", "Shooting", "Drones", "Editing Software", "Sound Design"],
      highlights: [
        "Script Writing",
        "Camera Techniques",
        "Lighting Setup",
        "Sound Design",
        "Film Editing"
      ],
      icon: "🎥",
      whatsappMessage: "Hi! I'm interested in the Filmmaking & Video Production course. Could you provide information about the 5-month program and equipment provided?",
      modules: [
        {
          title: "Month 1: Pre-Production",
          topics: ["Script Writing", "Storyboarding", "Shot Planning", "Production Scheduling"]
        },
        {
          title: "Month 2: Camera & Lighting",
          topics: ["Camera Operation", "Lens Selection", "Lighting Setups", "Composition Techniques"]
        },
        {
          title: "Month 3: Audio & Advanced Shooting",
          topics: ["Audio Recording", "Microphone Techniques", "Drone Operation", "Advanced Camera Work"]
        },
        {
          title: "Month 4: Post-Production",
          topics: ["Professional Editing", "Color Grading", "Sound Design", "Visual Effects"]
        },
        {
          title: "Month 5: Final Projects",
          topics: ["Short Film Production", "Portfolio Creation", "Industry Networking", "Career Development"]
        }
      ],
      prerequisites: "Creative passion, basic technical aptitude",
      certification: "Professional Filmmaker Certificate",
      careerOutcomes: [
        "Independent Filmmaker",
        "Video Production Specialist",
        "Documentary Maker",
        "Commercial Video Producer"
      ]
    },
    "graphic-design-fundamentals": {
      title: "Graphic Design Fundamentals",
      duration: "2 months",
      price: "NPR 20,000",
      description: "Master graphic design principles and create stunning visual communications",
      tools: ["Adobe Photoshop", "Illustrator", "Canva Pro"],
      highlights: [
        "Logo Design",
        "Brand Identity", 
        "Print Design",
        "Digital Graphics",
        "Design Principles"
      ],
      icon: "🎨",
      whatsappMessage: "Hi! I'm interested in the Graphic Design Fundamentals course. Can you tell me more about the software training and portfolio development?",
      modules: [
        {
          title: "Week 1-2: Design Principles",
          topics: ["Color Theory", "Typography", "Layout Principles", "Visual Hierarchy"]
        },
        {
          title: "Week 3-4: Adobe Photoshop",
          topics: ["Interface & Tools", "Photo Editing", "Digital Art", "Web Graphics"]
        },
        {
          title: "Week 5-6: Adobe Illustrator",
          topics: ["Vector Graphics", "Logo Design", "Icon Creation", "Print Design"]
        },
        {
          title: "Week 7-8: Brand Identity & Portfolio",
          topics: ["Brand Development", "Portfolio Creation", "Client Presentation", "Freelancing Tips"]
        }
      ],
      prerequisites: "Creative interest, basic computer skills",
      certification: "Graphic Design Professional Certificate",
      careerOutcomes: [
        "Graphic Designer",
        "Brand Designer",
        "Freelance Designer",
        "Marketing Design Specialist"
      ]
    }
  };

  const course = courses[courseSlug as keyof typeof courses];

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

  const whatsappUrl = `https://wa.me/9779845323733?text=${encodeURIComponent(course.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{course.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-card border border-border rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold text-foreground">{course.duration}</span>
                </div>
                <div className="flex items-center bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enroll via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Course Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
            {course.modules.map((module, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">{module.title}</CardTitle>
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
                {course.careerOutcomes.map((outcome, idx) => (
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
                <p className="text-muted-foreground">{course.certification}</p>
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