import React from 'react';
import HeroBanner1 from '@/Components/HeroBanner/HeroBanner1';
import HeroBanner2 from '@/Components/HeroBanner/HeroBanner2';
import HeroBanner3 from '@/Components/HeroBanner/HeroBanner3';
import Brand1 from '@/Components/Brand/Brand1';
import Brand2 from '@/Components/Brand/Brand2';
import About1 from '@/Components/About/About1';
import About2 from '@/Components/About/About2';
import About3 from '@/Components/About/About3';
import About4 from '@/Components/About/About4';
import HowWork from '@/Components/HowWork/HowWork';
import HowWork2 from '@/Components/HowWork/HowWork2';
import HowWork3 from '@/Components/HowWork/HowWork3';
import Choose1 from '@/Components/Choose/Choose1';
import Choose2 from '@/Components/Choose/Choose2';
import Choose3 from '@/Components/Choose/Choose3';
import Choose4 from '@/Components/Choose/Choose4';
import Feature1 from '@/Components/Feature/Feature1';
import Counter1 from '@/Components/Counter/Counter1';
import Faq1 from '@/Components/Faq/Faq1';
import Testimonial from '@/Components/Testimonial/Testimonial';
import Testimonial2 from '@/Components/Testimonial/Testimonial2';
import Testimonial3 from '@/Components/Testimonial/Testimonial3';
import Testimonial4 from '@/Components/Testimonial/Testimonial4';
import Feature2 from '@/Components/Feature/Feature2';
import Pricing1 from '@/Components/Pricing/Pricing1';
import Cta1 from '@/Components/Cta/Cta1';
import Blog1 from '@/Components/Blog/Blog1';
import Blog2 from '@/Components/Blog/Blog2';

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
            <Brand2></Brand2>   
            <About4
                img1="/assets/images/pic1.jpg"
                img2="/assets/images/pic2.jpg"
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
            ></About4>  
            <HowWork3></HowWork3> 
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
            <Testimonial2></Testimonial2>  
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
            <Blog2></Blog2>                         
    </div>
  );
};

export default page;