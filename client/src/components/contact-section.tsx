import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t("문의가 접수되었습니다", "Your inquiry has been received"),
        description: t("빠른 시일 내에 연락드리겠습니다", "We will contact you soon"),
      });
      
      setFormData({ name: "", email: "", interest: "", message: "" });
    } catch (error) {
      toast({
        title: t("오류가 발생했습니다", "An error occurred"),
        description: t("다시 시도해 주세요", "Please try again"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadBrochure = () => {
    toast({
      title: t("브로셔 다운로드", "Brochure Download"),
      description: t("브로셔 다운로드 기능을 준비 중입니다.", "Brochure download feature is being prepared."),
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      bgColor: "bg-mongolian-100",
      iconColor: "text-mongolian-600",
      title: "invest@mongolianequestrianshow.com",
      description: t("투자 관련 문의", "Investment inquiries")
    },
    {
      icon: "📱",
      bgColor: "bg-earth-100",
      iconColor: "text-earth-600",
      title: "+855 12 345 678",
      description: t("캄보디아 현지 연락처", "Cambodia local contact")
    },
    {
      icon: "📍",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: t("시엠립, 캄보디아", "Siem Reap, Cambodia"),
      description: t("앙코르와트 인근 예정지", "Near Angkor Wat complex")
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📞 {t("투자 문의", "Investment Inquiry")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("함께 만들어갈 성공적인 투자 기회에 대해 논의해보세요", "Let's discuss this successful investment opportunity together")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="earth-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("연락처 정보", "Contact Information")}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                    <span className={info.iconColor}>{info.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{info.title}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={handleDownloadBrochure}
                className="w-full bg-mongolian-600 text-white hover:bg-mongolian-700 transition-colors duration-200"
                size="lg"
              >
                📄 {t("투자 브로셔 다운로드", "Download Investment Brochure")}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("문의 양식", "Inquiry Form")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("성함", "Name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t("홍길동", "John Doe")}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("이메일", "Email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="investor@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("투자 관심 분야", "Investment Interest")}
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => setFormData({...formData, interest: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("선택해주세요", "Please select")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">{t("주요 투자자", "Main Investor")}</SelectItem>
                      <SelectItem value="partner">{t("전략적 파트너", "Strategic Partner")}</SelectItem>
                      <SelectItem value="franchise">{t("프랜차이즈", "Franchise")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("메시지", "Message")}
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={t("투자에 대한 문의사항을 적어주세요...", "Please describe your investment inquiries...")}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-earth-600 text-white hover:bg-earth-700 transition-colors duration-200"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("보내는 중...", "Sending...") : t("문의 보내기", "Send Inquiry")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
