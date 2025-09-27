import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle
              SubTitle="Why using our app"
              Title="Why Mamamia beats the rest"
            ></SectionTitle>
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-12">
                <div className="comparison-table-wrapper wow fadeInUp" data-wow-delay=".6s">
                  <div className="comparison-table">
                    <div className="table-header">
                      <div className="header-cell benefit">Benefits</div>
                      <div className="header-cell mamamia">MaMaMia Flashcards</div>
                      <div className="header-cell standard">Standard Flashcards</div>
                      <div className="header-cell digital">Digital Apps</div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Color-coded learning</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          Neuroscience-backed:
                          <br />
                          Orange = Challenge words
                          <br />
                          Yellow = Positive words
                          <br />
                          Black = Negative words
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">Usually just 1 color</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">"Gray screen chic"</span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Flip-through speed</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          Instantly skim, shuffle, or group for rapid review
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">Flip 1 by 1</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">Scroll… tap… wait…</span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Content depth</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          Definition + Example sentence + Synonyms + Antonyms
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">"Here's one word, good luck"</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">Usually just a definition</span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Cartoon characters</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          Cute, diverse, and designed to anchor memory
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">
                          Stick figures in your imagination. Hmm… are we being too mean? :/
                        </span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">Emojis if you're lucky 🤷</span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Memory reinforcement</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          Colors + characters trigger emotional memory cues (backed by cognitive
                          psychology)
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">Neutral, forgettable</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">
                          Repetition-only, not much of an emotional hook
                        </span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Physical interaction</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">Tactile, shuffle, stack</span>
                      </div>
                      <div className="standard-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">Tactile as well</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">
                          Tap, swipe, tap, swipe… (you can't easily move through words)
                        </span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Visual appeal</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">Good design and fun to use</span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">Bland, textbook-style</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">haven't come across a great looking app</span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Marketing / Gifting</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          This wasn't what you were expecting for your birthday, Sam, but you'll
                          learn something in a fun way!
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">
                          now you know why you are their least favorite auntie or uncle
                        </span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">
                          "Happy birthday, here's an app download link"
                        </span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Offline usability</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">24-7 baby!</span>
                      </div>
                      <div className="standard-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">Also 24-7</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">
                          Mom took my phone so I can't study for SAT/SSAT 😊
                        </span>
                      </div>
                    </div>

                    <div className="table-row">
                      <div className="benefit-cell">Emotion & engagement</div>
                      <div className="mamamia-cell">
                        <span className="checkmark">✔</span>
                        <span className="description">
                          Combines play, design, and neuroscience to make words stick
                        </span>
                      </div>
                      <div className="standard-cell">
                        <span className="cross">✘</span>
                        <span className="description">Neutral, forgettable</span>
                      </div>
                      <div className="digital-cell">
                        <span className="cross">✘</span>
                        <span className="description">Generic UX</span>
                      </div>
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

export default Feature1;
