import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, WrenchIcon, Clock, ThumbsUp, MessageCircle } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="border-b fixed w-full bg-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">PompaYogya</div>
          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Beranda</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Layanan</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Testimoni</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">FAQ</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jasa Service Pompa Air<br />
              <span className="text-blue-600">Yogyakarta</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Solusi terpercaya untuk perbaikan dan perawatan pompa air Anda. 
              Layanan profesional 24/7 di seluruh wilayah Yogyakarta.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Sekarang
              </Button>
              <Button variant="outline" size="lg">
                Lihat Layanan
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Service Pompa Air" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const Features = () => {
  const features = [
    {
      icon: <WrenchIcon className="w-12 h-12 text-blue-600" />,
      title: "Teknisi Berpengalaman",
      description: "Tim teknisi profesional dengan pengalaman lebih dari 10 tahun"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Layanan 24/7",
      description: "Siap melayani kapanpun Anda membutuhkan"
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-blue-600" />,
      title: "Garansi Servis",
      description: "Garansi servis hingga 3 bulan untuk ketenangan Anda"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mengapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Sleman, Yogyakarta",
      text: "Sangat puas dengan layanan yang diberikan. Teknisi datang tepat waktu dan masalah pompa air terselesaikan dengan baik."
    },
    {
      name: "Siti Rahayu",
      location: "Bantul, Yogyakarta",
      text: "Profesional dan terpercaya. Harga sangat terjangkau dengan kualitas servis yang memuaskan."
    },
    {
      name: "Ahmad Ridwan",
      location: "Kota Yogyakarta",
      text: "Respon cepat dan pelayanan ramah. Recommended untuk service pompa air!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Testimoni Pelanggan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
                  <div className="text-yellow-400">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQ = () => {
  const faqs = [
    {
      question: "Berapa biaya service pompa air?",
      answer: "Biaya service bervariasi tergantung jenis kerusakan dan spare part yang diperlukan. Kami akan memberikan estimasi biaya setelah melakukan pengecekan."
    },
    {
      question: "Berapa lama waktu pengerjaan?",
      answer: "Rata-rata pengerjaan memakan waktu 1-2 jam, tergantung tingkat kerusakan pompa air Anda."
    },
    {
      question: "Apakah ada garansi service?",
      answer: "Ya, kami memberikan garansi service selama 3 bulan untuk setiap perbaikan pompa air."
    },
    {
      question: "Area mana saja yang dilayani?",
      answer: "Kami melayani seluruh wilayah Yogyakarta termasuk Sleman, Bantul, Kulon Progo, dan Gunung Kidul."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pertanyaan Umum
        </h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PompaYogya</h3>
            <p className="text-gray-400">Solusi terpercaya untuk pompa air Anda.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <p className="text-gray-400 flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2" />
              +62 812-3456-7890
            </p>
            <p className="text-gray-400">
              Jl. Malioboro No. 123<br />
              Yogyakarta 55271
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <p className="text-gray-400">
              Senin - Minggu<br />
              24 Jam
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PompaYogya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
