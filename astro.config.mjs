import { defineConfig } from "astro/config";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";
// Existing Wix Forms code is preserved in the HTML pages. The frontend only
// needs server routing, so no Wix SDK server authentication is initialized.
export default defineConfig({
 adapter: wixHostingAdapter(),
 output: "server",
 security: { checkOrigin: false },
 image: { domains: ["static.wixstatic.com"] },
});
