import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWraper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const FeedbackCard = ({ index, name, designation, company ,testimonial, image }) => {
  return (
    <motion.div
    variants={fadeIn("","spring",index*0.1)}
    className="bg-black-100 rounded-3xl p-10 xs:w-[320px] w-full"
    >
     <p className="text-white font-black text-[48px]">"</p>
     <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
     <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>
      <img src={image} alt={`feedback by -${name}`} className="w-10 h-10 rounded-full object-cover" />

     </div>
    </motion.div>
  )
};
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-xl">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
       <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>What other says</p>
<p className={styles.sectionHeadText}>Testimonials</p>
       </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `}>
        {
          testimonials.map((testimonial, index) => {
            return <FeedbackCard key={index} index={index} {...testimonial} />
          })
        }
      </div>

    </div>
  )
}

export default SectionWraper(Feedbacks,"")