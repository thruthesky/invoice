import {
  uploadFile,
  uploadImage,
  UploadImageOptions,
} from "@/lib/firebase/firebase.functions";
import { useEffect } from "react";

export default function UploadImageButton(options: UploadImageOptions) {
  useEffect(() => {
    document.onpaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      // console.log("items", items, items?.length);
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (
            file &&
            (file.type.startsWith("image/") || file.type.endsWith("/pdf"))
          ) {
            // console.log("file", file);
            uploadFile(file, options);
          }
        }
      }
    };
    return () => {
      // Cleanup the paste event listener when the component unmounts
      // console.log("cleanup paste event listener");
      document.onpaste = null;
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <input
        className="absolute bottom-0 left-0 right-0 top-0 text-8xl opacity-0 cursor-pointer"
        type="file"
        accept="image/png, image/jpeg, image/jpg, application/pdf"
        onChange={(e) => uploadImage(e, options)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
        />
      </svg>
    </div>
  );
}
