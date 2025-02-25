/* Animation Variants */
export const aboutVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  },
};

export const aboutVariant1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.59
    }
  },
};

export const navbarAnimationVariant = {
  initial: {
    y: '-100%',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  },
};

export const textSlideVariant1 = {
    initial: {
      x: "300%",
    },
    animate: {
      x: '0%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
        },
    },
};

export const textSlideVariant2 = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: '0%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
        },
    },
};

export const bigWordVariant1 = {
    initial: {
      x: '-100%',
    },
    animate: (i: number) =>  ({
      x: 0,
      transition: {
        duration: 0.6 * i,
        ease: "easeOut",
        },
    }),
};

export const projectPageVariant = {
  initial: {
    x: '-100%',
  },
  animate: (i: number) =>  ({
    x: 0,
    transition: {
      duration: 0.8 * i,
      ease: "easeOut",
      },
  }),
};

export const bigWordVariant2 = {
    initial: {
      x: '300%',
    },
    animate: (i: number) =>  ({
      x: 0,
      transition: {
        duration: 0.6 * i,
        ease: "easeOut",
        },
    }),
};

export const projectHighlightVariant = {
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.8
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.6,
      damping: 20,
    }
  }
}

export const projectCardVariant = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export const targetPathVariants = {
  hidden: { 
    pathLength: 0, 
    fillOpacity: 0 
  },
  visible: () => ({
    pathLength: 1,
    fillOpacity: 1,
    transition: {
        pathLength: { 
          duration: 4, 
          ease: "easeInOut" 
        },
        fillOpacity: { 
          duration: 1, 
          ease: "easeInOut", 
          delay: 3 
        }
      }
  })
};

export const projectCardLeftVariant = {
  initial: {
    x: '-300%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

export const projectCardRightVariant = {
  initial: {
    x: '300%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

export const projectCardBottomVariant = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}