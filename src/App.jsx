import React, { useState, useEffect } from "react";
import ambulance1 from "./assets/ambulance1.jpg";
import ambulance2 from "./assets/ambulance2.jpg";
import ambulance3 from "./assets/ambulance3.jpg";

// Structured Data Component for SEO
const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Munshi Ji Ambulance Service",
    "description": "24/7 Emergency ground ambulance service for patient transport across India",
    "url": "https://ambulace-services.vercel.app/",
    "telephone": "+917906131694",
    "areaServed": "IN",
    "availableService": {
      "@type": "MedicalProcedure",
      "name": "Emergency Patient Transport"
    },
    "serviceType": "Emergency Ambulance Service",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "openingHours": "24/7"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

// Language translations
const translations = {
  en: {
    header: {
      title: "🚑 Ambulance Service Available All Over India",
      subtitle: "Quick, Reliable, and Safe — Because Every Second Matters"
    },
    hero: {
      title: "Need to Transport a Patient?",
      description: "We provide <strong>ground ambulance services</strong> across India for safe transport of patients — whether it's from home to hospital or hospital to home.",
      note: "(Note: Ground ambulances only, not air ambulances.)"
    },
    features: [
      { icon: "🚑", title: "24/7 Service", desc: "Round the clock availability" },
      { icon: "⚡", title: "Quick Response", desc: "Fast emergency response" },
      { icon: "🛡️", title: "Safe Transport", desc: "Patient safety first" },
      { icon: "🏥", title: "All India", desc: "Service across India" }
    ],
    contact: {
      title: "📞 Contact for Booking & Details",
      primary: "Primary Contact",
      secondary: "Secondary Contact",
      picturesNote: "(Pictures of different ambulance services available on request)"
    },
    buttons: {
      callNow: "Call Now",
      emergencyContact: "Emergency Contact"
    },
    footer: {
      copyright: "© {year} Ambulance Service India. All Rights Reserved.",
      service: "24x7 Ground Ambulance Booking Available"
    }
  },
  hi: {
    header: {
      title: "🚑 पूरे भारत में एम्बुलेंस सेवा उपलब्ध",
      subtitle: "त्वरित, विश्वसनीय और सुरक्षित — क्योंकि हर पल मायने रखता है"
    },
    hero: {
      title: "मरीज़ को ले जाने की आवश्यकता है?",
      description: "हम पूरे भारत में <strong>ग्राउंड एम्बुलेंस सेवाएं</strong> प्रदान करते हैं — चाहे घर से अस्पताल हो या अस्पताल से घर।",
      note: "(नोट: केवल ग्राउंड एम्बुलेंस, एयर एम्बुलेंस नहीं।)"
    },
    features: [
      { icon: "🚑", title: "24/7 सेवा", desc: "चौबीसों घंटे उपलब्धता" },
      { icon: "⚡", title: "त्वरित प्रतिक्रिया", desc: "तेज आपातकालीन प्रतिक्रिया" },
      { icon: "🛡️", title: "सुरक्षित परिवहन", desc: "मरीज की सुरक्षा पहले" },
      { icon: "🏥", title: "पूरे भारत में", desc: "पूरे भारत में सेवा" }
    ],
    contact: {
      title: "📞 बुकिंग और जानकारी के लिए संपर्क करें",
      primary: "प्राथमिक संपर्क",
      secondary: "द्वितीयक संपर्क",
      picturesNote: "(विभिन्न एम्बुलेंस सेवाओं की तस्वीरें अनुरोध पर उपलब्ध)"
    },
    buttons: {
      callNow: "अभी कॉल करें",
      emergencyContact: "आपातकालीन संपर्क"
    },
    footer: {
      copyright: "© {year} एम्बुलेंस सेवा भारत। सर्वाधिकार सुरक्षित।",
      service: "24x7 ग्राउंड एम्बुलेंस बुकिंग उपलब्ध"
    }
  },
  ta: {
    header: {
      title: "🚑 இந்தியா முழுவதும் ஆம்புலன்ஸ் சேவை உள்ளது",
      subtitle: "விரைவான, நம்பகமான மற்றும் பாதுகாப்பான — ஒவ்வொரு நொடியும் முக்கியமானதால்"
    },
    hero: {
      title: "நோயாளியை கொண்டு செல்ல வேண்டுமா?",
      description: "நாங்கள் இந்தியா முழுவதும் <strong>தரை ஆம்புலன்ஸ் சேவைகளை</strong> வழங்குகிறோம் — வீட்டிலிருந்து மருத்துவமனைக்கு அல்லது மருத்துவமனையிலிருந்து வீட்டிற்கு.",
      note: "(குறிப்பு: தரை ஆம்புலன்ஸ் மட்டும், விமான ஆம்புலன்ஸ் அல்ல.)"
    },
    features: [
      { icon: "🚑", title: "24/7 சேவை", desc: "இரவுபகல் கிடைக்கும்" },
      { icon: "⚡", title: "விரைவான பதில்", desc: "விரைவான அவசர பதில்" },
      { icon: "🛡️", title: "பாதுகாப்பான போக்குவரத்து", desc: "நோயாளி பாதுகாப்பு முதலில்" },
      { icon: "🏥", title: "இந்தியா முழுவதும்", desc: "இந்தியா முழுவதும் சேவை" }
    ],
    contact: {
      title: "📞 பதிவு மற்றும் விவரங்களுக்கு தொடர்பு கொள்ளவும்",
      primary: "முதன்மை தொடர்பு",
      secondary: "இரண்டாம் நிலை தொடர்பு",
      picturesNote: "(வெவ்வேறு ஆம்புலன்ஸ் சேவைகளின் படங்கள் கோரிக்கையின் பேரில் கிடைக்கும்)"
    },
    buttons: {
      callNow: "இப்போது அழைக்கவும்",
      emergencyContact: "அவசர தொடர்பு"
    },
    footer: {
      copyright: "© {year} ஆம்புலன்ஸ் சேவை இந்தியா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      service: "24x7 தரை ஆம்புலன்ஸ் பதிவு கிடைக்கும்"
    }
  },
  te: {
    header: {
      title: "🚑 మొత్తం భారతదేశంలో అంబులెన్స్ సేవ అందుబాటులో ఉంది",
      subtitle: "త్వరిత, నమ్మకమైన మరియు సురక్షిత — ఎందుకంటే ప్రతి సెకను ముఖ్యమైనది"
    },
    hero: {
      title: "రోగిని రవాణా చేయాల్సిన అవసరం ఉందా?",
      description: "మేము భారతదేశం మొత్తంలో <strong>గ్రౌండ్ అంబులెన్స్ సేవలను</strong> అందిస్తాము — ఇల్లు నుండి ఆసుపత్రికి లేదా ఆసుపత్రి నుండి ఇంటికి.",
      note: "(గమనిక: గ్రౌండ్ అంబులెన్స్లు మాత్రమే, ఎయిర్ అంబులెన్స్లు కాదు.)"
    },
    features: [
      { icon: "🚑", title: "24/7 సేవ", desc: "రోజంతా అందుబాటులో" },
      { icon: "⚡", title: "త్వరిత ప్రతిస్పందన", desc: "వేగవంతమైన అత్యవసర ప్రతిస్పందన" },
      { icon: "🛡️", title: "సురక్షిత రవాణా", desc: "రోగి భద్రత మొదట" },
      { icon: "🏥", title: "అఖిల భారత్", desc: "భారతదేశం మొత్తంలో సేవ" }
    ],
    contact: {
      title: "📞 బుకింగ్ & వివరాల కోసం సంప్రదించండి",
      primary: "ప్రాథమిక సంప్రదింపు",
      secondary: "ద్వితీయ సంప్రదింపు",
      picturesNote: "(వివిధ అంబులెన్స్ సేవల చిత్రాలు అభ్యర్థనపై అందుబాటులో ఉంటాయి)"
    },
    buttons: {
      callNow: "ఇప్పుడే కాల్ చేయండి",
      emergencyContact: "అత్యవసర సంప్రదింపు"
    },
    footer: {
      copyright: "© {year} అంబులెన్స్ సేవ ఇండియా. అన్ని హక్కులు రక్షించబడినవి.",
      service: "24x7 గ్రౌండ్ అంబులెన్స్ బుకింగ్ అందుబాటులో ఉంది"
    }
  },
  bn: {
    header: {
      title: "🚑 সমগ্র ভারতজুড়ে অ্যাম্বুলেন্স পরিষেবা উপলব্ধ",
      subtitle: "দ্রুত, নির্ভরযোগ্য এবং নিরাপদ — কারণ প্রতি সেকেন্ড গুরুত্বপূর্ণ"
    },
    hero: {
      title: "রোগী পরিবহন প্রয়োজন?",
      description: "আমরা সমগ্র ভারতজুড়ে <strong>গ্রাউন্ড অ্যাম্বুলেন্স পরিষেবা</strong> প্রদান করি — বাড়ি থেকে হাসপাতালে বা হাসপাতাল থেকে বাড়িতে।",
      note: "(দ্রষ্টব্য: শুধুমাত্র গ্রাউন্ড অ্যাম্বুলেন্স, এয়ার অ্যাম্বুলেন্স নয়।)"
    },
    features: [
      { icon: "🚑", title: "24/7 পরিষেবা", desc: "চব্বিশ ঘন্টা উপলব্ধ" },
      { icon: "⚡", title: "দ্রুত প্রতিক্রিয়া", desc: "দ্রুত জরুরি প্রতিক্রিয়া" },
      { icon: "🛡️", title: "নিরাপদ পরিবহন", desc: "রোগীর নিরাপত্তা প্রথম" },
      { icon: "🏥", title: "সমগ্র ভারত", desc: "সমগ্র ভারতে পরিষেবা" }
    ],
    contact: {
      title: "📞 বুকিং এবং বিস্তারিত জানতে যোগাযোগ করুন",
      primary: "প্রাথমিক যোগাযোগ",
      secondary: "দ্বিতীয় পর্যায়ের যোগাযোগ",
      picturesNote: "(বিভিন্ন অ্যাম্বুলেন্স পরিষেবার ছবি অনুরোধে উপলব্ধ)"
    },
    buttons: {
      callNow: "এখনই কল করুন",
      emergencyContact: "জরুরি যোগাযোগ"
    },
    footer: {
      copyright: "© {year} অ্যাম্বুলেন্স সার্ভিস ইন্ডিয়া। সমস্ত অধিকার সংরক্ষিত।",
      service: "24x7 গ্রাউন্ড অ্যাম্বুলেন্স বুকিং উপলব্ধ"
    }
  },
  mr: {
    header: {
      title: "🚑 संपूर्ण भारतात एम्ब्युलन्स सेवा उपलब्ध",
      subtitle: "जलद, विश्वासार्ह आणि सुरक्षित — कारण प्रत्येक सेकंद महत्त्वाचा आहे"
    },
    hero: {
      title: "रुग्णाची वाहतूक करायची आहे?",
      description: "आम्ही संपूर्ण भारतात <strong>ग्राउंड एम्ब्युलन्स सेवा</strong> पुरवतो — मग ते घरापासून हॉस्पिटल किंवा हॉस्पिटलमधून घरी असो.",
      note: "(टीप: फक्त ग्राउंड एम्ब्युलन्स, एअर एम्ब्युलन्स नाही.)"
    },
    features: [
      { icon: "🚑", title: "24/7 सेवा", desc: "चोवीस तास उपलब्ध" },
      { icon: "⚡", title: "जलद प्रतिसाद", desc: "त्वरीत आणीबाणी प्रतिसाद" },
      { icon: "🛡️", title: "सुरक्षित वाहतूक", desc: "रुग्ण सुरक्षा प्रथम" },
      { icon: "🏥", title: "संपूर्ण भारत", desc: "संपूर्ण भारतात सेवा" }
    ],
    contact: {
      title: "📞 बुकिंग आणि तपशीलांसाठी संपर्क साधा",
      primary: "प्राथमिक संपर्क",
      secondary: "दुय्यम संपर्क",
      picturesNote: "(विविध एम्ब्युलन्स सेवांच्या चित्रांची विनंती केल्यास उपलब्ध)"
    },
    buttons: {
      callNow: "आत्ताच कॉल करा",
      emergencyContact: "आणीबाणी संपर्क"
    },
    footer: {
      copyright: "© {year} एम्ब्युलन्स सर्व्हिस इंडिया. सर्व हक्क राखीव.",
      service: "24x7 ग्राउंड एम्ब्युलन्स बुकिंग उपलब्ध"
    }
  }
};

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
];

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Get saved language preference
    const savedLang = localStorage.getItem('ambulance-lang');
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setShowLangDropdown(false);
    localStorage.setItem('ambulance-lang', langCode);
  };

  const handleCallClick = (number) => {
    const button = document.getElementById(`call-${number}`);
    if (button) {
      button.classList.add('animate-shake');
      setTimeout(() => {
        button.classList.remove('animate-shake');
      }, 500);
    }
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen gradient-bg text-gray-900 relative overflow-hidden">
      {/* Structured Data for SEO */}
      <StructuredData />
      
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <span className="text-lg">{languages.find(lang => lang.code === currentLang)?.flag}</span>
            <span className="hidden sm:block text-sm font-medium">
              {languages.find(lang => lang.code === currentLang)?.name}
            </span>
            <span className={`transform transition-transform ${showLangDropdown ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {showLangDropdown && (
            <div className="absolute top-12 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 min-w-48 py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-red-50 transition-colors flex items-center gap-3 ${
                    currentLang === lang.code ? 'bg-red-50 text-red-600 font-semibold' : ''
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="text-red-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className={`bg-red-600 text-white py-6 shadow-lg sticky top-0 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide animate-fadeInUp">
            {t.header.title}
          </h1>
          <p className="mt-3 text-lg font-medium animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            {t.header.subtitle}
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {t.hero.title}
          </h2>
          <p 
            className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t.hero.description }}
          />
          <p className="font-semibold text-red-600 text-lg mt-2 inline-block">
            {t.hero.note}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-red-100 animate-fadeInUp"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Ambulance Images */}
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            {[ambulance1, ambulance2, ambulance3].map((img, i) => (
              <div 
                key={i}
                className="group relative animate-fadeInUp"
                style={{animationDelay: `${0.8 + i * 0.2}s`}}
              >
                <img
                  src={img}
                  alt={`Ambulance ${i + 1}`}
                  className="w-72 h-44 sm:w-80 sm:h-48 object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 shadow-inner relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-red-600 mb-8">
              {t.contact.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 hover:border-red-400 transition-all duration-300">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>{t.contact.primary}</strong>
                </p>
                <a
                  href="tel:7906131694"
                  id="call-7906131694"
                  onClick={() => handleCallClick('7906131694')}
                  className="text-2xl text-red-600 font-bold hover:text-red-700 transition-colors duration-200 inline-flex items-center gap-2 animate-glow px-4 py-2 rounded-lg"
                >
                  📞 7906131694
                </a>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 hover:border-red-400 transition-all duration-300">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>{t.contact.secondary}</strong>
                </p>
                <a
                  href="tel:9837510011"
                  id="call-9837510011"
                  onClick={() => handleCallClick('9837510011')}
                  className="text-2xl text-red-600 font-bold hover:text-red-700 transition-colors duration-200 inline-flex items-center gap-2 animate-glow px-4 py-2 rounded-lg"
                  style={{animationDelay: '1s'}}
                >
                  📞 9837510011
                </a>
              </div>
            </div>
            <p className="text-gray-600 italic text-lg">
              {t.contact.picturesNote}
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Call Buttons (mobile only) */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50 sm:hidden">
        <a
          href="tel:7906131694"
          onClick={() => handleCallClick('7906131694')}
          className="bg-red-600 text-white font-bold px-6 py-4 rounded-full shadow-2xl animate-glow hover:bg-red-700 active:scale-95 transition-all duration-200 flex items-center gap-2"
        >
          <span className="animate-pulse">📞</span>
          {t.buttons.callNow}
        </a>
        <a
          href="tel:9837510011"
          onClick={() => handleCallClick('9837510011')}
          className="bg-red-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl hover:bg-red-800 active:scale-95 transition-all duration-200 flex items-center gap-2"
        >
          <span>📞</span>
          {t.buttons.callNow}
        </a>
      </div>

      {/* Desktop Call Buttons */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:flex flex-col gap-3">
        <div className="bg-white rounded-2xl shadow-2xl p-4 border border-red-200">
          <p className="text-sm font-semibold text-gray-700 mb-2">{t.buttons.emergencyContact}</p>
          <div className="space-y-2">
            <a
              href="tel:7906131694"
              onClick={() => handleCallClick('7906131694')}
              className="block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors text-center animate-glow"
            >
              📞 7906131694
            </a>
            <a
              href="tel:9837510011"
              onClick={() => handleCallClick('9837510011')}
              className="block bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-800 transition-colors text-center"
            >
              📞 9837510011
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative z-10">
        <div className="text-center px-2">
          <p className="text-lg mb-2">
            {t.footer.copyright.replace('{year}', new Date().getFullYear())}
          </p>
          <p className="text-red-300 font-semibold">
            {t.footer.service}
          </p>
        </div>
      </footer>
    </div>
  );
}