export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ellipsense",
    "url": "https://ellipsense.vercel.app",
    "logo": "https://ellipsense.vercel.app/logo.svg",
    "description": "Empowering businesses with innovative software solutions and cutting-edge technology services",
    "image": "https://ellipsense.vercel.app/main.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Philippines"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+639946948997",
      "contactType": "customer service",
      "email": "franzeecalleja@gmail.com",
      "availableLanguage": ["English", "Filipino"]
    },
    "sameAs": [
      // Add your social media URLs when available
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Cloud Services",
        "description": "Modernize your IT infrastructure with our cloud services",
        "category": "Cloud Computing"
      },
      {
        "@type": "Offer",
        "name": "Custom Software Development",
        "description": "We develop custom software solutions tailored to meet your unique business requirements",
        "category": "Software Development"
      },
      {
        "@type": "Offer",
        "name": "Web and Mobile Development",
        "description": "Custom web and mobile application development services",
        "category": "Application Development"
      },
      {
        "@type": "Offer",
        "name": "Managed IT Support",
        "description": "24/7 managed IT services and support",
        "category": "IT Services"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "description": "Serving clients globally"
    },
    "keywords": [
      "software development",
      "cloud services",
      "IT support",
      "web development",
      "mobile development",
      "custom software",
      "managed IT services"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
