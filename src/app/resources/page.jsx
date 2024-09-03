import Header from "@/app/components/Header.jsx";
import resources from "@/app/contants/resources.json";
import News from "@/app/components/News.jsx";
import LastSection from "@/app/sections/brandsection/LastSection.jsx";

export const metadata = {
  title: "Resources",
  description: "Discover invaluable insights and resources at Cult Creative’s blog. Dive into inspiration, expert tips, and stay ahead of industry trends with our creator-friendly content hub.",
  alternates: {
    canonical: "/resources",
  },
};

const Resources = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <div className="text-center py-10 bg-[#8A5AFE]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Resources
          </h1>
        </div>
        <div className="px-5 py-10 bg-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {resources.map((elem, i) => (
              <div key={i} className="cursor-pointer">
                <News
                  title={elem.title}
                  image={elem.image}
                  type="resource"
                  path={elem.path}
                  author={elem.author}
                  authorImage={elem.authorImage}
                  titleClassName="text-2xl md:text-3xl lg:text-4xl font-bold" 
                  imageClassName="w-full h-auto object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <LastSection color="#1340FF" />
    </>
  );
};

export default Resources;
