import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
// import Tab from "./Tab";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

import {
  AIPicker,
  CustomButton,
  FilePicker,
  ColorPicker,
  Tab,
} from "../components";
// predefined motion
import { fadeAnimation, slideAnimation } from "../config/motion";

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-0"
            {...slideAnimation("left")}
          >
            {/* refers to the slide animation - refers to the side panel*/}
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
          {/* back btn  */}
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => {
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActivetab=""
                handleClick={() => {}}
              />;
            })}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
