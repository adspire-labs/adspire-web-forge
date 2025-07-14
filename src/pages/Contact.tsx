
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
              
                </div>
              </div>
            </div>

            {/* Contact Forms */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              
              {/* Business WhatsApp Contact */}
              <Card className="mb-8 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Business Inquiries</CardTitle>
                  <CardDescription>
                    For website development, marketing, and design services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <a 
                      href="https://wa.me/9779845323733?text=Hi%20Adspire%20Labs!%20I%20am%20interested%20in%20your%20business%20services.%20Could%20you%20please%20provide%20more%20information%20about%20website%20development,%20marketing,%20and%20design%20services?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Get instant response for business inquiries</p>
                  </div>
                </CardContent>
              </Card>

              {/* Course WhatsApp Contact */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Course Applications</CardTitle>
                  <CardDescription>
                    Apply for our digital marketing, video editing, or filmmaking courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <a 
                      href="https://wa.me/9779845323733?text=Hi%20Adspire%20Labs!%20I%20am%20interested%20in%20your%20courses.%20Could%20you%20please%20provide%20more%20information%20about%20digital%20marketing,%20video%20editing,%20and%20filmmaking%20courses?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Get instant response for course inquiries</p>
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
      <div className="aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2689571435517!2d83.4604016!3d27.678081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968502ce946857%3A0x15323e541ed934b6!2sAdspire%20Labs!5e0!3m2!1sen!2snp!4v1752043819118!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
