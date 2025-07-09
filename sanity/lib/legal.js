(function(_0x321a1d,_0x23b47e){const _0x155e90=a10_0x59b1,_0x14903c=_0x321a1d();while(!![]){try{const _0x50664f=parseInt(_0x155e90(0x19b))/0x1+-parseInt(_0x155e90(0x19c))/0x2*(-parseInt(_0x155e90(0x198))/0x3)+-parseInt(_0x155e90(0x194))/0x4+parseInt(_0x155e90(0x197))/0x5*(parseInt(_0x155e90(0x196))/0x6)+parseInt(_0x155e90(0x195))/0x7+-parseInt(_0x155e90(0x19a))/0x8+parseInt(_0x155e90(0x19d))/0x9*(parseInt(_0x155e90(0x199))/0xa);if(_0x50664f===_0x23b47e)break;else _0x14903c['push'](_0x14903c['shift']());}catch(_0x4bcbaf){_0x14903c['push'](_0x14903c['shift']());}}}(a10_0x5d6c,0x9803d));import{groq}from'next-sanity';import{client}from'./client';const legalDocumentFields='\x0a\x20\x20_id,\x0a\x20\x20title,\x0a\x20\x20slug,\x0a\x20\x20language,\x0a\x20\x20content,\x0a\x20\x20lastUpdated,\x0a\x20\x20effectiveDate\x0a';export async function getTermsAndConditions(_0x360605='en'){const _0x37b06a=groq`
    *[_type == "termsConditions" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x37b06a,{'language':_0x360605});}export async function getAllTermsAndConditions(){const _0x1d3b6d=groq`
    *[_type == "termsConditions"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x1d3b6d);}export async function getRefundPolicy(_0x33d45a='en'){const _0x3a9956=groq`
    *[_type == "refundPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x3a9956,{'language':_0x33d45a});}export async function getAllRefundPolicies(){const _0xa06357=groq`
    *[_type == "refundPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0xa06357);}function a10_0x5d6c(){const _0x5936d6=['6rQZCcB','3328145eECGvh','138NvKyiH','2847730chjWeL','2366864ZguDqq','288715UFZPPJ','29446TZvxpY','9TtNnaX','4577532BwdLMf','1025633rOWGdI'];a10_0x5d6c=function(){return _0x5936d6;};return a10_0x5d6c();}export async function getPrivacyPolicy(_0x2e591e='en'){const _0x303205=groq`
    *[_type == "privacyPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x303205,{'language':_0x2e591e});}function a10_0x59b1(_0x3e82fd,_0x59f898){const _0x5d6c91=a10_0x5d6c();return a10_0x59b1=function(_0x59b1e4,_0x46501a){_0x59b1e4=_0x59b1e4-0x194;let _0x62459b=_0x5d6c91[_0x59b1e4];return _0x62459b;},a10_0x59b1(_0x3e82fd,_0x59f898);}export async function getAllPrivacyPolicies(){const _0x4e1c0f=groq`
    *[_type == "privacyPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x4e1c0f);}export async function getContactInfo(_0xf62c55='en'){const _0x2bcf2f=groq`
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
  `;return client['fetch'](_0x2bcf2f,{'language':_0xf62c55});}export async function getAllContactInfo(){const _0x3c8e07=groq`
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
  `;return client['fetch'](_0x3c8e07);}export async function getAllLegalDocuments(_0x53c21='en'){const [_0x4a0737,_0x512126,_0x3cc66e,_0x34063f]=await Promise['all']([getTermsAndConditions(_0x53c21),getRefundPolicy(_0x53c21),getPrivacyPolicy(_0x53c21),getContactInfo(_0x53c21)]);return{'terms':_0x4a0737,'refund':_0x512126,'privacy':_0x3cc66e,'contact':_0x34063f};}