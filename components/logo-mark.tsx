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
      <img src={src} alt={alt} />
    </div>
  );
}
