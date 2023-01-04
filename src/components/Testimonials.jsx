import React from 'react'
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='z-[0] absolute w-[60%] h-[70%] rounded-full blue__gradient -right-[50%] bottom-60'/>


      <div className='w-full flex justify-between md:flex-row flex-col relative z-[1] items-center sm:mb-16 mb-6'>
        <h4 className={`${styles.heading2}`}>
        What People are <br className="sm:block hidden" /> saying about us.
        </h4>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container z-[1] relative'>
        {feedback.map((card) => <FeedbackCard key={card.id} {...card}/>)}
      </div>
    </section>
  )
}

export default Testimonials;
