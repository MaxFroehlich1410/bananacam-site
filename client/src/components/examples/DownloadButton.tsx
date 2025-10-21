import DownloadButton from '../DownloadButton';

export default function DownloadButtonExample() {
  return (
    <div className="flex gap-4 flex-wrap">
      <DownloadButton platform="ios" />
      <DownloadButton platform="android" />
      <DownloadButton platform="ios" size="lg" />
      <DownloadButton platform="android" variant="outline" />
    </div>
  );
}
