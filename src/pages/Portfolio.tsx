
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const clients = [
    "Organic Divine Group",
    "Samragyee Nirman Sewa", 
    "4D Architect",
    "Mansoon Ply",
    "Build Sansar Nepal"
  ];

  const services = [
    {
      title: "Website Development",
      description: "Modern, responsive websites",
      icon: "🌐"
    },
    {
      title: "Video Production", 
      description: "Reels and storytelling ads",
      icon: "🎬"
    },
    {
      title: "Graphic Design",
      description: "Branding and visual identity",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Social media and online campaigns",
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Showcasing creative work that drives results for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Create</h2>
            <p className="text-lg text-gray-600">Our expertise across multiple creative disciplines</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Video Portfolio</h2>
            <p className="text-lg text-gray-600">Our latest video content and advertisements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for YouTube embeds */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-gray-600">YouTube Video 1</p>
                  <p className="text-sm text-gray-500">[To be embedded]</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary mb-2">Promotional Video</h3>
                <p className="text-sm text-gray-600">Client: Organic Divine Group</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-gray-600">YouTube Video 2</p>
                  <p className="text-sm text-gray-500">[To be embedded]</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary mb-2">Brand Story</h3>
                <p className="text-sm text-gray-600">Client: 4D Architect</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-gray-600">Social Media Reel</p>
                  <p className="text-sm text-gray-500">[To be embedded]</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary mb-2">Instagram Reel</h3>
                <p className="text-sm text-gray-600">Client: Mansoon Ply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Photography Portfolio</h2>
            <p className="text-lg text-gray-600">Product and portrait photography</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portrait placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">👤</div>
                  <p className="text-gray-600">Portrait Photo</p>
                  <p className="text-sm text-gray-500">[Placeholder]</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary">Professional Portraits</h3>
              </div>
            </div>
            {/* Landscape placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏞️</div>
                  <p className="text-gray-600">Landscape Photo</p>
                  <p className="text-sm text-gray-500">[Placeholder]</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary">Product Photography</h3>
              </div>
            </div>
            {/* Another portrait placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-gray-600">Event Photo</p>
                  <p className="text-sm text-gray-500">[Placeholder]</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary">Event Photography</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600">Trusted by leading businesses in Nepal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <p className="font-semibold text-primary">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
