module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        blob: "blob 4s infinite",
        peck: "peck 4s infinite",
        peck2: "peck2 4s infinite",
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px,0px) scale(1)",
          },
          "33%":{
            transform:"translate(30px,-50px) scale(1.1)",
          },
          "66%":{
            transform:"translate(-20px,20px) scale(0.9)",
          },
          "100%":{
            transform:"translate(0px,0px) scale(1)",
          }
        },

        peck:{
            "0%":{
              transform:"rotate(0deg)",
            },
            "33%":{
              transform:"rotate(66deg)",
            },
            "66%":{
              transform:"rotate(33deg)",
            },
            "100%":{
              transform:"rotate(0deg)",
            }
        },
        peck2:{
          "0%":{
            transform:"rotate(180deg)",
          },
          "33%":{
            transform:"rotate(260deg)",
          },
          "66%":{
            transform:"rotate(230deg)",
          },
          "100%":{
            transform:"rotate(180deg)",
          }
      }
      },
      transitionProperty: {
      'width': 'width',
      'height': 'height'
      },
    },
  },
  plugins: [],
}
