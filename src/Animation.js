export const pageAnimation = {
  hidden : {
      opacity:0,
      y:300,
  },
  show : {
      opacity:1,
      y:0,
      transition :{
          duration:0.8,
          staggerChildren:0.3
      }
  },
  exit :{
      opacity:0,
      y:300,
      transition:{
          duration:0.5,
          
      }
  }
}

export const titleAnimation = {

    hidden:{
        opacity:0,
        y:300,
    },
    show:{
        opacity:1,
        y:0,
        transition: {
            duration:1,
            ease:"easeOut"
        }
    }
}

export const fade ={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            ease:"easeOut",
            duration:1
        }
    }
}

export const imageAnimation = {
    hidden:{
        opacity:0,
        scale:1.5,
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            ease:"easeOut",
            duration:0.75
        }
    }
}

export const lineAnimation = {
    hidden:{
        width:"0%",
    },
    show:{
        width:"100%",
        transition:{
            duration:0.8,
            ease:"easeOut"
        }
    }
}

export const rainbowAnimation ={
    hidden:{
        x:'-130%',
        skew:'45deg',
    },
    show:{
        x:'100%',
        skew:'0deg',
        transition:{
            duration:0.8,
            ease:"easeOut"
        }
    }
}
export const sliderContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};
export const scrollReveal ={
    hidden:{
        opacity:0,
        scale:1.2,
        transition:{
            duration:0.8,
        }
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            duration:0.8,
        }
    }
}

export const dopeAnim ={
    hidden:{
        opacity:0,
        width:'0%',
        transition:{
            duration:0.8
        }
    },
    show:{
        opacity:1,
        width:'100%',
        transition:{
            duration:0.8
        }
    }
}