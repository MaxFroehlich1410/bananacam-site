import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

interface DownloadButtonProps {
  platform: "ios" | "android";
  size?: "default" | "lg";
  variant?: "default" | "outline";
}

export default function DownloadButton({ platform, size = "default", variant = "default" }: DownloadButtonProps) {
  const isIOS = platform === "ios";
  
  const handleDownload = () => {
    console.log(`Download ${platform} clicked`);
  };

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleDownload}
      data-testid={`button-download-${platform}`}
      className={`${size === "lg" ? "text-lg px-8 py-6" : ""} gap-2`}
    >
      {isIOS ? <Apple className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      <div className="flex flex-col items-start">
        <span className="text-xs opacity-80">Download on</span>
        <span className="font-semibold">{isIOS ? "App Store" : "Google Play"}</span>
      </div>
    </Button>
  );
}
