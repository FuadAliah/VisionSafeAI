interface ServiceMediaProps {
  url: string;
  title: string;
}

export const ServiceMedia = ({ url, title }: ServiceMediaProps) => {
  const isVideo = url.endsWith('.mp4');
  if (isVideo) {
    return (
      <video 
        src={url} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <img 
      src={url} 
      alt={title} 
      className="w-full h-full object-cover" 
    />
  );
};
