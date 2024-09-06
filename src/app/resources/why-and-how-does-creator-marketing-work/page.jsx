import resources from "@/app/contants/resources.json";
import * as rp from "@/app/components/resource-page.jsx";

const resource = resources[5];
const relatedResources = [
  resources[4], 
  resources[9],
  resources[0],
];

const latestResources = [
  resource[0]
];

for(let x = 0; x < resources.length; x++){
  latestResources.push(resources[x])
}

const title = resource.title;

const keywords = [
  "Creator marketing benefits",
  "Influencer marketing advantages",
  "Building brand trust with influencers",
  "Effective UGC strategies",
  "Simplified UGC campaign management",
];

export const metadata = {
  title: title,
  description: "Creator marketing thrives on authenticity. Brands can easily initiate UGC campaigns through platforms like Cult Creative, which connects brands with suitable creators hassle-free.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource6 = () => {
  return (
    <>
      <rp.Page keywords={keywords} relatedResources={relatedResources} latestResources={latestResources}>
        <rp.h1>{title}</rp.h1>
        <rp.p>
          Here’s the short answer: people no longer want brands to simply sell to them.
        </rp.p>
        <rp.p>
          By leveraging the influence and credibility of content creators or influencers to promote products or brands to their audience, brands have the unique opportunity to reach and engage with a highly targeted and receptive customer base. Why? Because the audience already has a connection with the creator, making their recommendations and endorsements more powerful and persuasive.
        </rp.p>
        <rp.p>
          As consumers increasingly seek genuine and relatable experiences, influencer marketing allows brands to partner with creators who produce content that resonates with their target audience.
        </rp.p>

        <rp.h2>Key Reasons That Creator Marketing Works</rp.h2>
        <rp.p>
          It works because it taps into the authenticity and relatability of content creators.
        </rp.p>
        <rp.p>
          UGC (user-generated content) type of content creates a seamless and organic experience for the audience, increasing consideration and purchase intent.
        </rp.p>
        <rp.p>
          Here’s more proof of how it works:
        </rp.p>
        <rp.ol>
          <rp.li>
            <b>Trust and credibility.</b> Content creators have built trust and credibility with their audience, making their recommendations more reliable and influential.
          </rp.li>
          <rp.li>
            <b>Authenticity.</b> Creator marketing allows brands to connect with consumers in a more authentic way, as content creators are seen as real people rather than traditional advertisements.
          </rp.li>
          <rp.li>
            <b>Audience engagement.</b> Influencers have a direct line of communication with their audience and can engage with them in a more interactive and personalised manner, leading to increased engagement and loyalty.
          </rp.li>
          <rp.li>
            <b>Targeted reach.</b> Content creators often have a niche or specific audience, allowing brands to reach and engage with a highly targeted group of consumers.
          </rp.li>
          <rp.li>
            <b>Expertise and authority.</b> Influencers are often experts or knowledgeable in their niche, which adds credibility to the brand they endorse and increases consumer confidence in the product or service.
          </rp.li>
        </rp.ol>

        <rp.h2>Get Started with Your Brand UGC Campaigns</rp.h2>
        <rp.p>
          To get started with creator marketing and run successful paid UGC campaigns, start with{" "}
          <rp.a href="https://www.cultcreative.asia/hire-a-content-creation-team-with-cult-creative">
            Cult Creative
          </rp.a>.
        </rp.p>
        <rp.p>
          We’ve set it up so it’s easy for you as a brand to ditch the hassle that’s related to UGC and influencer marketing.
        </rp.p>
        <rp.p>
          We’ll tap into our 10,000-strong creator base to find one that suits you best.
        </rp.p>
        <rp.ul>
          <rp.li>
            Simply fill out a brief form and indicate the level of budget—and how many UGC videos you need.
          </rp.li>
          <rp.li>
            A Customer Success Manager will be in touch with you within a day to confirm the details of the brief.
          </rp.li>
          <rp.li>
            Discuss, lock it in and that’s it! Project commences and all you need to do is approve creators and content, while it gets posted and runs for you.
          </rp.li>
        </rp.ul>
        <rp.p>
          It’s really that simple!
        </rp.p>
      </rp.Page>
    </>
  );
};

export default Resource6;
