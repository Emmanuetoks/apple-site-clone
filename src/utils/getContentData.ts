type contentData = {
  headline: string;
  subheading: string;
  ctaHref: string;
  bgColor: string;
  headlineSize: string;
};

export default function getContentData(contentName: string): contentData {
  switch (contentName) {
    case "iphone14__pro":
      return {
        headline: "iPhone 14 Pro",
        subheading: "Pro. Beyond.",
        ctaHref: "google.com",
        bgColor: 'black',
        headlineSize: 'large',
      };
    case "iphone14":
      return {
        headline: "iPhone 14",
        subheading: "Wonderfull",
        ctaHref: "google.com",
        bgColor: 'gray',
        headlineSize: 'large',
      };
    case "macbook_air_15":
      return {
        headline: 'Macbook Air 15"',
        subheading: "Impressively big. Impossibly thin.",
        ctaHref: "google.com",
        bgColor: 'gray',
        headlineSize: 'large',
      };
    case "ipad":
      return {
        headline: "iPad",
        subheading: "Lovable. Drawable. Magical",
        ctaHref: "google.com",
        bgColor: 'gray',
        headlineSize: 'small',
      };
    case "macStudio":
      return {
        headline: "Mac Studio",
        subheading: "Supercharged by M2 Max and M2 Ultra",
        ctaHref: "google.com",
        bgColor: 'gray',
        headlineSize: 'small',
      };

    case "macbook_pro":
      return {
        headline: "MacBook Pro",
        subheading: "Supercharged by M2 Pro and M2 Max.",
        ctaHref: "google,com",
        bgColor: 'black',
        headlineSize: 'small',
      };
    case "ipad_pro":
      return {
        headline: "iPad Pro",
        subheading: "Supercharged by M2",
        ctaHref: "google.com",
        bgColor: 'black',
        headlineSize: 'small',
      };

    default:
      return {
        headline: "iPhone 14 Pro",
        subheading: "Pro. Beyond.",
        ctaHref: "google.com",
        bgColor: 'gray',
        headlineSize: 'small',
      };
  }
}
