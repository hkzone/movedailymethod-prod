(function(_0xcfa3ca,_0x111d36){const _0x5725e6=a10_0x191a,_0x11371c=_0xcfa3ca();while(!![]){try{const _0x16a242=parseInt(_0x5725e6(0xd5))/0x1*(parseInt(_0x5725e6(0xcd))/0x2)+parseInt(_0x5725e6(0xd4))/0x3+-parseInt(_0x5725e6(0xd2))/0x4+-parseInt(_0x5725e6(0xd3))/0x5+parseInt(_0x5725e6(0xce))/0x6+parseInt(_0x5725e6(0xd0))/0x7+parseInt(_0x5725e6(0xcf))/0x8*(-parseInt(_0x5725e6(0xd1))/0x9);if(_0x16a242===_0x111d36)break;else _0x11371c['push'](_0x11371c['shift']());}catch(_0x30533d){_0x11371c['push'](_0x11371c['shift']());}}}(a10_0x5316,0x6bae3));function a10_0x191a(_0x5e3ff7,_0x5c4165){const _0x53162b=a10_0x5316();return a10_0x191a=function(_0x191ab8,_0x20cac8){_0x191ab8=_0x191ab8-0xcd;let _0x17525c=_0x53162b[_0x191ab8];return _0x17525c;},a10_0x191a(_0x5e3ff7,_0x5c4165);}import{groq}from'next-sanity';import{client}from'./client';const legalDocumentFields='\x0a\x20\x20_id,\x0a\x20\x20title,\x0a\x20\x20slug,\x0a\x20\x20language,\x0a\x20\x20content,\x0a\x20\x20lastUpdated,\x0a\x20\x20effectiveDate\x0a';export async function getTermsAndConditions(_0x41ea78='en'){const _0x4ea75d=groq`
    *[_type == "termsConditions" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x4ea75d,{'language':_0x41ea78});}export async function getAllTermsAndConditions(){const _0x25cf6d=groq`
    *[_type == "termsConditions"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x25cf6d);}export async function getRefundPolicy(_0x4f7c86='en'){const _0x4bf4dc=groq`
    *[_type == "refundPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x4bf4dc,{'language':_0x4f7c86});}function a10_0x5316(){const _0x2873dd=['996996AyLfDR','3154182sljZLt','3280mQrYQM','2464938AKvLXS','4302QDTYMM','2498380TMrnZO','2123050JIsBNq','929745RSpayD','1KEnuqN'];a10_0x5316=function(){return _0x2873dd;};return a10_0x5316();}export async function getAllRefundPolicies(){const _0x1c6f4f=groq`
    *[_type == "refundPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x1c6f4f);}export async function getPrivacyPolicy(_0x40a72a='en'){const _0x25d0b4=groq`
    *[_type == "privacyPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x25d0b4,{'language':_0x40a72a});}export async function getAllPrivacyPolicies(){const _0x389619=groq`
    *[_type == "privacyPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x389619);}export async function getContactInfo(_0x47c26c='en'){const _0x22436e=groq`
    *[_type == "contactInfo" && language == $language][0] {
      _id,
      title,
      slug,
      language,
      companyName,
      taxId,
      legalAddress,
      physicalAddress,
      phone,
      email,
      supportEmail,
      website,
      businessHours,
      additionalInfo,
      lastUpdated
    }
  `;return client['fetch'](_0x22436e,{'language':_0x47c26c});}export async function getAllContactInfo(){const _0x24655e=groq`
    *[_type == "contactInfo"] | order(language asc) {
      _id,
      title,
      slug,
      language,
      companyName,
      taxId,
      legalAddress,
      physicalAddress,
      phone,
      email,
      supportEmail,
      website,
      businessHours,
      additionalInfo,
      lastUpdated
    }
  `;return client['fetch'](_0x24655e);}export async function getAllLegalDocuments(_0x1050a7='en'){const [_0x15294d,_0x513dc8,_0x27f9f1,_0x546da9]=await Promise['all']([getTermsAndConditions(_0x1050a7),getRefundPolicy(_0x1050a7),getPrivacyPolicy(_0x1050a7),getContactInfo(_0x1050a7)]);return{'terms':_0x15294d,'refund':_0x513dc8,'privacy':_0x27f9f1,'contact':_0x546da9};}