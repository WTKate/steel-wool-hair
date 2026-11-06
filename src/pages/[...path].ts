import type { APIRoute } from "astro";
import home from "../content/home.html?raw";
import hairMenu from "../content/hair-menu.html?raw";
import contact from "../content/contact.html?raw";
import privacyPolicy from "../content/privacy-policy.html?raw";
import termsOfUse from "../content/terms-of-use.html?raw";
const pages: Record<string,string> = {"/":home,"/hair-menu":hairMenu,"/contact":contact,"/privacy-policy":privacyPolicy,"/terms-of-use":termsOfUse};
export const prerender = false;
export const GET: APIRoute = ({url}) => {
 const path=url.pathname;
 if(path.endsWith(".html")) {
   const clean=path==="/index.html"?"/":path.slice(0,-5);
   if(clean in pages)return new Response(null,{status:301,headers:{Location:new URL(clean+url.search,url.origin).toString()}});
 }
 const clean=path.length>1?path.replace(/\/$/,""):path;
 if(path!==clean&&clean in pages)return new Response(null,{status:301,headers:{Location:new URL(clean+url.search,url.origin).toString()}});
 const html=pages[clean];
 if(!html)return new Response("Page not found",{status:404,headers:{"Content-Type":"text/plain; charset=utf-8"}});
 return new Response(html,{headers:{"Content-Type":"text/html; charset=utf-8"}});
};
