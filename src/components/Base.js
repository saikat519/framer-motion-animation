import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
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
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{
            delay:0.01,
            x: { type: "spring", stiffness: 120 },
            default: { duration: 0.5 },
          }}
        >
          <Link to="/toppings">
            <motion.button
            whileHover={{
              scale: 1.1,
              textShadow:"0px 0px 8px #fff",
              boxShadow:"0px 0px 8px #fff"
            }}
            >
              Next
              </motion.button>
          </Link>
        </motion.div>
      )}

    </div>
  )
}

export default Base;