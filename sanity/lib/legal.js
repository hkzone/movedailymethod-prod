(function(_0x24c840,_0xe1ba78){const _0x5e6fee=a10_0x258b,_0x2bc2a7=_0x24c840();while(!![]){try{const _0x593c0c=parseInt(_0x5e6fee(0x188))/0x1+parseInt(_0x5e6fee(0x18c))/0x2*(parseInt(_0x5e6fee(0x189))/0x3)+-parseInt(_0x5e6fee(0x183))/0x4*(-parseInt(_0x5e6fee(0x185))/0x5)+-parseInt(_0x5e6fee(0x184))/0x6*(parseInt(_0x5e6fee(0x186))/0x7)+-parseInt(_0x5e6fee(0x18b))/0x8*(-parseInt(_0x5e6fee(0x18a))/0x9)+-parseInt(_0x5e6fee(0x18d))/0xa+-parseInt(_0x5e6fee(0x18e))/0xb;if(_0x593c0c===_0xe1ba78)break;else _0x2bc2a7['push'](_0x2bc2a7['shift']());}catch(_0x281c7c){_0x2bc2a7['push'](_0x2bc2a7['shift']());}}}(a10_0x31c2,0xa45e4));function a10_0x31c2(){const _0x428575=['100sXQegw','817299XAjlDG','fetch','210787GbqVSW','6KmjQeW','171711eplduk','32jQokGH','105542vShjSC','4259170euWJck','1565289vksvNM','193116qVLPQM','6orkyoA'];a10_0x31c2=function(){return _0x428575;};return a10_0x31c2();}import{groq}from'next-sanity';import{client}from'./client';const legalDocumentFields='\x0a\x20\x20_id,\x0a\x20\x20title,\x0a\x20\x20slug,\x0a\x20\x20language,\x0a\x20\x20content,\x0a\x20\x20lastUpdated,\x0a\x20\x20effectiveDate\x0a';export async function getTermsAndConditions(_0x5db4e9='en'){const _0x12412d=groq`
    *[_type == "termsConditions" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x12412d,{'language':_0x5db4e9});}export async function getAllTermsAndConditions(){const _0xa66025=groq`
    *[_type == "termsConditions"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0xa66025);}export async function getRefundPolicy(_0x4086b6='en'){const _0x15425f=a10_0x258b,_0x5a7c96=groq`
    *[_type == "refundPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client[_0x15425f(0x187)](_0x5a7c96,{'language':_0x4086b6});}export async function getAllRefundPolicies(){const _0x204005=groq`
    *[_type == "refundPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x204005);}export async function getPrivacyPolicy(_0x5b964b='en'){const _0x5d09e6=groq`
    *[_type == "privacyPolicy" && language == $language][0] {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x5d09e6,{'language':_0x5b964b});}export async function getAllPrivacyPolicies(){const _0x2e33fe=groq`
    *[_type == "privacyPolicy"] | order(language asc) {
      ${legalDocumentFields}
    }
  `;return client['fetch'](_0x2e33fe);}function a10_0x258b(_0x123802,_0x2fded6){const _0x31c246=a10_0x31c2();return a10_0x258b=function(_0x258b1b,_0x194266){_0x258b1b=_0x258b1b-0x183;let _0x3e4f02=_0x31c246[_0x258b1b];return _0x3e4f02;},a10_0x258b(_0x123802,_0x2fded6);}export async function getContactInfo(_0x308d1e='en'){const _0x47ea92=groq`
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
  `;return client['fetch'](_0x47ea92,{'language':_0x308d1e});}export async function getAllContactInfo(){const _0x365c5b=groq`
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
  `;return client['fetch'](_0x365c5b);}export async function getAllLegalDocuments(_0x8a70c3='en'){const [_0x1721fc,_0x3f59df,_0x9d5f96,_0x49b03a]=await Promise['all']([getTermsAndConditions(_0x8a70c3),getRefundPolicy(_0x8a70c3),getPrivacyPolicy(_0x8a70c3),getContactInfo(_0x8a70c3)]);return{'terms':_0x1721fc,'refund':_0x3f59df,'privacy':_0x9d5f96,'contact':_0x49b03a};}