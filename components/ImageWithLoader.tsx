"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageProps } from "next/image";

type ImageWithLoaderProps = Omit<ImageProps, 'onLoadingComplete'>;

export default function ImageWithLoader(props: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { fill, className = "" } = props;

  return (
    <div className={fill ? "relative w-full h-full" : "relative inline-block"}>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10 rounded-lg">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
        </div>
      )}

      {/* Image */}
      <Image
        {...props}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
