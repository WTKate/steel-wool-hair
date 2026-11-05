import fs from "node:fs/promises";
const base = "https://headless-jdyysrveqvh-web-today-1409.wix-site-host.com/assets/";
const names = ["blonde.jpg","brunette.jpg","curls.jpg","hero.jpg","keune-blonde.jpg","keune-derma.jpg","keune-group.jpg","keune-logo.png","keune-nutrition.jpg","keune-product-care.png","keune-product-so-pure.png","keune-product-styling.png","keune-style.jpg","keune-volume.jpg"];
await fs.mkdir("public/assets",{recursive:true});
for (const name of names) {
  const response = await fetch(base + name);
  if (!response.ok) throw new Error("Asset failed: " + name + " " + response.status);
  await fs.writeFile("public/assets/" + name, Buffer.from(await response.arrayBuffer()));
}
