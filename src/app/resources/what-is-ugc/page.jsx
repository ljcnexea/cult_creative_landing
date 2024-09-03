import resources from "@/app/contants/resources.json";
import * as rp from "@/app/components/resource-page.jsx";

const resource = resources[8];
const relatedResources = [
  resources[7], 
  resources[9],
  resources[10],
];

const latestResources = [
  resource[0]
];

for(let x = 0; x < resources.length; x++){
  latestResources.push(resources[x])
}

const title = resource.title;

const keywords = [
  "User-generated content",
  "UGC marketing",
  "Organic UGC",
  "Paid UGC",
  "UGC strategy",
];

export const metadata = {
  title: title,
  description: "User-generated content has evolved from personal expression to a strategic business tool. It is created by paid creators, or even organically by consumers.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource9 = () => {
  return (
    <>
      <rp.Page keywords={keywords} relatedResources={relatedResources} latestResources={latestResources}>
        <rp.h1>{title}</rp.h1>
        <rp.p>
          The digital landscape is rapidly changing, and so is our relationship with social media.
          What was once a mere act of self-expression, content creation has now evolved into a money-making endeavour thanks to the growing popularity of user-generated content (UGC).
        </rp.p>
        <rp.p>
          From social-media platforms like Instagram and TikTok to blogs, UGC has become ubiquitous, profoundly impacting industries, businesses, and individuals alike.
          But what exactly is UGC?
        </rp.p>
        <rp.p>
          To put simply, UGC includes any form of content made by consumers about a product, service or business.
          So, for example, a video you post of your new shoes on Instagram is a form of UGC.
          Other forms include testimonials, comments, photos and blog posts.
        </rp.p>
        <rp.p>
          We’re certain you’ve produced UGC without even realising it!
        </rp.p>
        <rp.p>
          But it doesn’t end there.
          As mentioned above, UGC has emerged as a form of business.
          So, if we dive deeper, we’ll find that there are two types of UGC: organic UGC and paid UGC.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/p/C58GxEOpKRU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />

        <rp.h2>Organic UGC</rp.h2>
        <rp.p>
          These are content created voluntarily by the consumers, simply because they feel inspired to share a good word about the business with their followers.
        </rp.p>

        <rp.h2>Paid UGC</rp.h2>
        <rp.p>
          As the name suggests, paid UGC is where a person is paid to create content for a business.
          A popular example are brand deals where businesses pay content creators to make videos about their products or services.
          However, just the fact that someone is paid to talk about a product does not make their content any less credible or genuine.
        </rp.p>
        <rp.p>
          If anything, people are more likely to buy a product if it has been recommended by someone they know and trust.
          Indeed, INSG has reported that{" "}
          <rp.a href="https://www.insg.co/en/influencer-marketing-malaysia/">
            34% of Malaysian online shoppers consider suggestions from influencers and content creators before buying a product
          </rp.a>.
          So, it can be quite an effective marketing strategy to convert views into sales.
        </rp.p>
        <rp.p>
          It comes as no surprise, then, that more and more businesses in Southeast Asia are investing in UGCs.
          It is certainly not surprising that{" "}
          <rp.a href="/creators/contact">
            many Internet users are leveraging their content-creation skills to become UGC creators too
          </rp.a>.
        </rp.p>
        <rp.p>
          If you are a business looking to tap into the wonders of UGC for your marketing campaigns, the{" "}
          <rp.a href="/brands#solutions">
            Cult Workspace Credits
          </rp.a>{" "}
          is a flexible and cost-effective solution that can be tailored to your marketing needs.
        </rp.p>
      </rp.Page>
    </>
  );
};

export default Resource9;
