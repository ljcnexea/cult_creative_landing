import resources from "@/app/contants/resources.json";
import * as rp from "@/app/components/resource-page.jsx";

const resource = resources[6];
const relatedResources = [
  resources[5], 
  resources[7],
  resources[8],
];

const latestResources = [
  resource[0]
];

for(let x = 0; x < resources.length; x++){
  latestResources.push(resources[x])
}

const title = resource.title;
const keywords = [
  "Malaysian creator marketing",
  "Brand awareness in Malaysia",
  "Social media marketing in Malaysia",
  "Influencer marketing in Malaysia",
  "Creator marketing agencies",
];

export const metadata = {
  title: title,
  description: "Customer engagement correlates positively with brand exposure. Leverage popular Malaysian creators to enhance brand visibility, connect with consumers, and drive sales through social-media campaigns.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource7 = () => {
  return (
    <>
      <rp.Page keywords={keywords} relatedResources={relatedResources} latestResources={latestResources}>
        <rp.h1>{title}</rp.h1>
        <rp.p>
          As social media continues to transform every day itself into an information-sharing and learning platform, the role of creator marketing has become increasingly important in spreading brand awareness to larger networks of consumers.
        </rp.p>
        <rp.p>
          Research into the factors affecting brand awareness through social media in Malaysia found a positive correlation between customer engagement, brand exposure, and electronic word-of-mouth.
        </rp.p>
        <rp.p>
          Moreover, studies show that businesses in Malaysia aren’t fully utilising social media in their marketing campaigns.
          This suggests a gap in how often businesses are using social media to promote their brand.
        </rp.p>
        <rp.p>
          By tapping into the power of Malaysian creator marketing, businesses have the opportunity to leverage the influence and reach of popular social-media figures to amplify their brand awareness.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/p/C49xikip-kr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />

        <rp.h2>The Malaysian Creator-Marketing Landscape</rp.h2>
        <rp.p>
          Malaysia’s creator-marketing landscape is dynamic and thriving.
        </rp.p>
        <rp.p>
          As{" "}
          <rp.a href="https://www.insg.co/en/influencer-marketing-malaysia/">
            more and more Malaysians rely on the recommendations of creators
          </rp.a>,
          businesses in Malaysia are beginning to recognise the value that creator marketing can bring to building visibility and driving sales.
        </rp.p>
        <rp.p>
          Collaborating with popular Malaysian creators is beneficial to business in a myriad of ways:
        </rp.p>
        <rp.ul>
          <rp.li>
            It gives businesses the opportunity to tap into the existing rapport and trust that creators have established with their audience, leading to greater brand recognition and sales.
          </rp.li>
          <rp.li>
            Enables businesses to effectively capture consumers’ attention by coordinating their messages across all social media channels, making them stand out against competitors.
          </rp.li>
          <rp.li>
            Encourages businesses to produce authentic and relatable content that connects with consumers on a personal level, boosting brand recall and consideration.
          </rp.li>
          <rp.li>
            Helps businesses create buzz and excitement around their products or services.
          </rp.li>
        </rp.ul>

        <rp.h2>How Creator-Marketing Agencies in Malaysia Work</rp.h2>
        <rp.p>
          Creator-marketing agencies in Malaysia work by connecting brands with relevant and influential content creators across various social-media platforms, including Instagram and TikTok.
        </rp.p>
        <rp.p>
          We are one of them!
          At{" "}
          <rp.a href="/">
            Cult Creative
          </rp.a>,
          we endeavour to meaningfully facilitate the collaborative process between businesses and creators by bridging businesses to the right creators for their campaigns, negotiating partnership terms and contracts, as well as managing the campaign execution.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/reel/C4M3aM8pKeS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        <rp.p>
          With over 900 businesses and 13,000 creators across Malaysia and Southeast Asia that we’ve partnered with, we know just how impactful creator marketing can be for Malaysian businesses.
        </rp.p>
        <rp.p>
          Want to experience the magic of creator marketing for yourself?{" "}
          <rp.a href="/brands#contact">
            Book a call
          </rp.a>{" "}
          with us today!
        </rp.p>
      </rp.Page>
    </>
  );
};

export default Resource7;
