"use client";

import { getStorage, ref, uploadBytes } from "firebase/storage";

export default function UploadTestPage() {
  // Handle file upload when a file is selected
  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a root reference
    const storage = getStorage();

    // Create a reference with a unique filename using timestamp
    const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);

    try {
      // Upload the file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Uploaded a blob or file!", snapshot);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return (
    <div className="upload-test page">
      <header>
        <h1>Upload Test Page</h1>
        <p>This is the upload test page.</p>
      </header>

      <main>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col">
            Upload File:
            <input
              type="file"
              onChange={handleUpload}
              className="mt-2 border p-2"
            />
          </label>
        </form>
      </main>
    </div>
  );
}
