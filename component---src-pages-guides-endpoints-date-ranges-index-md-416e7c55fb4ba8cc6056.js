(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7966],{5058:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return c}});var t,d=a(2122),i=a(9756),r=(a(5007),a(4983)),o=a(9536),l=["components"],s={},p=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),m={_frontmatter:s},u=o.Z;function c(e){var n=e.components,a=(0,i.Z)(e,l);return(0,r.mdx)(u,(0,d.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"date-ranges-api"},"Date ranges API"),(0,r.mdx)("p",null,"The Analytics 2.0 Date Range APIs allow you to retrieve, update, or create date ranges programmatically through Adobe I/O. These APIs use the same data and methods that Adobe uses inside the product UI."),(0,r.mdx)("h2",{id:"retrieve-multiple-date-ranges"},"Retrieve multiple date ranges"),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"parameters.md"},"Date range parameters")," for query strings that you can attach to this API call."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/dateranges")),(0,r.mdx)("p",null,"For example, get a response localized in English, limited to the first page, with three responses per page."),(0,r.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"request"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/aawapp6/dateranges?locale=en_US&limit=3&page=0" \\\n    -H "x-api-key: [oauth token]" \\\n    -H "x-proxy-global-company-id: [company name]" \\\n    -H "Authorization: Bearer [ims user token]" \\\n    -H "Accept: application/json" \\\n    -H "Content-Type: application/json"\n')),(0,r.mdx)("h4",{id:"response"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "id": "5a5e294452faff002119a986",\n      "name": "Curated Data Range Test",\n      "description": "Curated Data Range Test",\n      "owner": {\n        "id": 622291\n      },\n      "createDate": null,\n      "disabledDate": null\n    },\n    {\n      "id": "591f2edabef0d37113bbcbf5",\n      "name": "Sample Date Range (Don\'t delete it)",\n      "description": "Sample Date Range",\n      "owner": {\n        "id": 622291\n      },\n      "createDate": null,\n      "disabledDate": null\n    },\n    {\n      "id": "5e79255b4201ce1b3cfd7b2b",\n      "name": "Integration Test 1",\n      "description": "Integration Test 1 Description",\n      "owner": {\n        "id": 622291\n      },\n      "createDate": null,\n      "disabledDate": null\n    }\n  ],\n  "totalElements": 34,\n  "totalPages": 12,\n  "numberOfElements": 3,\n  "number": 0,\n  "firstPage": true,\n  "lastPage": false,\n  "sort": null,\n  "size": 3\n}\n')),(0,r.mdx)("h2",{id:"retrieve-a-single-date-range"},"Retrieve a single date range"),(0,r.mdx)("p",null,"If you know the ID of the date range that you want to retrieve, include it as part of the call."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/dateranges/{ID}")),(0,r.mdx)("p",null,"For example, get a date range with ID ",(0,r.mdx)("inlineCode",{parentName:"p"},"839455")," and also include its definition."),(0,r.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"request-1"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/aawapp6/dateranges/839455?expansion=definition" \\\n    -H "x-api-key: [oauth token]" \\\n    -H "x-proxy-global-company-id: [company id]" \\\n    -H "Authorization: Bearer [ims user token]" \\\n    -H "Accept: application/json" \\\n    -H "Content-Type: application/json"\n')),(0,r.mdx)("h4",{id:"response-1"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "839455",\n  "name": "Curated Data Range Test",\n  "description": "Curated Data Range Test",\n  "owner": {\n    "id": 622291\n  },\n  "definition": "tm/tm+1m",\n  "createDate": null,\n  "disabledDate": null\n}\n')),(0,r.mdx)("h2",{id:"delete-a-date-range"},"Delete a date range"),(0,r.mdx)("p",null,"Permanently deletes a date range by ID. The request is similar to retrieving a single date range, but with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"DELETE")," request instead of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET")," request."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"DELETE https://analytics.adobe.io/api/{COMPANYID}/dateranges/{ID}")),(0,r.mdx)("h2",{id:"update-or-change-a-date-range"},"Update or change a date range"),(0,r.mdx)("p",null,"Overwrite fields in a date range with desired values. Partial updates are supported, meaning that you can send only the parts of the date range that you want updated and the other fields are not changed. If you send an empty string, that field is cleared."),(0,r.mdx)("p",null,"Date range templates cannot be updated. Copy a template to a new date range, then make the changes to the copy."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"PUT https://analytics.adobe.io/api/{COMPANYID}/dateranges/{ID}")),(0,r.mdx)("p",null,"This API call requires a JSON body. Include the fields that you want to update in the body. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "New name",\n  "description": "New description",\n  "definition": "tm/tm+1m"\n}\n')),(0,r.mdx)("h2",{id:"create-a-date-range"},"Create a date range"),(0,r.mdx)("p",null,"Create a date range. The name cannot be an empty string or null, and is encoded in UTF-8. Adobe recommends clear and concise names so that they render correctly in the product UI."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{COMPANYID}/dateranges/")),(0,r.mdx)("p",null,"This API call requires a JSON body. Required fields include ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"definition"),". For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Two months ago",\n  "description": "Description",\n  "definition": "tm-3m/tm-2m"\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-date-ranges-index-md-416e7c55fb4ba8cc6056.js.map