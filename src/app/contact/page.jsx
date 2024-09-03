import { Suspense } from "react";
import Header from "@/app/components/Header.jsx";
import Content from "./Content.jsx"; 
import LastSection from "@/app/sections/brandsection/LastSection.jsx";

export const metadata = {
  title: "Contact Us",
  description:
    "Connect with Cult Creative. Reach out to our dedicated support team via email or Instagram for any enquiries or assistance.",
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <section className="flex p-10 items-center justify-center bg-[#F4F4F4] text-[#8A5AFE] font-aileron">
            <Content />
          </section>
        </Suspense>
      </main>
      <LastSection />
    </>
  );
};

export default Contact;
