import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET() {
  try {
    console.log(`Fetching versions from ${BACKEND_URL}/api/versions/latest`);

    const [msiRes, vmRes] = await Promise.all([
      fetch(`${BACKEND_URL}/api/versions/latest?type=msi`),
      fetch(`${BACKEND_URL}/api/versions/latest?type=vm`),
    ]);

    console.log(`MSI response: ${msiRes.status} ${msiRes.statusText}`);
    console.log(`VM response: ${vmRes.status} ${vmRes.statusText}`);

    // Only try to parse JSON if response is ok
    let msi = null;
    let vm = null;

    if (msiRes.ok) {
      msi = await msiRes.json();
      console.log("MSI data:", msi);
    } else {
      console.log("MSI request failed");
    }

    if (vmRes.ok) {
      vm = await vmRes.json();
      console.log("VM data:", vm);
    } else {
      console.log("VM request failed");
    }

    if (!msi && !vm) {
      return NextResponse.json(
        { error: "No releases available", version: null, vm_version: null },
        { status: 200 }
      );
    }

    return NextResponse.json({
      version: msi?.version || null,
      vm_version: vm?.version || null,
      name: "Photobooth IPH",
      short_name: "IPH Photobooth",
      company: "Intania Production House",
      has_download: msi?.has_download || false,
      release_notes: msi?.release_notes || [],
      file_size: msi?.file_size,
    });
  } catch (error) {
    console.error("Version API error:", error);
    return NextResponse.json(
      {
        error: "Unable to fetch version information",
        version: null,
        vm_version: null,
        name: "Photobooth IPH",
        short_name: "IPH Photobooth",
        company: "Intania Production House",
      },
      { status: 200 }
    );
  }
}
