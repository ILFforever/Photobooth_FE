import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET() {
  try {
    const [msiRes, vmRes] = await Promise.all([
      fetch(`${BACKEND_URL}/api/versions/latest?type=msi`),
      fetch(`${BACKEND_URL}/api/versions/latest?type=vm`),
    ]);

    const msi = msiRes.ok ? await msiRes.json() : null;
    const vm = vmRes.ok ? await vmRes.json() : null;

    return NextResponse.json({
      version: msi?.version || "1.0.12",
      vm_version: vm?.version || "1.0.5",
      name: "Photobooth IPH",
      short_name: "IPH Photobooth",
      company: "Intania Production House",
      download_url: msi?.download_url,
      release_notes: msi?.release_notes || [],
    });
  } catch {
    // Fallback if backend is unreachable
    return NextResponse.json({
      version: "1.0.12",
      vm_version: "1.0.5",
      name: "Photobooth IPH",
      short_name: "IPH Photobooth",
      company: "Intania Production House",
    });
  }
}
