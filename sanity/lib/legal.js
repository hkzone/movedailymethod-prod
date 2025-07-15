(function(_0x46f6d9,_0x50d786){const _0x17bf18=a10_0x396c,_0xbcc35f=_0x46f6d9();while(!![]){try{const _0x452b16=-parseInt(_0x17bf18(0x15b))/0x1+parseInt(_0x17bf18(0x15c))/0x2+-parseInt(_0x17bf18(0x160))/0x3*(-parseInt(_0x17bf18(0x15f))/0x4)+parseInt(_0x17bf18(0x15e))/0x5+-parseInt(_0x17bf18(0x161))/0x6+-parseInt(_0x17bf18(0x15a))/0x7+parseInt(_0x17bf18(0x162))/0x8;if(_0x452b16===_0x50d786)break;else _0xbcc35f['push'](_0xbcc35f['shift']());}catch(_0x45aa0c){_0xbcc35f['push'](_0xbcc35f['shift']());}}}(a10_0x1830,0xaa34e));import{groq}from'next-sanity';import{client}from'./client';const legalDocumentFields='\x0a\x20\x20_id,\x0a\x20\x20title,\x0a\x20\x20slug,\x0a\x20\x20language,\x0a\x20\x20content,\x0a\x20\x20lastUpdated,\x0a\x20\x20effectiveDate\x0a';export async function getTermsAndConditions(_0x46809c='en'){const _0x1edcf5=groq`
    *[_type == "termsConditions" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x1edcf5,{'language':_0x46809c});}export async function getAllTermsAndConditions(){const _0xe081b5=groq`
    *[_type == "termsConditions"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0xe081b5);}export async function getRefundPolicy(_0x2f9cea='en'){const _0x25575d=groq`
    *[_type == "refundPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x25575d,{'language':_0x2f9cea});}function a10_0x1830(){const _0x5dd3c8=['1205024LynxBh','1640260AUsJrL','all','831780hTbCNJ','852BjlguE','7851wtrjSL','7793082pSQRDz','16670496uWkIhF','2986774wEAQIi'];a10_0x1830=function(){return _0x5dd3c8;};return a10_0x1830();}export async function getAllRefundPolicies(){const _0x40c333=groq`
    *[_type == "refundPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x40c333);}export async function getPrivacyPolicy(_0x4113d6='en'){const _0x6ad17=groq`
    *[_type == "privacyPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x6ad17,{'language':_0x4113d6});}export async function getAllPrivacyPolicies(){const _0xab6829=groq`
    *[_type == "privacyPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0xab6829);}function a10_0x396c(_0x5b679a,_0x51146b){const _0x18306c=a10_0x1830();return a10_0x396c=function(_0x396c48,_0xccbc3c){_0x396c48=_0x396c48-0x15a;let _0x4a19e=_0x18306c[_0x396c48];return _0x4a19e;},a10_0x396c(_0x5b679a,_0x51146b);}export async function getContactInfo(_0x55494c='en'){const _0xcc4d68=groq`
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
  `;return client['fetch'](_0xcc4d68,{'language':_0x55494c});}export async function getAllContactInfo(){const _0x470d53=groq`
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
  `;return client['fetch'](_0x470d53);}export async function getAllLegalDocuments(_0x2f23ae='en'){const _0x26d1a7=a10_0x396c,[_0x333748,_0x9c302e,_0x3e812d,_0x29e4c8]=await Promise[_0x26d1a7(0x15d)]([getTermsAndConditions(_0x2f23ae),getRefundPolicy(_0x2f23ae),getPrivacyPolicy(_0x2f23ae),getContactInfo(_0x2f23ae)]);return{'terms':_0x333748,'refund':_0x9c302e,'privacy':_0x3e812d,'contact':_0x29e4c8};}