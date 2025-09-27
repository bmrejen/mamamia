import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const HeroBanner1 = ({
  subtitle,
  title,
  content,
  btnname,
  btnurl,
  btntwo,
  btn2url,
  cusimg,
  cusnumber,
  cuscontent,
  rating,
  ratingcon,
  img
}) => {
  return (
    <section className="intro-section">
      <div className="intro-container-wrapper style1">
        <div className="container">
          <div className="intro-wrapper style1 fix">
            <video
              className="main-thumb img-custom-anim-right wow fadeInUp"
              autoPlay
              muted
              loop
              playsInline
              style={{
                objectFit: "cover",
                borderRadius: "inherit",
                width: "100%",
                height: "100%"
              }}
            >
              <source src="/assets/frontpage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="shape1">
              <Image
                src="/assets/images/shape/introShape1_1.png"
                alt="img"
                width={1149}
                height={854}
              />
            </div>
            {/* <div className="shape2"><Image src="/assets/images/shape/introShape1_2.png" alt="img" width={983} height={954}   /></div> */}
            {/* <div className="shape3 d-none d-xxl-block cir36"><Image src="/assets/images/shape/introShape1_3.png" alt="img" width={58} height={58}   /></div> */}
            <div className="shape4 d-none d-xxl-block cir36">
              <Image
                src="/assets/images/shape/introShape1_4.png"
                alt="img"
                width={58}
                height={58}
              />
            </div>
            <div className="shape5 d-none d-xxl-block cir36">
              <Image
                src="/assets/images/shape/introShape1_5.png"
                alt="img"
                width={57}
                height={58}
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 order-2 order-xl-1">
                  <div className="intro-content">
                    <div className="intro-section-title">
                      <div className="intro-subtitle">
                        {parse(subtitle)}{" "}
                        <Image
                          src="/assets/images/icon/fireIcon.svg"
                          alt="img"
                          width={16}
                          height={17}
                        />
                      </div>
                      <h1 className="intro-title wow fadeInUp" data-wow-delay=".2s">
                        {title}
                      </h1>
                      <p className="intro-desc wow fadeInUp" data-wow-delay=".4s">
                        {content}
                      </p>
                      <p className="intro-desc wow fadeInUp" data-wow-delay=".4s">
                        “Made for students!💡”
                      </p>
                      <p>
                        Learning is easier (and way more fun) when the process of learning is made
                        to be fun. That’s why these flashcards come with vibrant illustrations,
                        memory-boosting colors, and a system your kids will actually want to use.
                        Here’s our color system: • 🔵 Blue for Common words — calm, approachable,
                        easy to remember • 🟧 Orange for Challenge words (heightens attention and
                        focus) • 🔴 Red for Challenging words — grabs attention and boosts focus •
                        🟨 Yellow for Positive words (associated with optimism and recall) • 🟩
                        Green for Academic words — associated with learning • ⬛ Black for Negative
                        words (triggers stronger emotional tagging in memory) By pairing color
                        psychology with illustrations, example sentences, synonyms, and antonyms,
                        MaMaMia ensures words aren’t just memorized — they’re experienced.
                      </p>
                    </div>
                    <div className="btn-wrapper style1 wow fadeInUp" data-wow-delay=".6s"></div>
                  </div>
                </div>
                <div className="col-xl-5 order-1 order-xl-2">
                  <div className="intro-thumb">
                    <div className="thumbShape1">
                      <Image
                        src="/assets/images/shape/introThumbShape1_1.png"
                        alt="img"
                        width={624}
                        height={624}
                      />
                    </div>
                    <div className="thumbShape2">
                      <Image
                        src="/assets/images/shape/introThumbShape1_2.png"
                        alt="img"
                        width={536}
                        height={537}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
