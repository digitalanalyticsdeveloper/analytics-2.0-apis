(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4787],{7063:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return h}});var n=a(2122),i=a(9756),d=(a(5007),a(4983)),o=a(9536),r=["components"],l={},s={_frontmatter:l},m=o.Z;function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,d.mdx)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"bulk-data-insertion-api-faq"},"Bulk data insertion API FAQ"),(0,d.mdx)("p",null,"Get answers to common questions asked when using the Bulk data insertion API."),(0,d.mdx)("h2",{id:"general-questions"},"General questions"),(0,d.mdx)("h3",{id:"what-is-the-difference-between-the-bdia-and-the-data-insertion-api-available-in-the-14-api"},"What is the difference between the BDIA and the Data Insertion API available in the 1.4 API?"),(0,d.mdx)("p",null,"The Data Insertion API and Bulk Data Insertion API are both methods to submit server-side data to Adobe Analytics. Data Insertion API calls are made one event at a time. Bulk Data Insertion API accepts CSV formatted files containing event data, one event per row. Adobe recommends using the Bulk Data Insertion API in most cases."),(0,d.mdx)("h3",{id:"how-long-does-it-take-for-data-to-appear"},"How long does it take for data to appear?"),(0,d.mdx)("p",null,"For data with timestamps less than 24 hours old, ingested data typically follows a standard ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/technotes/latency.html"},"latency")," of 20-50 minutes. Some data, such as page views, is available within minutes."),(0,d.mdx)("p",null,"Data with timestamps older than 24 hours can take 2 hours or longer depending on the age of the data. See ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/technotes/latency.html#features-that-depend-on-latency"},"Features that depend on latency")," for more information."),(0,d.mdx)("h3",{id:"i-accidentally-put-two-of-the-same-header-in-a-file-how-is-that-data-ingested"},"I accidentally put two of the same header in a file. How is that data ingested?"),(0,d.mdx)("p",null,"If a column header is duplicated in a file, only the first instance of the column and its corresponding data fields are used; the duplicate columns are ignored, even if the first column was empty."),(0,d.mdx)("h3",{id:"what-is-the-throttle-limit-for-api-calls"},"What is the throttle limit for API calls?"),(0,d.mdx)("p",null,"A cap of 10 requests per second is enforced for all ingest API calls. If your BDIA implementation regularly exceeds this limit, consolidate your data into fewer larger files."),(0,d.mdx)("h2",{id:"responses-and-failures"},"Responses and failures"),(0,d.mdx)("h3",{id:"what-are-the-response-codes-that-i-can-get-and-what-do-they-mean"},"What are the response codes that I can get, and what do they mean?"),(0,d.mdx)("p",null,"The following response codes are returned by the API:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"HTTP_Response"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"100 - Continue")),(0,d.mdx)("td",{parentName:"tr",align:null},"This is used when uploading a file. This is sent to a client after authentication is checked and the HTTP request headers are validated. This signals to the client that they can begin to upload the large file. For example, if a client waits for this response code before sending a file, it can avoid uploading an entire file before learning that a visitor group ID was not specified.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"400 - Bad Request")),(0,d.mdx)("td",{parentName:"tr",align:null},"Required headers are missing or the uploaded file is missing critical information or is malformed.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"401 - Unauthorized")),(0,d.mdx)("td",{parentName:"tr",align:null},"The API key or user token used to interact with the API is not valid.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"403 - Forbidden")),(0,d.mdx)("td",{parentName:"tr",align:null},"Occurs when attempting to perform an action that is not currently allowed.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"404 - Not Found")),(0,d.mdx)("td",{parentName:"tr",align:null},"Occurs when attempting to call an undefined endpoint.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"413 - Payload Too Large")),(0,d.mdx)("td",{parentName:"tr",align:null},"Returned when the file being uploaded is larger than the permitted size.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"429 - Too Many Requests")),(0,d.mdx)("td",{parentName:"tr",align:null},"Occurs when the number of API calls exceeds the system limits.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"500 - Internal Error")),(0,d.mdx)("td",{parentName:"tr",align:null},"Occurs when the API encounters an unexpected internal error that it is unable to recover from.")))),(0,d.mdx)("h3",{id:"i-did-not-validate-a-file-before-uploading-it-and-the-entire-upload-failed-what-are-my-options"},"I did not validate a file before uploading it, and the entire upload failed. What are my options?"),(0,d.mdx)("p",null,"If the entire file fails, use the ",(0,d.mdx)("a",{parentName:"p",href:"troubleshooting.md"},"troubleshooting")," page to help determine the cause of the issue. You can then make adjustments to the file creation process, and recreate and reupload the file. These actions do not result in any duplicate data, because no data was ingested into Analytics. You can look at the ",(0,d.mdx)("inlineCode",{parentName:"p"},"invalid_rows")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"rows")," field in the API response message to determine if all of the rows failed. If ",(0,d.mdx)("inlineCode",{parentName:"p"},"invalid_rows")," is equal to ",(0,d.mdx)("inlineCode",{parentName:"p"},"rows"),", then no rows were successfully ingested."),(0,d.mdx)("h3",{id:"i-did-not-validate-a-file-before-uploading-it-and-some-hits-were-valid-while-others-were-not-what-are-my-options"},"I did not validate a file before uploading it, and some hits were valid while others were not. What are my options?"),(0,d.mdx)("p",null,"Your best course of action depends on how many invalid rows exist:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Mostly valid rows"),": If a file with a large amount of rows is submitted, but a small percentage of those rows fail, it is probably best to not resubmit the file. If you resubmit a file where most rows were successfully ingested during its initial processing, the majority of rows will result in duplicated data in Analytics. Accepting that a small amount of rows were lost is typically better than duplicating a larger amount of data."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Mostly invalid rows"),": If a file is submitted, and a large percentage of the rows have failed, then it might make sense to repair the rows and resubmit the file. Only take this action if the number of duplicate hits is acceptable and the missed server calls are individually significant. Otherwise, Adobe recommends fixing the file generation process and not trying to resubmit the file.")),(0,d.mdx)("h3",{id:"how-do-i-remove-data-that-was-inadvertently-uploaded"},"How do I remove data that was inadvertently uploaded?"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Data uploaded through the Bulk data insertion API is permanent.")," In some cases, you can use the ",(0,d.mdx)("a",{parentName:"p",href:"../data-repair/index.md"},"Data Repair API"),", but Adobe strongly recommends that you validate uploads before ingesting them into Adobe Analytics. Adobe Engineering Services can also assist customers in removing undesired data through a paid service engagement. Contact your Adobe Account Manager for more information."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-faq-md-a123ebabcc7cf80c0f5a.js.map