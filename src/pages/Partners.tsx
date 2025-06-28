
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      name: "Cloth & Food Bank Nepal",
      description: "Social initiative providing essential items to communities in need",
      category: "Non-Profit",
      icon: "🤝"
    },
    {
      name: "Siddhartha E-Business School",
      description: "Educational institution focusing on digital business and entrepreneurship",
      category: "Education",
      icon: "🎓"
    },
    {
      name: "Nepathya College",
      description: "Academic institution committed to quality higher education",
      category: "Education", 
      icon: "📚"
    },
    {
      name: "Organic Divine Group",
      description: "Leading organic products company promoting sustainable living",
      category: "Business",
      icon: "🌱"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Collaborative Growth",
      description: "Working together to achieve mutual success and expansion",
      icon: "📈"
    },
    {
      title: "Skill Development",
      description: "Joint training programs and knowledge sharing initiatives",
      icon: "💡"
    },
    {
      title: "Community Impact",
      description: "Creating positive change in the Butwal community together",
      icon: "🌟"
    },
    {
      title: "Innovation Focus",
      description: "Combining expertise to develop innovative solutions",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Building strong relationships with organizations that share our vision for growth and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted Partners</h2>
            <p className="text-lg text-gray-600">Organizations we're proud to work alongside</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white">{partner.icon}</span>
                    </div>
                    <div>
                      <CardTitle className="text-primary">{partner.name}</CardTitle>
                      <span className="bg-light-accent text-white px-3 py-1 rounded-full text-sm">
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

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-600">How we create value together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg text-white p-12">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl mr-3">🏆</span>
                <span className="font-semibold">Partnership Success</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Adspire Skill Share Program</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Through our collaborative partnerships, our team secured a position in the Business Plan Competition, 
                demonstrating the power of working together toward common goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Become Our Partner</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in exploring partnership opportunities? Let's discuss how we can work together 
            to create meaningful impact in our community.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Partnership Inquiries:</strong> info@adspirelabs.com.np
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> 9845323733
              </p>
              <p className="text-gray-600">
                <strong>Office:</strong> Butwal-11, Kalikanagar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
