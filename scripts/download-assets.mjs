#!/usr/bin/env node
/**
 * Download Simudyne homepage assets into public/
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");

const assets = [
  ["https://simudyne.com/wp-content/themes/simudyne/images/logo.svg", "public/images/logo.svg"],
  ["https://simudyne.com/wp-content/themes/simudyne/images/footer-bg.png", "public/images/footer-bg.png"],
  ["https://simudyne.com/wp-content/uploads/2019/06/1.jpg", "public/images/hero/background.jpg"],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/Simudyne_Mobile_Background_01.jpg",
    "public/images/hero/background-mobile.jpg",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/datavis_cam2_twist_720-1.mp4",
    "public/videos/hero-datavis.mp4",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/simudyne_calibration.svg",
    "public/images/calibration.svg",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2025/10/Sim_Diagram_WhySim_All-e1759775105444-1536x668.png",
    "public/images/understand-impact.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/console-no-background.png",
    "public/images/console-dashboard.png",
  ],
  ["https://simudyne.com/wp-content/uploads/2019/06/console3.png", "public/images/console-mobile.png"],
  [
    "https://simudyne.com/wp-content/uploads/2025/10/Google-Cloud-Logo-1-e1759771837687.png",
    "public/images/partners/google-cloud.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2024/06/red_hat_white-e1759771894848.png",
    "public/images/partners/redhat.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2024/06/aws_white-e1759771884325.png",
    "public/images/partners/aws.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2025/10/nvidia_white-e1759771779483.png",
    "public/images/partners/nvidia.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2025/10/oracle_white-e1759771957137.png",
    "public/images/partners/oracle.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/cropped-mstile-310x310-32x32.png",
    "public/seo/favicon-32.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/cropped-mstile-310x310-192x192.png",
    "public/seo/favicon-192.png",
  ],
  [
    "https://simudyne.com/wp-content/uploads/2019/06/cropped-mstile-310x310-180x180.png",
    "public/seo/apple-touch-icon.png",
  ],
];

for (let i = 0; i <= 104; i += 2) {
  assets.push([
    `https://simudyne.com/wp-content/themes/simudyne/images/logoanimation/Seq07_Dimensional/frame_${i}.png`,
    `public/images/hero/logoanim/frame_${String(i).padStart(3, "0")}.png`,
  ]);
}

async function download(url, dest) {
  const abs = join(ROOT, dest);
  await mkdir(dirname(abs), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(abs, buf);
  return buf.length;
}

async function runBatch(items, concurrency = 4) {
  let i = 0;
  let ok = 0;
  let fail = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      const [url, dest] = items[idx];
      try {
        const size = await download(url, dest);
        console.log(`OK ${dest} (${size})`);
        ok++;
      } catch (e) {
        console.error(`FAIL ${dest}: ${e.message}`);
        fail++;
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`Done ok=${ok} fail=${fail}`);
}

await runBatch(assets, 4);
