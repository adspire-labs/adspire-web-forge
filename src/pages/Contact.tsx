
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Star } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Ready to start your creative journey? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <MapPin className="text-primary-foreground w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">Visit Our Office</CardTitle>
                        <CardDescription>Butwal-11, Kalikanagar</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Phone className="text-accent-foreground w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">Call Us</CardTitle>
                        <CardDescription>9845323733</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Mail className="text-secondary-foreground w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">Email Us</CardTitle>
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
                <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/adspirelab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/adspire.labs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/adspire-labs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@adspirelabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Forms */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              
              {/* Business Inquiry Form */}
              <Card className="mb-8 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Business Inquiries</CardTitle>
                  <CardDescription>
                    For website development, marketing, and design services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-muted-foreground mb-4">Business Contact Form</p>
                    <p className="text-sm text-muted-foreground">[Google Form will be embedded here]</p>
                  </div>
                </CardContent>
              </Card>

              {/* Course Application Form */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Course Applications</CardTitle>
                  <CardDescription>
                    Apply for our digital marketing, video editing, or filmmaking courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-muted-foreground mb-4">Course Application Form</p>
                    <p className="text-sm text-muted-foreground">[Google Form will be embedded here]</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">Find Us</h2>
            <p className="text-lg text-muted-foreground">Located in the heart of Butwal</p>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-foreground mb-2 font-medium">Google Maps Integration</p>
                <p className="text-sm text-muted-foreground">Butwal-11, Kalikanagar</p>
                <a 
                  href="https://maps.app.goo.gl/fPtd1fk99duGSgW7A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent mt-2 inline-block font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mb-8">Read reviews from our satisfied customers</p>
          <a 
            href="https://maps.app.goo.gl/fPtd1fk99duGSgW7A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors btn-hover"
          >
            <Star className="w-5 h-5 mr-2" />
            View Google Reviews
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
