import React, { useState } from 'react';
import Slider from './Slider'; // Assuming 'Signup' is the correct component to import
import { Input, Box, Text, Button, VStack, InputLeftElement, FormLabel, Icon, Image, Flex } from '@chakra-ui/react';
import { FaUser, FaLock, FaPhone } from 'react-icons/fa'; // Added FaPhone for contact number input
import { ChakraProvider } from '@chakra-ui/react';
import Slider2 from './Slider2';
import { Link } from 'react-router-dom';

export const MainSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '', // Changed property name from 'ConfirmPassword' to 'confirmPassword'
    contactNumber: '', // Added contact number property
    termsAccepted: false,
    isOver18: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your logic to store the data
    // Close modal after form submission
    setIsOpen(false);
  };

  return (
    <ChakraProvider>
    <Box bg="#1D212E">
      <Flex display={"flex"} justifyContent={"center"}>
        <Box w="50%">
          <Slider2 />
        </Box>

        {/* ----------------------form -------------------------- */}
        <Box w="40%">
          <Box bg="#020C1B" color="white" mt="100px">
            <Box >
                <Link to='/'>
              <Image  h="100px" m="auto" src={`https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg`} style={{ color: 'white' }} />
                </Link>
            </Box>

            {/* ----------------------------whatsapp id ---------------------------- */}
            <Box pb="30px" w="90%" m='auto' border={"2px solid #CBA902"} borderRadius={"20px"} mt="20px">
              <Text fontSize={"35px"}>Now <span style={{ color: "rgb(255,212,2)" }}>Create</span> an account easily on <span style={{ color: "rgb(255,212,2)" }}>WhatsApp!</span></Text>
              <Flex bg="#2AB63F" w="80%" m="auto" h="50px" border={"1px solid green"} borderRadius="10px">
                <Image ml="-20px" h="60px" mt="-5px" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/WA.svg" />
                <Text fontSize={"16px"} fontWeight={"650"} mt="10px" ml="30%">Need ID</Text>
              </Flex>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={5} align={"start"} p="20px">
                {/* <FormLabel color="#707D9B" htmlFor="username">Username</FormLabel> */}
                <Input
                  p="5px"
                  w="100%"
                  m="auto"
                  border="2px solid #4C799E"
                  borderRadius={"10px"}
                  bg="#020C1B"
                    color="#4C799E"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  leftElement={<InputLeftElement children={<Icon as={FaUser} boxSize={5} />} />}
                />
                {/* <FormLabel color="#707D9B" htmlFor="password">Password</FormLabel> */}
                <Input
                  p="5px"
                  w="100%"
                  m="auto"
                  border="2px solid #4C799E"
                  borderRadius={"10px"}
                  bg="#020C1B"
                    color="#4C799E"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  leftElement={<InputLeftElement children={<Icon as={FaLock} boxSize={5} />} />}
                />
                {/* <FormLabel color="#707D9B" htmlFor="password">Confirm Password</FormLabel> */}
                <Input
                  p="5px"
                  w="100%"
                  m="auto"
                  border="2px solid #4C799E"
                borderRadius={"10px"}
                bg="#020C1B"
                  color="#4C799E"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  leftElement={<InputLeftElement children={<Icon as={FaLock} boxSize={5} />} />}
                />

                {/* Added contact number input */}
                {/* <FormLabel color="#707D9B" htmlFor="contactNumber">Contact Number</FormLabel> */}
                <Input
                border="2px solid #4C799E"
                borderRadius={"10px"}
                bg="#020C1B"
                  color="#4C799E"
                  p="5px"
                  w="100%"
                  m="auto"
                 
                  type="tel"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  leftElement={<InputLeftElement children={<Icon as={FaPhone} boxSize={5} />} />}
                />

                <FormLabel color="#707D9B" fontSize={"13px"} htmlFor="isOver18" flex="1">
                  <input
                    type="checkbox"
                    id="isOver18"
                    name="isOver18"
                    checked={formData.isOver18}
                    onChange={handleChange}
                  />
                  &nbsp; I'm over 18
                </FormLabel>

                <Flex justifyContent="space-between" w="100%" align="center">
                  <FormLabel color="#707D9B" fontSize={"13px"} htmlFor="termsAccepted" flex="1">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                    />
                    &nbsp; I accept all the Terms & Conditions
                  </FormLabel>
                  <Link fontSize={"14px"} color='blue.100' href="#" flexShrink="0">
                    Forgot Password?
                  </Link>
                </Flex>

                <Button  w="90%" bg="#124E5D" h="40px" borderRadius={"10px"} m="auto" type="submit">Submit</Button>
              </VStack>
            </form>

            <Text pb="40px">Already have an account ? <span style={{color:"skyblue"}}>Login</span></Text>
           
          </Box>
        </Box>
      </Flex>
    </Box>
    </ChakraProvider>
  )
}