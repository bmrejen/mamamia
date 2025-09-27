import Image from "next/image";
import Link from "next/link";

const About4 = ({ img1, img2, subtitle, title, content, FeatureList, btnname, btnurl }) => {
  return (
    <section className="about-section section-padding fix">
      <div className="about-container-wrapper style1">
        <div className="container">
          <div className="about-wrapper style1">
            <div className="row gy-5 gx-60">
              <div className="col-xl-6">
                <div className="about-thumb">
                  <div className="bg"></div>
                  <div className="thumbShape1 d-none d-xxl-block cir36">
                    <Image
                      src="/assets/images/shape/aboutThumbShape1_1.png"
                      alt="img"
                      width={67}
                      height={67}
                    />
                  </div>
                  <div className="thumbShape2 d-none d-xxl-block cir36">
                    <Image
                      src="/assets/images/shape/aboutThumbShape1_2.png"
                      alt="img"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="thumbShape3 d-none d-xxl-block cir36 float-bob-y">
                    <Image
                      src="/assets/images/shape/aboutThumbShape1_3.png"
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="thumbShape4 d-none d-xxl-block cir36">
                    <Image
                      src="/assets/images/shape/aboutThumbShape1_4.png"
                      alt="img"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="main-thumb">
                    <Image src={img1} alt="img" width={436} height={530} />
                  </div>
                  {/* Floating image */}
                  {/* <div className="absolute-thumb float-bob-x">
                                    <Image src={img2} alt="img" width={216} height={108}   />
                                    </div> */}
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-content">
                  <div className="section-title">
                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                      {subtitle}{" "}
                      <Image
                        src="/assets/images/icon/fireIcon.svg"
                        alt="img"
                        width={16}
                        height={17}
                      />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                      {title}
                    </h2>
                    <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                      {content}
                    </p>
                  </div>
                  <ul className="checklist style1 wow fadeInUp" data-wow-delay=".2s">
                    <p>Why Parents Love It 👩‍👧</p>
                    <p>
                      “I wanted something that my son would actually use. The cards are colorful,
                      fun, and portable. He reviews them in the car instead of staring at a screen.
                      Plus, he actually enjoys using the cards and looking at the cartoons.” Emily,
                      parent of an SAT student
                    </p>
                    <p> Why Educators Love It 📚</p>
                    <p>
                      “As a teacher, I’ve seen a lot of flashcards. but nothing like this. The
                      science-backed color coding and built-in examples make vocabulary come alive.
                      It’s a tool I’d recommend to my students.” Mr. Lee, High School English
                      Teacher
                    </p>
                  </ul>
                  <Link className="theme-btn wow fadeInUp" data-wow-delay=".2s" href={btnurl}>
                    {btnname}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_18_41)">
                        <path
                          d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_41">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4;
