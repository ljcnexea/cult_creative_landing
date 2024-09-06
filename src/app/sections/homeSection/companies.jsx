import Companies from "@/app/components/Companies";

const companiesGroup1 = [
  { name: "pavillion", path: "/images/Main/pavi.png" },
  { name: "dressing paula", path: "/images/Main/uniqlo.png" },
  { name: "melium", path: "/images/brands/melium.png" },
  { name: "indigo", path: "/images/Main/indigo.png" },
  { name: "bata", path: "/images/brands/bata.jpg" },
  { name: "huckleberry", path: "/images/brands/huckleberry.png" },
  { name: "longchamp", path: "/images/brands/longchamp.png" },
  { name: "farmfresh", path: "/images/brands/farmfresh.png" },
  { name: "absolute", path: "/images/brands/absolutethai.png" },
  { name: "klia", path: "/images/brands/klia.png" },
];

const companiesGroup2 = [
  { name: "hsbc", path: "/images/brands/hsbc.jpg" },
  { name: "flint", path: "/images/brands/flint.png" },
  { name: "dressing paula", path: "/images/brands/dressingpaula.png" },
  { name: "rhb", path: "/images/brands/rhb.jpg" },
  { name: "artem", path: "/images/brands/artem.jpg" },
  { name: "ripcurl", path: "/images/brands/ripcurl.png" },
  { name: "nelissa", path: "/images/brands/nelissa.png" },
  { name: "nature", path: "/images/brands/naturevalley.png" },
  { name: "thebodyshop", path: "/images/brands/thebodyshop.png" },
  { name: "hotlink", path: "/images/brands/hotlink.png" },
];

const HomeCompanies = ({ title }) => {
  return (
    <section className="bg-[#F4F4F4] py-8 px-5 overflow-hidden">
      <div className="flex items-center gap-10 px-15 mb-5">
        <h3 className="lg:text-3xl text-xl -tracking-[.1rem] font-bold text-[#1340FF]">
          {title}
        </h3>
        <hr className="grow border-2 border-[#1340FF]" />
      </div>

      <Companies
        companiesImages={companiesGroup1}
        rounded="rounded-full"
        type="companies"
        imgStyle="w-20 h-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        animation={"animate-loop-scroll-companies"}
      />

      <Companies
        companiesImages={companiesGroup2}
        rounded="rounded-full"
        type="companies"
        imgStyle="w-20 h-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        animation={"animate-loop-scroll-companies-reverse"}
      />

      {/* <div className="flex space-x-10 animate-marquee">
        <Companies
          companiesImages={companiesGroup1}
          rounded="rounded-full"
          type="companies"
          // imgStyle="w-16 h-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </div> */}
      {/* <div className="flex space-x-10 animate-marquee-reverse mt-5">
        <Companies
          companiesImages={companiesGroup2}
          rounded="rounded-full"
          type="companies"
          // imgStyle="w-16 h-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </div> */}
    </section>
  );
};

export default HomeCompanies;
