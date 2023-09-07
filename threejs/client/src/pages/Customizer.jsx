import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

import { AIPicker, CustomButton, FilePicker, ColorPicker } from "../components";
// predefined motion
import { fadeAnimation, slideAnimation } from "../config/motion";

const Customizer = () => {
  return <AnimatePresence>{!snap.intro && <>Customizer</>}</AnimatePresence>;
};

export default Customizer;
