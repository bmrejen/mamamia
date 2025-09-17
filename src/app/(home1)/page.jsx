import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose1 from '../Components/Choose/Choose1';
import Feature1 from '../Components/Feature/Feature1';
import Counter1 from '../Components/Counter/Counter1';
import Faq1 from '../Components/Faq/Faq1';
import Testimonial from '../Components/Testimonial/Testimonial';
import Feature2 from '../Components/Feature/Feature2';
import Pricing1 from '../Components/Pricing/Pricing1';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
  return (
      <div>
            <HeroBanner1
                subtitle="<span>Physical Cards!</span>Learn English"
                title="The Best English Flashcards for Children"
                content="High-quality physical flashcards designed specifically for children to learn English vocabulary, pronunciation, and spelling. Made with durable cardstock and colorful illustrations."
                btnname="Buy Now!"
                btnurl="/pricing"
                btntwo="Learn More"
                btn2url="/about"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="2,291"
                cuscontent="Happy Customers"
                rating="4.8/5"
                ratingcon="Rating"
            ></HeroBanner1>
            <Brand1></Brand1>   
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Our Flashcards"
                title="Designed for Children's Learning Success"
                content="Our flashcards are carefully crafted with child development in mind. Each card features clear, colorful illustrations and age-appropriate vocabulary to make learning English fun and effective."
                FeatureList={[
                    "High-quality durable cardstock that lasts.",
                    "Colorful illustrations that engage children.",
                    "Age-appropriate vocabulary and concepts.",
                    "Free shipping worldwide on all orders!",
                ]}                
                btnname="View All Decks"
                btnurl="/pricing"
            ></About1>  
            <HowWork></HowWork> 
            <Choose1
                subtitle="Why Choose Our Flashcards"
                title="The Perfect Learning Tool for Children"
                content="Our flashcards are designed by educators and child development experts to provide the most effective learning experience for young English learners."
                FeatureList={[
                    "Child-Safe Materials",
                    "Educational Expert Designed",
                ]} 
                FeatureList2={[
                    "Free Worldwide Shipping",
                    "30-Day Money Back Guarantee",
                ]}                 
                btnname="Order Now"
                btnurl="/checkout"
            ></Choose1>
            <Feature1></Feature1> 
            <Counter1></Counter1>
            <Faq1></Faq1> 
            <Testimonial></Testimonial>  
            <Feature2></Feature2>
            <Pricing1></Pricing1> 
            <Cta1
                subtitle="Get Your Flashcards"
                title="Order now and start your child's English learning journey!"
                content="Join thousands of parents who trust our flashcards to help their children learn English effectively. Free shipping worldwide and 30-day money-back guarantee."
                btnurl1="/checkout"
                btnurl2="/pricing"
                img="/assets/images/cta/ctaThumb1_1.png"
            ></Cta1>     
            <Blog1></Blog1>                         
    </div>
  );
};

export default page;