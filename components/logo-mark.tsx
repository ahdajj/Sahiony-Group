import Image from 'next/image';

export function LogoMark({
  src,
  alt,
  header = false,
  large = false,
}: {
  src: string;
  alt: string;
  header?: boolean;
  large?: boolean;
}) {
  const sizeClass = header ? 'md' : large ? 'lg' : 'sm';
  return (
    <div className={`logo-box ${sizeClass}`}>
      <Image
        src={src}
        alt={alt}
        width={320}
        height={140}
        sizes="(max-width: 768px) 160px, 320px"
        priority={header}
      />
    </div>
  );
}
