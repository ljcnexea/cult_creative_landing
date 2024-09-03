import Header from "@/app/components/Header.jsx";
import newsdata from "@/app/contants/newsroom.json";
import News from "@/app/components/News.jsx";
import LastSection from "@/app/sections/brandsection/LastSection.jsx";

export const metadata = {
  title: "Newsroom",
  description:
    "Stay updated with Cult Creative’s newsroom. Access the latest announcements, press releases and media coverage to stay informed about our journey and industry impact.",
  alternates: {
    canonical: "/newsroom",
  },
};

const Newsroom = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-black">
        <div className="text-center py-10 bg-[#004830]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-aileron text-white">
            News
            <span className="font-times italic text-[1.15em]">room</span>
          </h1>
        </div>

        <div className="px-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsdata.map((elem, i) => (
              <div key={i} className="w-full">
                <News
                  type={"newsroom"}
                  title={elem.title}
                  date={elem.date}
                  link={elem.link}
                  source={elem.source}
                  image={elem.image}
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

export default Newsroom;
