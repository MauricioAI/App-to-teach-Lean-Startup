const mainConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const alternativeConfig = {
  fpsLimit: 60,
  backgroundMode: {
    enable: true
  },
  particles: {
    color: {
      value: ["#f67e7d", "#843b62", "#621940"]
    },
    links: {
      color: "#ffb997",
      enable: true
    },
    move: {
      enable: true,
      speed: 6
    },
    size: {
      value: 5,
      random: {
        enable: true,
        minimumValue: 1
      },
      animation: {
        enable: true,
        speed: 2.5,
        minimumValue: 1
      }
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.4
      }
    }
  },
  interactivity: {
    detect_on: 'window'
  }
}

const fireConfig = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffff00",
      animation: {
        enable: true,
        speed: -70,
        sync: true
      }
    },
    shape: {
      type: "square"
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
        sync: false
      }
    },
    size: {
      value: 8,
      random: { enable: true, minimumValue: 4 },
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 4,
        sync: false
      }
    },
    life: {
      duration: {
        value: 2
      },
      count: 1
    },
    move: {
      angle: {
        value: 45,
        offset: 0
      },
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.5
      },
      speed: 10,
      direction: "top",
      random: false,
      straight: false,
      size: true,
      outModes: {
        default: "destroy",
        bottom: "none"
      },
      attract: {
        enable: false,
        distance: 300,
        rotate: {
          x: 600,
          y: 1200
        }
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  emitters: {
    direction: "top",
    rate: {
      quantity: 5,
      delay: 0.01
    },
    size: {
      width: 100,
      height: 10
    },
    position: {
      x: 50,
      y: 100
    }
  }
}

export { mainConfig, alternativeConfig, fireConfig };
