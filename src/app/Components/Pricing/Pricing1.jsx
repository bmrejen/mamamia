"use client"
import PricingCard from "../Card/PricingCard";
import Image from "next/image";
import { publicCatalog as catalog } from "@/lib/catalog";

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
                            {Object.entries(catalog).map(([key, deck]) => (
                                <PricingCard
                                    key={key}
                                    name={deck.name}
                                    price={`$${deck.price.toFixed(2)}`}
                                    monthly={deck.cards}
                                    content={deck.description}
                                    FeatureList={deck.features}
                                    btnname={`Buy ${deck.name}`}
                                    btnurl={`/checkout?preset=${key}&qty=1`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing1;