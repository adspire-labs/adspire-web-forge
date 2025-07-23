'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, CheckCircle, XCircle, QrCode } from 'lucide-react';
import couponsData from '@/data/coupons.json';

interface Coupon {
  couponCode: string;
  validFrom: string;
  validUntil: string;
  discountPercentage: number;
  status: 'active' | 'used' | 'expired';
}

const CouponVerification = () => {
  const [couponCode, setCouponCode] = useState('');
  const [searchResult, setSearchResult] = useState<Coupon | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scannerOpen, setScannerOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleSearch = async () => {
    if (!couponCode.trim()) return;
    
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const found = couponsData.coupons.find(
      coupon => coupon.couponCode.toLowerCase() === couponCode.toLowerCase()
    );
    
    setSearchResult(found || null);
    setIsSearched(true);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const openScanner = async () => {
    setScannerOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setScannerOpen(false);
    }
  };

  const closeScanner = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setScannerOpen(false);
  };

  const handleScan = (code: string) => {
    setCouponCode(code);
    closeScanner();
    handleSearch();
  };

  // Reset search state when input changes
  useEffect(() => {
    if (couponCode) {
      setIsSearched(false);
      setSearchResult(null);
    }
  }, [couponCode]);

  // QR code detection
  useEffect(() => {
    if (!scannerOpen || !videoRef.current) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let animationFrame: number;

    const detectQR = () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        
        context?.drawImage(
          videoRef.current, 
          0, 
          0, 
          canvas.width, 
          canvas.height
        );
        
        const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
        // Simple QR detection simulation (in real app use a library like jsQR)
        if (imageData && Math.random() > 0.9) {
          const fakeCode = `CPN-${Math.floor(1000 + Math.random() * 9000)}`;
          handleScan(fakeCode);
        }
      }
      animationFrame = requestAnimationFrame(detectQR);
    };

    detectQR();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [scannerOpen]);

  // Format dates for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Check coupon validity - Corrected logic
  const checkCouponValidity = (coupon: Coupon) => {
    const now = new Date();
    const validFrom = new Date(coupon.validFrom);
    const validUntil = new Date(coupon.validUntil);
    
    // First check explicit status
    if (coupon.status === 'used') return 'used';
    
    // Then check dates regardless of status
    if (now < validFrom) return 'not-started';
    if (now > validUntil) return 'expired';
    
    // Only return 'valid' if status is active AND within date range
    return coupon.status === 'active' ? 'valid' : 'expired';
  };

  const getValidityMessage = (status: string) => {
    switch (status) {
      case 'used': return 'This coupon has already been used';
      case 'expired': return 'This coupon has expired';
      case 'not-started': return 'This coupon is not yet valid';
      default: return 'This coupon is valid and active';
    }
  };

  // Get status color for UI
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid': return 'text-green-600';
      case 'used': return 'text-yellow-600';
      case 'expired': return 'text-red-600';
      case 'not-started': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  // Get card color based on validity
  const getCardColor = (status: string) => {
    switch (status) {
      case 'valid': 
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      case 'expired':
      case 'used':
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      case 'not-started':
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
      default:
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";
    }
  };

  // Get icon based on validity
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid': 
        return <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />;
      default:
        return <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <QrCode className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coupon Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verify coupon codes for discounts and special offers
          </p>
        </div>

        {/* Search Card */}
        <Card className="bg-card border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-primary">Enter Coupon Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="e.g., SUMMER25"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-background border-border"
              />
              <Button 
                onClick={handleSearch} 
                disabled={isLoading || !couponCode.trim()}
                className="px-8 btn-primary"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Verify
                  </>
                )}
              </Button>
              <Button 
                variant="outline"
                onClick={scannerOpen ? closeScanner : openScanner}
              >
                <QrCode className="w-4 h-4 mr-2" />
                {scannerOpen ? 'Close Scanner' : 'Scan QR'}
              </Button>
            </div>

            {/* QR Scanner */}
            {scannerOpen && (
              <div className="mt-4 border rounded-lg overflow-hidden">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-64 object-cover"
                />
                <p className="text-center py-2 bg-muted text-muted-foreground">
                  Scanning QR code...
                </p>
              </div>
            )}

            {/* Results */}
            {isSearched && (
              <div className="mt-8">
                {searchResult ? (
                  (() => {
                    const validityStatus = checkCouponValidity(searchResult);
                    return (
                      <Card className={getCardColor(validityStatus)}>
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            {getStatusIcon(validityStatus)}
                            <h3 className="text-lg font-semibold">
                              {validityStatus === 'valid' 
                                ? "Coupon Valid" 
                                : "Coupon Not Valid"}
                            </h3>
                          </div>
                          <div className="grid gap-3 text-sm">
                            <div className="flex justify-between">
                              <span className="font-medium text-muted-foreground">Coupon Code:</span>
                              <span className="text-foreground font-mono">{searchResult.couponCode}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-muted-foreground">Discount:</span>
                              <span className="text-foreground">{searchResult.discountPercentage}% OFF</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-muted-foreground">Valid From:</span>
                              <span className="text-foreground">{formatDate(searchResult.validFrom)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-muted-foreground">Valid Until:</span>
                              <span className="text-foreground">{formatDate(searchResult.validUntil)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-muted-foreground">Status:</span>
                              <span className={`font-medium ${getStatusColor(validityStatus)}`}>
                                {validityStatus.charAt(0).toUpperCase() + validityStatus.slice(1)}
                              </span>
                            </div>
                            <div className="mt-3 pt-3 border-t">
                              <p className={getStatusColor(validityStatus)}>
                                {getValidityMessage(validityStatus)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })()
                ) : (
                  <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
                          Coupon Not Found
                        </h3>
                      </div>
                      <p className="text-red-700 dark:text-red-400">
                        No coupon found with code "{couponCode}". 
                        Please check the code and try again.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">How to Use Coupons</h3>
              <ul className="text-muted-foreground text-left max-w-xl mx-auto space-y-2">
                <li>• Enter your coupon code manually or scan the QR code</li>
                <li>• Valid coupons will show discount percentage and validity period</li>
                <li>• Each coupon can only be used once</li>
                <li>• Coupons are valid only within the specified dates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CouponVerification;