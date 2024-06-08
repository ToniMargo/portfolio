import UsesSection from "@/components/UsesSection";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  return (
    <div className="px-6 w-full">
      <div className="md:w-3/4 my-12">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Software I Use, Gadgets I Love, and Other Things I Recommend
        </h1>
        <p className="text-zinc-600 text-lg mt-6 mb-8">
          As a software engineer, having the right tools is crucial for productivity and creativity. Below, you’ll find
          a curated list of the hardware, software, and accessories that I rely on daily to deliver top-notch solutions.
          These are the items that help me code efficiently, design intuitively, and stay organized in my projects.
        </p>
      </div>
      <div className="my-24">
        <UsesSection />
      </div>
    </div>
  );
}
