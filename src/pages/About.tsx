
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Saroj Pokhrel",
      role: "Founder",
      description: "Visionary leader driving creative excellence and business growth",
      image: "👨‍💼"
    },
    {
      name: "Sandip Bhusal",
      role: "Chief Marketing Officer",
      description: "Strategic marketing expert with deep industry knowledge",
      image: "👨‍💻"
    },
    {
      name: "Riya",
      role: "Chief Operating Officer",
      description: "Operations specialist ensuring seamless project delivery",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Adspire Labs</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              We're a creative agency in Butwal dedicated to building brands that inspire through innovative design, strategic marketing, and professional education.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Adspire Labs was founded with a vision to bridge the gap between creative excellence and business success. Located in the heart of Butwal-11, Kalikanagar, we've built our reputation on delivering results that matter.
                </p>
                <p>
                  Our journey began with a simple belief: creativity should convert, and execution should inspire. This philosophy drives everything we do, from the websites we develop to the courses we teach.
                </p>
                <p>
                  We're proud that our team secured a position in the Business Plan Competition through the Adspire Skill Share program, demonstrating our commitment to both education and practical business success.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-6">
                To empower businesses and individuals in Nepal through creative solutions and professional education that drives real-world success.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>
                To be Nepal's leading creative agency and education hub, known for innovation, excellence, and transformative results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The creative minds behind Adspire Labs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project, delivering quality that exceeds expectations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and creative approaches to solve complex challenges.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Partnership</h3>
              <p className="text-gray-600">We build lasting relationships with our clients, partners, and students.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-light-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
              <p className="text-gray-600">We believe in empowering others through knowledge and practical skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Highlight */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 mb-6">
              <span className="text-2xl mr-3">🏆</span>
              <span className="font-semibold">Achievement Highlight</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Plan Competition Success</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our team secured a position in the Business Plan Competition through our Adspire Skill Share program, 
              showcasing our commitment to practical education and real-world business success.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Located in the heart of Butwal</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-primary mb-4">Adspire Labs</h3>
            <p className="text-lg text-gray-600 mb-4">Butwal-11, Kalikanagar</p>
            <p className="text-lg text-gray-600 mb-6">📞 9845323733</p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>General Inquiries:</strong> info@adspirelabs.com.np
              </p>
              <p className="text-gray-600">
                <strong>Training Programs:</strong> training@adspirelabs.com.np
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
