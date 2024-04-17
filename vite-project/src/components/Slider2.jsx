import React from "react";
import { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";


const Slider2 = () => {
  const [counter, setCounter] = useState(0);


  const craouselData = [
    {
      url:"https://dqqdyv927mezc.cloudfront.net/kheloyar/Kashika.png"
    },
    {
        url:"https://dqqdyv927mezc.cloudfront.net/kheloyar/Dazy.png"
      },{
        url:"https://dqqdyv927mezc.cloudfront.net/kheloyar/Rajpal.png"
      },
      {
          url:"https://dqqdyv927mezc.cloudfront.net/kheloyar/Randeep.png"
        },
];


  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }setCounter((prev) => prev + 1);
    },5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (  
        <Box  m="auto">
          <Image
            boxSize={"100%"}
            objectFit="fill"
            src={craouselData[counter].url}
            alt=""
            width={"100%"}
            className="darken"
          />
        </Box>
       
  );
};

export default Slider2;
 
 
