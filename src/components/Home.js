import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <motion.div className="home container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration:2 }}
//     >
      
//       <motion.div
//       initial={{ }}
//       animate={{ }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//       }}
//       >
//       <h1 data-aos="fade-up">
//         Welcome to Pizza Joint
//       </h1>
//       </motion.div>


//       <Link to="/base">
//         <motion.button
//           whileHover={{
//             scale: 1.1,
//             textShadow:"0px 0px 8px #fff",
//             boxShadow:"0px 0px 8px #fff"
//           }}
//         >
//           Create Your Pizza
//         </motion.button>
//       </Link>
//     </motion.div>
//   )
// }

// export default Home;


const Home = () => {
  return (
    
    <div className="home container"
    data-aos="fade-down-right"
    data-aos-offset="100"
    data-aos-delay="500"
    >
      
      <div>
        <h1>
        Welcome to Pizza Joint 1
      </h1>
      </div>

      


      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow:"0px 0px 8px #fff",
            boxShadow:"0px 0px 8px #fff"
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;