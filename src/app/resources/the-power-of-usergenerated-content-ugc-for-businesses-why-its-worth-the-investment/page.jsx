import resources from "@/app/contants/resources.json";
import * as rp from "@/app/components/resource-page.jsx";

const resource = resources[9];
const relatedResources = [
  resources[8], 
  resources[10],
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
  "User-generated content for businesses",
  "UGC marketing benefits",
  "Nano influencers UGC strategy",
  "Paid UGC services platform",
  "UGC solutions",
];

export const metadata = {
  title: title,
  description:
    "UGC transforms businesses by humanising brands in a social-media landscape that values authenticity. Cult Creative is a strategic partner for businesses looking to expand their brand reach organically.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource10 = () => {
  return (
    <>
      <rp.Page keywords={keywords} relatedResources={relatedResources} latestResources={latestResources}>
        <rp.h1>{title}</rp.h1>
        <rp.p>
          Businesses are adopting and experimenting with the growing number of
          digital marketing strategies that are available today, but one stands
          out for its unparalleled effectiveness: user-generated content (UGC).
        </rp.p>
        <rp.p>
          As many young social-media users continue to crave authentic and
          relatable content, harnessing the approachable voices of nano and
          micro content creators can propel businesses to new heights.
        </rp.p>
        <rp.p>
          Let&apos;s explore why investing in UGC is not merely a choice, but a
          necessity for any modern business.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/p/C6GQr38Oehb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />

        {/* <rp.h2>Organic UGC</rp.h2>
        <rp.p>
          These are content created voluntarily by the consumers, simply because
          they feel inspired to share a good word about the business with their
          followers.
        </rp.p> */}

        <rp.h2>Improves Efficiency</rp.h2>
        <rp.p>
          As explained in{" "}
          <rp.a href="/resources/what-is-ugc">this blog post</rp.a>, there are
          two types of UGC: organic and paid. While organic UGC is desired for
          its unprompted creation, that does not make working with paid UGC any
          less commendable.
        </rp.p>
        <rp.p>
          For one, businesses do not have to wait for their consumers to
          voluntarily post content about them for them to kick-start their
          marketing campaigns. With paid UGC, businesses can source content
          creators to produce UGCs for them whenever they need them to.
        </rp.p>
        <rp.p>
          This is especially useful for small and new businesses who are still
          trying to build their audience and establish their identity on the
          Internet.
        </rp.p>
        <rp.p>
          Cult Creative is one of the many creator platforms out there that
          offers flexible and cost-effective services.
        </rp.p>

        <rp.h2>Expands Reach and Brand Awareness</rp.h2>
        <rp.p>
          One of the biggest benefits of working with content creators include
          gaining access to an existing community of followers. Even nano
          influencers—those who sit at the bottom of the influencer
          hierarchy—typically have 1,000 to 10,000 followers under their belt.
          By working with them, businesses will be able to market their products
          and services to at least 1,000 potential customers. That’s a thousand
          potential sales!
        </rp.p>

        <rp.h2>Humanising Businesses</rp.h2>
        <rp.p>
          As social media becomes oversaturated with polished and professional
          content, younger audiences crave authenticity and relatability.
          Professionally shot product photos and scripted ads just don’t cut it
          anymore on social media. Real people want to hear from real people.
        </rp.p>
        <rp.p>
          Here’s where UGC fills the gap. Businesses can harness the
          authenticity of content creators to further humanise their brand,
          adding a touch of the human element to their marketing campaign that
          so many large companies seem to lack.
        </rp.p>
        <rp.p>
          And because 69% of consumers{" "}
          <rp.a href="https://www.marketingdive.com/news/influencer-marketing-success-matter-study-2023/643310/">
            trust influencers, friends and family over brands
          </rp.a>
          , businesses will be able to boost their credibility when social media
          users see content creators endorsing their products.
        </rp.p>

        <rp.h2>Fosters Creativity</rp.h2>
        <rp.p>
          One glaring problem with organic UGC is its unpredictability. Because
          it relies on the consumers to voluntarily create content, it is
          near-impossible for businesses to predict what type of content they’ll
          receive from their consumers. Maybe it’s something good, but that’s a
          rarity.
        </rp.p>
        <rp.p>
          But with paid UGC, businesses can set their own standards by providing
          content creators with briefs and creative directions for the campaign.
          Not to mention that content creators are masters in the social-media
          game—they know how to work in favour of their audience and the
          algorithm—so businesses can be certain that the content they’re paying
          for is original, trend-setting and high in quality.
        </rp.p>
        <rp.p>
          With the{" "}
          <rp.a href="https://www.insg.co/en/influencer-marketing-malaysia/">
            influencer-advertising market in Malaysia projected to reach
            approximately US$102.30 million by 2028
          </rp.a>
          , now is the perfect time to invest in UGC.
        </rp.p>
        <rp.p>
          Platforms like <rp.a href="/brands#solutions">Cult Creative</rp.a>{" "}
          offer flexible and cost-effective UGC packages that suit the marketing
          needs of every company, from new businesses to established companies.
          They make it really easy to dive into this exciting and new marketing
          strategy.
        </rp.p>
      </rp.Page>
    </>
  );
};

export default Resource10;
