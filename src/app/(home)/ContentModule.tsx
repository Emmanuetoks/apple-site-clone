import getContentData from "@/utils/getContentData";
import Image from "next/image";
// let iphone14Lrg = "/_next/static/media/hero_iphone14_yellow__eun20sn4imi6_large.jpg";
import iphone14Lrg from "../(home)/assets/images/hero_iphone14_yellow__eun20sn4imi6_large.jpg";
import iphone14Md from "../(home)/assets/images/hero_iphone14_yellow__eun20sn4imi6_medium.jpg";
import iphone14Sm from "../(home)/assets/images/hero_iphone14_yellow__eun20sn4imi6_small.jpg";

import iphone14ProLrg from "../(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg";
import iphone14ProMd from "../(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_medium.jpg";
import iphone14ProSm from "../(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg";

import mac15Lrg from "../(home)/assets/images/hero_macbook_air_15_announce__fz5mtxnl9l6q_large.jpg";
import mac15Md from "../(home)/assets/images/hero_macbook_air_15_announce__fz5mtxnl9l6q_medium.jpg";
import mac15Sm from "../(home)/assets/images/hero_macbook_air_15_announce__fz5mtxnl9l6q_small.jpg";

import ipadLrg from "@/app/(home)/assets/images/promo_ipad__fioegapg12qi_large.jpg";
import ipadMd from "@/app/(home)/assets/images/promo_ipad__fioegapg12qi_medium.jpg";
import ipadSm from "@/app/(home)/assets/images/promo_ipad__fioegapg12qi_small.jpg";

import macStudioLrg from "@/app/(home)/assets/images/promo_mac_studio_announce__do7xnc8z5mgm_large.jpg";
import macStudioMd from "@/app/(home)/assets/images/promo_mac_studio_announce__do7xnc8z5mgm_medium.jpg";
import macStudioSm from "@/app/(home)/assets/images/promo_mac_studio_announce__do7xnc8z5mgm_small.jpg";

import macBookProLrg from "@/app/(home)/assets/images/promo_mbp__ek7p477bkp6q_large.jpg";
import macBookProMd from "@/app/(home)/assets/images/promo_mbp__ek7p477bkp6q_medium.jpg";
import macBookProSm from "@/app/(home)/assets/images/promo_mbp__ek7p477bkp6q_small.jpg";

import iPadProLrg from "@/app/(home)/assets/images/promo_ipadpro__ch217v9v7no2_large.jpg";
import iPadProMd from "@/app/(home)/assets/images/promo_ipadpro__ch217v9v7no2_large.jpg";
import iPadProSm from "@/app/(home)/assets/images/promo_ipadpro__ch217v9v7no2_large.jpg";
type Prop = {
  contentName: string;
};

const ContentModule = ({ contentName }: Prop) => {
  const contentData = getContentData(contentName);
  let bgImage: {
    lrg: any;
    md: any;
    sm: any;
  } = { lrg: "", md: "", sm: "" };

  switch (contentName) {
    case "iphone14":
      bgImage.lrg = iphone14Lrg;
      bgImage.md = iphone14Md;
      bgImage.sm = iphone14Sm;
      break;

    case "iphone14__pro":
      bgImage.lrg = iphone14ProLrg;
      bgImage.md = iphone14ProMd;
      bgImage.sm = iphone14ProSm;
      break;
    case "macbook_air_15":
      bgImage.lrg = mac15Lrg;
      bgImage.md = mac15Md;
      bgImage.sm = mac15Sm;
      break;

    case "ipad":
      bgImage.lrg = ipadLrg;
      bgImage.md = ipadMd;
      bgImage.sm = ipadSm;
      break;

    case "ipad_pro":
      bgImage.lrg = iPadProLrg;
      bgImage.md = iPadProMd;
      bgImage.sm = iPadProSm;
      break;

    case "macbook_pro":
      bgImage.lrg = macBookProLrg;
      bgImage.md = macBookProMd;
      bgImage.sm = macBookProSm;
      break;
    case "macStudio":
      bgImage.lrg = macStudioLrg;
      bgImage.md = macStudioMd;
      bgImage.sm = macStudioSm;
      break;
    default:
      break;
  }
  return (
    <div
      className={`content ${contentName} ${
        contentData.bgColor === "black" ? "bg-black" : "bg-[#fafafa]"
      } w-full h-[37.5rem] relative overflow-x-hidden`}
    >
      <figure
        // style={{ backgroundImage: `url(${bgImage.lrg})` }}
        className={`absolute inset-0 ${contentName} overflow-hidden`}
      >
        <Image
          src={bgImage.lrg}
          alt={contentName}
          // fill
          className="hidden desktop:block object-contain object-bottom scale-[2.1] absolute bottom-[8rem]"
        />
        <Image
          src={bgImage.md}
          alt={contentName}
          fill
          className="hidden mobileX:block tabletX:hidden object-cover object-bottomobject-cover object-bottom object-contain object-bottom scale-[1] absolute bottom-0"
        />
        <Image
          fill
          src={bgImage.sm}
          alt={contentName}
          className="block mobileX:hidden object-cover object-bottom object-contain object-bottom scale-[1] absolute bottom-[8rem]"
        />
      </figure>
      <div className="content__wrapper mx-auto w-fit relative">
        <div className="content__module">
          <figcaption className="content__caption text-center p-12">
            <div
              className={`heading ${
                contentData.bgColor === "black"
                  ? "text-white-100"
                  : "text-black-200"
              }`}
            >
              <h4
                className={`headline tracking-wide ${
                  contentData.headlineSize === "large"
                    ? "font-semibold tracking-wide text-[2rem] mobileX:text-[3rem] mobilex:text-[3.5rem]"
                    : "font-medium text-[2rem]"
                }`}
              >
                {contentData.headline}
              </h4>

              <h5
                className={`subheading ${
                  contentData.headlineSize === "large"
                    ? "text-[1.5rem] font-normal "
                    : "text-[1.2rem] font-semi-light"
                }`}
              >
                {contentData.subheading}
              </h5>
            </div>

            <div className="content__cta-link text-blue-200 text-[1.3rem] font-light tracking-wide">
              <a href="">
                Learn more <span className="text-xl">{">"}</span>
              </a>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default ContentModule;
