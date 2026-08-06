import React from 'react';

export interface JsonLdProps {
  type: 'organization' | 'website' | 'localBusiness' | 'breadcrumb' | 'service' | 'faq' | 'webpage';
  data?: Record<string, any>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: any = {};

  const businessDetails = {
    name: "MSI Construction",
    url: "https://www.msiconstruction.in",
    logo: "https://www.msiconstruction.in/img/logo-v2.png",
    phone: "+919319444747",
    email: "info@msiconstruction.in",
    address: {
      "@type": "PostalAddress",
      "streetAddress": "Plot No -210, Gali No-05, Golden Ranaji Enclave, Nangli Diary",
      "addressLocality": "New Delhi",
      "postalCode": "110043",
      "addressCountry": "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": 28.6821,
      "longitude": 77.0627
    },
    serviceAreas: [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "City", "name": "Gurgaon" },
      { "@type": "City", "name": "Faridabad" },
      { "@type": "City", "name": "Greater Noida" },
      { "@type": "Country", "name": "India" }
    ],
    social: [
      "https://www.instagram.com/msiconstruction.in",
      "https://wa.me/919319444747"
    ],
    taxID: "06AFZPT0180Q1ZF"
  };

  switch (type) {
    case 'organization':
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": businessDetails.name,
        "url": businessDetails.url,
        "logo": businessDetails.logo,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": businessDetails.phone,
          "contactType": "customer service",
          "email": businessDetails.email,
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": businessDetails.social
      };
      break;
    case 'website':
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": businessDetails.name,
        "url": businessDetails.url,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${businessDetails.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
      break;
    case 'localBusiness':
      schema = {
        "@context": "https://schema.org",
        "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
        "name": businessDetails.name,
        "image": businessDetails.logo,
        "@id": `${businessDetails.url}#localbusiness`,
        "url": businessDetails.url,
        "telephone": businessDetails.phone,
        "email": businessDetails.email,
        "address": businessDetails.address,
        "geo": businessDetails.geo,
        "areaServed": businessDetails.serviceAreas,
        "foundingDate": "1996",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "₹₹₹",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Construction and Renovation Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renovation & Remodeling" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Turnkey Projects" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Factory Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Interior Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Renovation" } }
          ]
        },
        "sameAs": businessDetails.social,
        "taxID": businessDetails.taxID
      };
      break;
    case 'breadcrumb':
      if (data?.items) {
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data.items as any[]).map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };
      }
      break;
    case 'service':
      if (data) {
        schema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "serviceType": data.serviceType,
          "description": data.description,
          "url": data.url,
          "provider": {
            "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
            "name": businessDetails.name,
            "image": businessDetails.logo
          },
          "areaServed": businessDetails.serviceAreas
        };
      }
      break;
    case 'faq':
      if (data?.questions) {
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (data.questions as any[]).map((q) => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.a
            }
          }))
        };
      }
      break;
    case 'webpage':
      if (data) {
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title,
          "description": data.description,
          "url": data.url,
          "publisher": {
            "@type": "Organization",
            "name": businessDetails.name,
            "logo": {
              "@type": "ImageObject",
              "url": businessDetails.logo
            }
          }
        };
      }
      break;
    default:
      return null;
  }

  if (!schema || Object.keys(schema).length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
