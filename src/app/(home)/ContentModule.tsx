import getContentData from "@/utils/getContentData";
import iphone14Lrg from "../(home)/assets/images/hero_iphone14_yellow__eun20sn4imi6_large.jpg";
import iphone14Md from "../(home)/assets/images/hero_iphone14_yellow__eun20sn4imi6_medium.jpg";
import iphone14Sm from "../(home)/assets/images/hero_iphone14_yellow__eun20sn4imi6_small.jpg";

import iphone14ProLrg from "../(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg";
import iphone14ProMd from "../(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_medium.jpg";
import iphone14ProSm from "../(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg";

import mac15Lrg from "../(home)/assets/images/hero_macbook_air_15_announce__fz5mtxnl9l6q_large.jpg";
import mac15Md from "../(home)/assets/images/hero_macbook_air_15_announce__fz5mtxnl9l6q_medium.jpg";
import mac15Sm from "../(home)/assets/images/hero_macbook_air_15_announce__fz5mtxnl9l6q_small.jpg";
import { StaticImageData } from "next/image";

type Prop = {
  contentName: string;
};

const ContentModule = ({ contentName }: Prop) => {
  const contentData = getContentData(contentName);
  let bgImage: {
    lrg: StaticImageData | string;
    md: StaticImageData | string;
    sm: StaticImageData | string;
  } = { lrg: "", md: "", sm: "" };

  switch (contentName) {
    case "iphone14":
      bgImage.lrg = iphone14Lrg;
      bgImage.md = iphone14Md;
      bgImage.sm = iphone14Sm;
      break;

    case "iphone14__pro":
      bgImage.lrg = iphone14ProLrg;
      bgImage.md = iphone14Md;
      bgImage.sm = iphone14ProSm;
      break;
    case "macbook_air_15":
      bgImage.lrg = mac15Lrg;
      bgImage.md = mac15Md;
      bgImage.sm = mac15Sm;
      break;
    default:
      break;
  }
  return (
    <div
      className={`content ${contentName} ${
        contentData.bgColor === "black" ? "bg-black" : "bg-[#fafafa]"
      } w-full h-full`}
    >
      <div className="content__wrapper mx-auto w-fit relative">
        <div className="content__module">
          <figcaption className="content__caption text-center">
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
                    ? "font-semibold text-[2.5rem]"
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

            <div className="content__cta-link text-blue-200 text-[1.3rem] font-medium">
              <a href="">
                Learn more <span className="text-[1rem]">{">"}</span>
              </a>
            </div>
          </figcaption>

          <div className="content__module-image bg-transparent relative h-[10rem] max-w-[1030px]">
            <figure
              style={{ backgroundImage: `url(${bgImage.lrg})` }}
              className={`absolute inset-0 hidden desktop:block ${contentName}`}
            ></figure>
            <figure
              style={{ backgroundImage: `url(${bgImage.md})` }}
              className={`absolute inset-0 hidden mobile:block tablet:hidden${contentName}`}
            ></figure>
            <figure
              style={{ backgroundImage: `url(${bgImage.sm})` }}
              className={`absolute inset-0 block mobile:hidden ${contentName}`}
            ></figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModule;
