import resources from "@/app/contants/resources.json";
import * as rp from "@/app/components/resource-page.jsx";
import { whatsappLink_interestedMsg } from "@/app/components/misc.js";

const resource = resources[10];
const relatedResources = [
  resources[1], 
  resources[2],
  resources[3],
];

const latestResources = [
  resource[0]
];

for(let x = 0; x < resources.length; x++){
  latestResources.push(resources[x])
}

const title = resource.title;

const keywords = [
  "B2B UGC marketing strategy",
  "Content creator partnerships B2B",
  "UGC benefits for businesses",
  "B2B influencer marketing solutions",
];

export const metadata = {
  title: title,
  description: "UGC enhances brand visibility and engagement through authentic storytelling by content creators. Cult Creative offers businesses streamlined processes and UGC solutions to capitalise on the power of content creators.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource11 = () => {
  return (
    <>
      <rp.Page keywords={keywords} relatedResources={relatedResources} latestResources={latestResources}>
        <rp.h1>{title}</rp.h1>
        <rp.p>
          The Internet is oversaturated with content, from news updates and celebrity gossip to fast-moving trends and memes.
          Through all that noise, a band of charismatic personalities stands out with their energetic presence and storytelling skills: content creators.
        </rp.p>
        <rp.p>
          What was once your hipster friend with a considerable following posting photos of their latte art for fun, content creators have now evolved into a money-making powerhouse of creative and engaging individuals whom we can’t seem to get enough of.
        </rp.p>
        <rp.p>
          They have become ubiquitous and with the{" "}
          <rp.a href="https://www.insg.co/en/influencer-marketing-southeast-asia/">
            creator economy in Southeast Asia expected to grow at an annual rate of 11.39%
          </rp.a>,
          they’re only getting bigger and stronger.
        </rp.p>
        <rp.p>
          Not only have they significantly changed our relationship with social media, but the rise in popularity of content creators have also revolutionised digital marketing.
          Indeed,{" "}
          <rp.a href="https://www.instagram.com/reel/C73XW-8phRZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            when asked about the potential benefits of incorporating user-generated content (UGC) into their marketing strategy
          </rp.a>,
          Malaysian industry leaders had these things to say:
        </rp.p>
        <rp.ul>
          <rp.li>
            The authenticity and reliability of UGC drives engagements, helping businesses reach wider networks of audience not previously tapped into.
          </rp.li>
          <rp.li>
            UGC showcases the products and services in action, which helps convert views into actual sales!
          </rp.li>
          <rp.li>
            UGC can help amplify the message and awareness of a brand.
          </rp.li>
        </rp.ul>
        <rp.p>
          So, it seems like promoting your business on the internet as we used to know it is dead.
          Leveraging the unique and relatable voices of content creators is the way to go.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/p/C5QAvZxJ4BW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        <rp.p>
          However, we understand that working with content creators can be confusing and overwhelming, especially when you have never done so before.
          At{" "}
          <rp.a href="/brands">
            Cult Creative
          </rp.a>,
          we empower businesses to work with content creators through our hassle-free and easy-to-understand packages. Here’s how we make it simple for you.
        </rp.p>

        <rp.h2>Connect</rp.h2>
        <rp.p>
          Getting started with Cult Creative is so easy you can do it in your sleep (though, we don’t recommend you doing so).
          You’ll begin by completing a brief form that outlines everything you need for your campaign, including your campaign goals, content direction, and creator personality.
        </rp.p>
        <rp.p>
          If you ever become uncertain of your responses, just{" "}
          <rp.a href={whatsappLink_interestedMsg}>
            shoot us a WhatsApp
          </rp.a>{" "}
          and we’ll walk you through it.
          We’re here to help!
        </rp.p>

        <rp.h2>Brief</rp.h2>
        <rp.p>
          Once your form is sorted, one of our friendly Client Success Managers (CSM) will schedule a call to go over the details and tease out any concerns or confusions you might have about the process.
          We want to make sure we share the same brain when it comes to your visions and goals.
        </rp.p>

        <rp.h2>Begin</rp.h2>
        <rp.p>
          This is where the fun part begins!
          Based on your form, our experienced CSMs will source the right creators for your campaign from our pool of 13,000 (and counting) talented creators.
          You’ll be given the opportunity to reject any of our recommendations and we’ll keep searching for the perfect creator for you.
        </rp.p>
        <rp.p>
          Once you’re happy with the list of creators, our CSMs will brief them on the campaign and handle any necessary logistical tasks such as delivering products to the creators and scheduling site visits.
          We’ll also manage the contracts and invoices for you!
        </rp.p>

        <rp.h2>Draft/Revision</rp.h2>
        <rp.p>
          At this stage, the creators will have already submitted their content for your approval.
          Any revisions and factual corrections will be made here.
        </rp.p>

        <rp.h2>Delivery</rp.h2>
        <rp.p>
          Within 7 to 10 business days, our creators will post their content on social media for their audiences to enjoy.
          Just sit back and watch the magic our content creators have produced for your campaign.
        </rp.p>
        <rp.p>
          It’s that simple!
        </rp.p>

        <rp.h2>Cult Workspace Credits: Your Plug-and-Play Solution to UGC Marketing</rp.h2>
        <rp.p>
          And guess what?
          Working with content creators has never been easier with our Cult Workspace Credits—a flexible solution to kickstart your UGC marketing journey.
          Unlike the other UGC packages out there, this one operates on a credit system.
          So, you can choose when content is produced for your campaign.
        </rp.p>
        <rp.p>
          Simply select a plan—Trial, Basic, Essential or Pro—based on the number of creators you need and your desired campaign duration. Then, you can activate your credits whenever you need to for a campaign.
        </rp.p>
        <rp.p>
          Keen to learn more?{" "}
          <rp.a href="/brands#contact">
            Book a call
          </rp.a>{" "}
          with us today.
        </rp.p>
      </rp.Page>
    </>
  );
};

export default Resource11;
