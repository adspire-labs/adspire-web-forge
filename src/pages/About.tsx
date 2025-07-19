import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart, GraduationCap, Building, Handshake, Trophy } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Saroj Pokhrel",
      role: "Founder",
      description: "Filmmaker trained at the University of Colorado Boulder, certified DaVinci Resolve trainer, with 8+ years of editing experience—leading Adspire Labs with creative vision.",
      image: "/team/saroj.jpg" // Path to team member image
    },
    {
      name: "Sandip Bhusal",
      role: "CMO",
      description: "Experienced marketer with 5+ years in branding, promotion, and strategy—leading growth and communication at Adspire Labs.",
      image: "/team/sandip.png" // Path to team member image
    },
    {
      name: "Riya Chaudhary",
      role: "COO",
      description: "COO of Adspire Labs, skilled graphic designer, video editor, and pre-production expert—combining creative strategy with visual storytelling and operational leadership.",
      image: "/team/riya.png" // Path to team member image
    },
    {
      name: "Rabin & Team",
      role: "Camera Crew",
      description: "Videographer and photographer with 5+ years of experience—capturing compelling visuals that bring stories to life at Adspire Labs.",
      image: "/team/rabin.jpg" // Path to team member image
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together to achieve extraordinary results"
    }
  ];

  const partners = [
    {
      name: "Cloth & Food Bank Nepal",
      description: "Social initiative providing essential items to communities in need",
      category: "Non-Profit",
      image: "/partners/cfbn.png" // Path to partner image
    },
    {
      name: "Siddhartha English Boarding School",
      description: "Educational institution focusing on digital business and entrepreneurship",
      category: "Education",
      image: "/partners/sebs.png" // Path to partner image
    },
    {
      name: "Nepathya College",
      description: "Academic institution committed to quality higher education",
      category: "Education", 
      image: "/partners/nc.png" // Path to partner image
    },
    {
      name: "Sky International College",
      description: "Premier educational institution providing world-class education",
      category: "Education",
      image: "/partners/sic.png" // Path to partner image
    },
    {
      name: "Organic Divine Group",
      description: "Leading organic products company promoting sustainable living",
      category: "Business",
      image: "/partners/odg.png" // Path to partner image
    },
    {
      name: "Samragyee Nirman Sewa",
      description: "Construction services with a focus on quality and sustainability",
      category: "Business",
      image: "/partners/sns.png" // Path to partner image
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern online store with advanced features",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete branding solution for local business",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800"
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      description: "Successful social media campaign driving 300% growth",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800"
    },
    {
      title: "Corporate Video",
      category: "Video Production",
      description: "Professional company introduction video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Unchanged */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">About Adspire Labs</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses and individuals through innovative digital solutions and comprehensive education
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Unchanged */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground">
                  To bridge the gap between traditional business practices and modern digital solutions, 
                  while nurturing the next generation of digital professionals through quality education and training.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground">
                  To become the leading creative agency and educational hub in Nepal, known for innovation, 
                  quality, and transforming lives through technology and creativity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values - Unchanged */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Team Section with Circular Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">Meet the passionate people behind Adspire Labs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <CardHeader>
                  {/* Circular image container - automatically sizes and crops to circle */}
                  <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Partners Section with Circular Images */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Partners</h2>
            <p className="text-lg text-muted-foreground">Organizations we're proud to work alongside</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {/* Circular partner logo - automatically sizes and crops to circle */}
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white border border-gray-200 shadow-sm">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{partner.name}</CardTitle>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">{partner.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Unchanged */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground">Some of our recent projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-primary text-sm font-medium">{item.category}</div>
                  <CardTitle className="text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;