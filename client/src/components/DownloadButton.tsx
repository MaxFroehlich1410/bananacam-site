import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

interface DownloadButtonProps {
  size?: "default" | "lg";
  variant?: "default" | "outline";
}

export default function DownloadButton({ size = "default", variant = "default" }: DownloadButtonProps) {
  const handleDownload = () => {
    console.log(`Download iOS clicked`);
  };

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleDownload}
      data-testid="button-download-ios"
      className={`${size === "lg" ? "text-lg px-8 py-6" : ""} gap-2`}
    >
      <Apple className="w-5 h-5" />
      <div className="flex flex-col items-start">
        <span className="text-xs opacity-80">Download on</span>
        <span className="font-semibold">App Store</span>
      </div>
    </Button>
  );
}
