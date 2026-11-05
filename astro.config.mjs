import { defineConfig } from "astro/config";
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";
import react from "@astrojs/react";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";
export default defineConfig({
 integrations: [wix(), wixPages(), react()],
 adapter: wixHostingAdapter(),
 output: "server",
 security: { checkOrigin: false },
 image: { domains: ["static.wixstatic.com"] },
});
