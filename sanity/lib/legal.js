(function(_0x2202f0,_0x18c4de){const _0x525bc4=a10_0x22bb,_0x5aac90=_0x2202f0();while(!![]){try{const _0x510ec3=-parseInt(_0x525bc4(0x92))/0x1*(-parseInt(_0x525bc4(0x8a))/0x2)+-parseInt(_0x525bc4(0x8e))/0x3*(parseInt(_0x525bc4(0x88))/0x4)+-parseInt(_0x525bc4(0x89))/0x5*(parseInt(_0x525bc4(0x8b))/0x6)+-parseInt(_0x525bc4(0x8d))/0x7+-parseInt(_0x525bc4(0x90))/0x8+-parseInt(_0x525bc4(0x8f))/0x9+-parseInt(_0x525bc4(0x87))/0xa*(-parseInt(_0x525bc4(0x8c))/0xb);if(_0x510ec3===_0x18c4de)break;else _0x5aac90['push'](_0x5aac90['shift']());}catch(_0x57e31e){_0x5aac90['push'](_0x5aac90['shift']());}}}(a10_0x3e37,0x8086e));import{groq}from'next-sanity';import{client}from'./client';const legalDocumentFields='\x0a\x20\x20_id,\x0a\x20\x20title,\x0a\x20\x20slug,\x0a\x20\x20language,\x0a\x20\x20content,\x0a\x20\x20lastUpdated,\x0a\x20\x20effectiveDate\x0a';export async function getTermsAndConditions(_0x43381b='en'){const _0x41f47a=groq`
    *[_type == "termsConditions" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x41f47a,{'language':_0x43381b});}export async function getAllTermsAndConditions(){const _0x1ff990=a10_0x22bb,_0x347589=groq`
    *[_type == "termsConditions"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client[_0x1ff990(0x91)](_0x347589);}export async function getRefundPolicy(_0x5a4193='en'){const _0x16c65b=groq`
    *[_type == "refundPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x16c65b,{'language':_0x5a4193});}export async function getAllRefundPolicies(){const _0x50b0f6=groq`
    *[_type == "refundPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x50b0f6);}export async function getPrivacyPolicy(_0x117d63='en'){const _0x2e3c96=groq`
    *[_type == "privacyPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x2e3c96,{'language':_0x117d63});}export async function getAllPrivacyPolicies(){const _0x4a147f=groq`
    *[_type == "privacyPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x4a147f);}export async function getContactInfo(_0x6f7cb7='en'){const _0x8fb5f5=a10_0x22bb,_0x477074=groq`
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
  `;return client[_0x8fb5f5(0x91)](_0x477074,{'language':_0x6f7cb7});}function a10_0x3e37(){const _0x1bb159=['3286680DOGdon','fetch','122lYGkVz','13123950YVIEYN','1532Wcfipp','4385uzBjrt','8990DnuAPD','5286ogUHty','22qNTnnR','3724119TKWZyN','6498leLEMZ','915003XYNaML'];a10_0x3e37=function(){return _0x1bb159;};return a10_0x3e37();}export async function getAllContactInfo(){const _0x254403=groq`
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
  `;return client['fetch'](_0x254403);}function a10_0x22bb(_0x1c32ca,_0x168172){const _0x3e3721=a10_0x3e37();return a10_0x22bb=function(_0x22bb3b,_0x3b4f5e){_0x22bb3b=_0x22bb3b-0x87;let _0x54620f=_0x3e3721[_0x22bb3b];return _0x54620f;},a10_0x22bb(_0x1c32ca,_0x168172);}export async function getAllLegalDocuments(_0x3a01e7='en'){const [_0xcf936e,_0x5d81b2,_0x5f5a86,_0x5b66e8]=await Promise['all']([getTermsAndConditions(_0x3a01e7),getRefundPolicy(_0x3a01e7),getPrivacyPolicy(_0x3a01e7),getContactInfo(_0x3a01e7)]);return{'terms':_0xcf936e,'refund':_0x5d81b2,'privacy':_0x5f5a86,'contact':_0x5b66e8};}