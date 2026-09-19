type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
};

const SectionHeading = ({ eyebrow, title, intro, light = false }: SectionHeadingProps) => (
  <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
    <p className={`section-label lg:col-span-3 ${light ? "text-primary-foreground/70" : "text-primary"}`}>{eyebrow}</p>
    <div className="lg:col-span-9">
      <h2 className={`section-title ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  </header>
);

export default SectionHeading;