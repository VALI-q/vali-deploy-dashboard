(()=>{var t={};t.id=6727,t.ids=[6727],t.modules={10846:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:t=>{"use strict";t.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:t=>{"use strict";t.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:t=>{"use strict";t.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},58952:(t,e,a)=>{"use strict";a.r(e),a.d(e,{patchFetch:()=>h,routeModule:()=>c,serverHooks:()=>m,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>u});var r={};a.r(r),a.d(r,{GET:()=>l,runtime:()=>p});var o=a(42706),i=a(28203),n=a(45994),s=a(39187);let p="nodejs";async function l(t){let{searchParams:e}=new URL(t.url),a=e.get("orderNumber");if(!a)return s.NextResponse.json({success:!1,message:"Missing orderNumber"},{status:400});let r="https://api.valiportal.net";if(!r)return s.NextResponse.json({success:!1,message:"Missing NEXT_PUBLIC_API_URL"},{status:500});let o=r.endsWith("/")?r.slice(0,-1):r,i=`${o}/check-ins/public/invoice.html?orderNumber=${encodeURIComponent(a)}`;try{let t=await fetch(i,{headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"},cache:"no-store"});if(!t.ok){let e=await t.text().catch(()=>"");return s.NextResponse.json({success:!1,message:`Upstream error: ${t.status}`,details:e?.slice(0,500)||void 0},{status:502})}let e=await t.text(),a=`
      <style>
        * { box-sizing: border-box !important; }
        html, body { max-width: 100% !important; }
        body { margin: 0 !important; }
        img, svg, canvas, video { max-width: 100% !important; height: auto !important; }

        /* Try to make the total container responsive without affecting table layout */
        .total, .invoice-total, .total-container, .grand-total, #total, #grandTotal {
          max-width: 100% !important;
          width: 100% !important;
          box-sizing: border-box !important;
          overflow: visible !important;
        }

        .total *, .invoice-total *, .total-container *, .grand-total *, #total *, #grandTotal * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        @media (max-width: 420px) {
          body { padding: 10px !important; }
          body { font-size: 12px !important; }
          /* Helps fit fixed-width invoice designs without reflowing table cells */
          body { zoom: 0.96; }

          .total, .invoice-total, .total-container, .grand-total, #total, #grandTotal {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 10px !important;
            padding-left: 12px !important;
            padding-right: 18px !important;
            flex-wrap: wrap !important;
          }

          .total > :last-child, .invoice-total > :last-child, .total-container > :last-child, .grand-total > :last-child, #total > :last-child, #grandTotal > :last-child {
            padding-right: 4px !important;
          }
          .total span, .invoice-total span, .total-container span, .grand-total span, #total span, #grandTotal span {
            white-space: nowrap !important;
          }
        }
      </style>
    `,r='<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />',o=e.includes("</head>")?e.replace("</head>",`${r}${a}</head>`):`${r}${a}${e}`;return new s.NextResponse(o,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}})}catch(e){let t=e instanceof Error?e.message:"Unknown error";return s.NextResponse.json({success:!1,message:t},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/invoice/route",pathname:"/api/invoice",filename:"route",bundlePath:"app/api/invoice/route"},resolvedPagePath:"D:\\vali\\dashboard\\src\\app\\api\\invoice\\route.ts",nextConfigOutput:"",userland:r}),{workAsyncStorage:d,workUnitAsyncStorage:u,serverHooks:m}=c;function h(){return(0,n.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:u})}},96487:()=>{},78335:()=>{}};var e=require("../../../webpack-runtime.js");e.C(t);var a=t=>e(e.s=t),r=e.X(0,[638,5452],()=>a(58952));module.exports=r})();