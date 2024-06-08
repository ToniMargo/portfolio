import ProjectSection from "@/components/ProjectSection";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  return (
    <div className="pt-6 mb-12">
      <div className="md:w-3/5 px-4 sm:px-6 lg:px-8 flex flex-col">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Things I’ve made trying to put my dent in the universe.</h1>
        <p className="text-zinc-600 text-lg mt-6 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
          ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        </p>
      </div>

      <ProjectSection />
    </div>
  );
}
