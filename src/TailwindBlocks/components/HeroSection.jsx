
import React from 'react'
import {Link} from "react-router-dom"

const HeroSection = () => {
  return (
    <section>
      <section className="text-gray-600 body-font bg-BgColor text-TextColor bg-purple-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">Cool Down with
              <br className="hidden lg:inline-block" />Irresistible Ice Cream!
            </h1>
            <p className="mb-8 leading-relaxed">Craving something cool and sweet? Our handcrafted ice creams come in a variety of flavors, made with fresh ingredients and a whole lot of passion. Whether you're a chocolate lover or a fruit fanatic, we've got the perfect scoop for you!</p>
            <div className="flex justify-center">
              <Link to="/menu">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Order Here</button>
              </Link>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>

          <div className="">
            <img src="assets/child.png" alt="child" />
          </div>

        </div>
      </section>
    </section>
  )
}

export default HeroSection