"use client"
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing1 = () => {
    return (
        <section className="pricing-section section-padding pt-0 fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto">
                <div className="subtitle">
                    Our Flashcard Decks <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                </div>
                <h2 className="title">Choose Your Perfect English Learning Deck!</h2>
                <p className="text">High-quality physical flashcards designed specifically for children to learn English vocabulary, pronunciation, and spelling.
                </p>
            </div>
            <div className="pricing-wrapper style1">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane active" role="tabpanel">
                        <div className="row gy-5">
                            <PricingCard
                                name="Starter Deck"
                                price="$24.99"
                                monthly="250 Cards"
                                content="Perfect for beginners! Essential English vocabulary with colorful illustrations and clear pronunciation guides."
                                FeatureList={[
                                    "250 high-quality flashcards",
                                    "Basic English vocabulary",
                                    "Colorful illustrations",
                                    "Pronunciation guides",
                                    "Durable cardstock",
                                    "Free shipping"
                                ]} 
                                btnname="Buy Starter Deck"
                                btnurl="/checkout"
                            ></PricingCard>

                            <PricingCard
                                name="Learning Deck"
                                price="$39.99"
                                monthly="500 Cards"
                                content="Our most popular choice! Comprehensive vocabulary covering everyday English with engaging visuals."
                                FeatureList={[
                                    "500 high-quality flashcards",
                                    "Comprehensive vocabulary",
                                    "Everyday English phrases",
                                    "Engaging visuals",
                                    "Durable cardstock",
                                    "Free shipping",
                                    "Bonus: Learning guide"
                                ]} 
                                btnname="Buy Learning Deck"
                                btnurl="/checkout"
                            ></PricingCard>

                            <PricingCard
                                name="Master Deck"
                                price="$59.99"
                                monthly="1000 Cards"
                                content="Complete English learning system! Advanced vocabulary, grammar, and conversation starters."
                                FeatureList={[
                                    "1000 high-quality flashcards",
                                    "Advanced vocabulary",
                                    "Grammar concepts",
                                    "Conversation starters",
                                    "Durable cardstock",
                                    "Free shipping",
                                    "Bonus: Learning guide",
                                    "Bonus: Progress tracker"
                                ]} 
                                btnname="Buy Master Deck"
                                btnurl="/checkout"
                            ></PricingCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing1;