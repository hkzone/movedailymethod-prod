(function(_0x2fc873,_0x205b38){const _0x189027=a10_0x146d,_0x4329b3=_0x2fc873();while(!![]){try{const _0x168744=parseInt(_0x189027(0xa3))/0x1+-parseInt(_0x189027(0xac))/0x2*(-parseInt(_0x189027(0xaa))/0x3)+-parseInt(_0x189027(0xa2))/0x4*(-parseInt(_0x189027(0xa8))/0x5)+parseInt(_0x189027(0xa6))/0x6*(parseInt(_0x189027(0xa9))/0x7)+-parseInt(_0x189027(0xad))/0x8+-parseInt(_0x189027(0xa4))/0x9*(parseInt(_0x189027(0xa5))/0xa)+parseInt(_0x189027(0xab))/0xb*(-parseInt(_0x189027(0xa7))/0xc);if(_0x168744===_0x205b38)break;else _0x4329b3['push'](_0x4329b3['shift']());}catch(_0xc6eecf){_0x4329b3['push'](_0x4329b3['shift']());}}}(a10_0x4ef1,0x1df97));import{groq}from'next-sanity';function a10_0x146d(_0x3931ec,_0x194f27){const _0x4ef10b=a10_0x4ef1();return a10_0x146d=function(_0x146da1,_0x53bfef){_0x146da1=_0x146da1-0xa2;let _0x5eac3a=_0x4ef10b[_0x146da1];return _0x5eac3a;},a10_0x146d(_0x3931ec,_0x194f27);}import{client}from'./client';const legalDocumentFields='\x0a\x20\x20_id,\x0a\x20\x20title,\x0a\x20\x20slug,\x0a\x20\x20language,\x0a\x20\x20content,\x0a\x20\x20lastUpdated,\x0a\x20\x20effectiveDate\x0a';export async function getTermsAndConditions(_0x376b57='en'){const _0x46f2b7=groq`
    *[_type == "termsConditions" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x46f2b7,{'language':_0x376b57});}export async function getAllTermsAndConditions(){const _0x38f675=groq`
    *[_type == "termsConditions"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x38f675);}export async function getRefundPolicy(_0x2d48c0='en'){const _0x34b567=groq`
    *[_type == "refundPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x34b567,{'language':_0x2d48c0});}export async function getAllRefundPolicies(){const _0x50f247=a10_0x146d,_0x2556a2=groq`
    *[_type == "refundPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client[_0x50f247(0xae)](_0x2556a2);}export async function getPrivacyPolicy(_0x45633b='en'){const _0x2c66a6=groq`
    *[_type == "privacyPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x2c66a6,{'language':_0x45633b});}export async function getAllPrivacyPolicies(){const _0x14ee3e=groq`
    *[_type == "privacyPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x14ee3e);}export async function getContactInfo(_0x8295ad='en'){const _0x11d8a5=groq`
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
  `;return client['fetch'](_0x11d8a5,{'language':_0x8295ad});}export async function getAllContactInfo(){const _0x52f7ea=groq`
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
  `;return client['fetch'](_0x52f7ea);}function a10_0x4ef1(){const _0x293ba1=['1093408YERfUv','fetch','5068YgehjH','68609yhUCdr','229581dAchjx','10aTddML','90nNrFjy','36EjyRxx','785olCxRt','3689SFaghb','719403Crqych','844338CarxOm','2yAokUf'];a10_0x4ef1=function(){return _0x293ba1;};return a10_0x4ef1();}export async function getAllLegalDocuments(_0x5ea9d1='en'){const [_0x212809,_0x19fd2e,_0x16c262,_0x4a4b04]=await Promise['all']([getTermsAndConditions(_0x5ea9d1),getRefundPolicy(_0x5ea9d1),getPrivacyPolicy(_0x5ea9d1),getContactInfo(_0x5ea9d1)]);return{'terms':_0x212809,'refund':_0x19fd2e,'privacy':_0x16c262,'contact':_0x4a4b04};}