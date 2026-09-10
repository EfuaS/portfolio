export default function SectionHeader({
  header,
  title,
  isCentered = true,
}: {
  header: string;
  title: string;
  isCentered?: boolean;
}) {
  return (
    <div 
    data-aos="fade-down"
     className={`${isCentered ? "text-center" : "text-start"}`}>
      <p className="text-sm md:text-lg text-accent-color">{header}</p>
      <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-secondary-text-color! mt-2">
        {title}
      </h2>
    </div>
  );
}
