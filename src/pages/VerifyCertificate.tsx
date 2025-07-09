import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, CheckCircle, XCircle, Award } from 'lucide-react';
import certificatesData from '@/data/certificates.json';

interface Certificate {
  certificateNumber: string;
  studentName: string;
  courseCompleted: string;
  completionDate: string;
  courseDuration: string;
}

const VerifyCertificate = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [searchResult, setSearchResult] = useState<Certificate | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayResult, setDisplayResult] = useState<Certificate | null>(null);

  const handleSearch = async () => {
    if (!certificateNumber.trim()) return;
    
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const found = certificatesData.certificates.find(
      cert => cert.certificateNumber.toLowerCase() === certificateNumber.toLowerCase()
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

  // Reset search state when input changes
  useEffect(() => {
    if (certificateNumber) {
      setIsSearched(false);
      setSearchResult(null);
    }
  }, [certificateNumber]);

  // Sync display result with search result
  useEffect(() => {
    if (isSearched) {
      setDisplayResult(searchResult);
    }
  }, [isSearched, searchResult]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificate Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verify the authenticity of certificates issued by Adspire Labs
          </p>
        </div>

        {/* Search Card */}
        <Card className="bg-card border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-primary">Enter Certificate Number</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="e.g., ADSP-2024-001"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-background border-border"
              />
              <Button 
                onClick={handleSearch} 
                disabled={isLoading || !certificateNumber.trim()}
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
            </div>

            {/* Results */}
            {isSearched && (
              <div className="mt-8">
                {displayResult ? (
                  <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                          Certificate Verified
                        </h3>
                      </div>
                      <div className="grid gap-3 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium text-muted-foreground">Student Name:</span>
                          <span className="text-foreground">{displayResult.studentName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-muted-foreground">Course:</span>
                          <span className="text-foreground">{displayResult.courseCompleted}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-muted-foreground">Completion Date:</span>
                          <span className="text-foreground">{displayResult.completionDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-muted-foreground">Duration:</span>
                          <span className="text-foreground">{displayResult.courseDuration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-muted-foreground">Certificate ID:</span>
                          <span className="text-foreground font-mono">{displayResult.certificateNumber}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
                          Certificate Not Found
                        </h3>
                      </div>
                      <p className="text-red-700 dark:text-red-400">
                        No certificate found with the number "{certificateNumber}". 
                        Please check the certificate number and try again.
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
              <h3 className="text-lg font-semibold text-foreground mb-3">How to Find Your Certificate Number</h3>
              <p className="text-muted-foreground">
                Your certificate number is located at the bottom of your digital certificate. 
                It follows the format ADSP-YYYY-XXX where YYYY is the year and XXX is the certificate sequence number.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;