import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useSnapshot } from "valtio";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  // one snap of the snapshot
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {/* enables the animation */}
      {/* check for intro page */}
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-conetent" {...headContainerAnimation}>
            <motion.div className="home-text" {...headContentAnimation}>
              <h1 className="head-text">
                {" "}
                LETS <br className="xl:block hidden" />
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal grey-600 text-base">
                Create your unqiue and exclusive short with our brand-new 3D
                customization tool. <strong>Unleash your imagation</strong> and
                define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize it "
                handleClick={() => (state.intro = false)}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
