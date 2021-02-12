import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese'];

  return (
    <motion.div className="toppings container"
      initial={{
        x: 1000,
        y: -100,
        opacity:0
      }}
      animate={{
        x: 0,
        opacity:1
      }}
      transition={{
        delay: 0.1,
        x: { type: "spring", stiffness: 80 },
        default:{ duration:0.9 }
      }}
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{
              scale: 1.3,
              originX: 0,
              color:'#f8e112'
            }}
              transition={{
                type: 'spring',
                stiffness:300
              }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{
          scale: 1.1,
          textShadow:"0px 0px 8px #fff",
          boxShadow:"0px 0px 8px #fff"
        }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;