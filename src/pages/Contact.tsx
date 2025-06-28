
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Ready to start your creative journey? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <CardTitle className="text-primary">Visit Our Office</CardTitle>
                        <CardDescription>Butwal-11, Kalikanagar</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <CardTitle className="text-primary">Call Us</CardTitle>
                        <CardDescription>9845323733</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <CardTitle className="text-primary">Email Us</CardTitle>
                        <CardDescription>
                          General: info@adspirelabs.com.np<br />
                          Training: training@adspirelabs.com.np
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/adspirelab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
                  >
                    📘
                  </a>
                  <a 
                    href="https://www.instagram.com/adspire.labs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors"
                  >
                    📷
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/adspire-labs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-light-accent transition-colors"
                  >
                    💼
                  </a>
                  <a 
                    href="https://www.tiktok.com/@adspirelabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-light-accent rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                  >
                    📱
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Forms */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send Us a Message</h2>
              
              {/* Business Inquiry Form */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-primary">Business Inquiries</CardTitle>
                  <CardDescription>
                    For website development, marketing, and design services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <p className="text-gray-600 mb-4">Business Contact Form</p>
                    <p className="text-sm text-gray-500">[Google Form will be embedded here]</p>
                  </div>
                </CardContent>
              </Card>

              {/* Course Application Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Course Applications</CardTitle>
                  <CardDescription>
                    Apply for our digital marketing, video editing, or filmmaking courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <p className="text-gray-600 mb-4">Course Application Form</p>
                    <p className="text-sm text-gray-500">[Google Form will be embedded here]</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Located in the heart of Butwal</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600 mb-2">Google Maps Integration</p>
                <p className="text-sm text-gray-500">Butwal-11, Kalikanagar</p>
                <a 
                  href="https://maps.app.goo.gl/fPtd1fk99duGSgW7A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent mt-2 inline-block"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mb-8">Read reviews from our satisfied customers</p>
          <a 
            href="https://maps.app.goo.gl/fPtd1fk99duGSgW7A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <span className="mr-2">⭐</span>
            View Google Reviews
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
