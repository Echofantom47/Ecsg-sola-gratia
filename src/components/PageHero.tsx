import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
};

const PageHero = ({ eyebrow, title, intro, image }: PageHeroProps) => (
  <section className="bg-muted pt-28 md:pt-36">
    <div className="container mx-auto px-4 pb-14 md:pb-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="section-label text-primary">{eyebrow}</p>
          <h1 className="page-title mt-5">{title}</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:col-span-5">{intro}</p>
      </motion.div>
    </div>
    {image && <img src={image} alt="" className="h-[42vh] min-h-72 w-full object-cover md:h-[56vh]" />}
  </section>
);

export default PageHero;