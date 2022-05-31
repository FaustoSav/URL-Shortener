module.exports = {
  content: ['./*.html','./*.js'],
  theme: {
    extend: {
      colors: {
        primary:{
        cyan: "hsl(180, 66%, 49%)",
        violet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)"
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayViolet: "hsl(257, 7%, 63%)",
          darkBlue:"hsl(255, 11%, 22%)",
          darkviolet: "hsl(260, 8%, 14%)",
          bgGray: "#EFF1F7"
        },
        
      },
      backgroundImage: {
        input_patern: "url(/assets/img/bg-shorten-mobile.svg)",
        boost_bg:"url(/assets/img/bg-boost-mobile.svg)",
        input_desktop: "url(/assets/img/bg-shorten-desktop.svg)",
        boost_desktop: "url(/assets/img/bg-boost-desktop.svg)"
      },
      minWidth: {
        'card': '280px', 
      }
    },
  },
  plugins: [],
}
