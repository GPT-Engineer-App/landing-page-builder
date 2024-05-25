import { Container, Box, VStack, HStack, Text, Button, Heading, IconButton, Image, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Heading size="lg">MyCompany</Heading>
          <HStack spacing={4}>
            <Button variant="link" color="white">
              Home
            </Button>
            <Button variant="link" color="white">
              Services
            </Button>
            <Button variant="link" color="white">
              Contact
            </Button>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <VStack spacing={6}>
          <Heading size="2xl">Welcome to MyCompany</Heading>
          <Text fontSize="lg">We provide the best solutions for your business.</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading size="xl" mb={10}>
          Our Services
        </Heading>
        <HStack spacing={10} justifyContent="center">
          <VStack spacing={4} maxW="sm" p={5} borderWidth={1} borderRadius="md">
            <Image src="https://images.unsplash.com/photo-1561123815-3a3f73763807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwMXxlbnwwfHx8fDE3MTY2Mjc4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Service 1" borderRadius="md" />
            <Heading size="md">Service 1</Heading>
            <Text>Detail about service 1.</Text>
          </VStack>
          <VStack spacing={4} maxW="sm" p={5} borderWidth={1} borderRadius="md">
            <Image src="https://images.unsplash.com/photo-1547629830-ffaf6014d258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwMnxlbnwwfHx8fDE3MTY2Mjc4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Service 2" borderRadius="md" />
            <Heading size="md">Service 2</Heading>
            <Text>Detail about service 2.</Text>
          </VStack>
          <VStack spacing={4} maxW="sm" p={5} borderWidth={1} borderRadius="md">
            <Image src="https://images.unsplash.com/photo-1586134886196-326476035f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwM3xlbnwwfHx8fDE3MTY2Mjc4NTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Service 3" borderRadius="md" />
            <Heading size="md">Service 3</Heading>
            <Text>Detail about service 3.</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="xl" mb={10}>
          Contact Us
        </Heading>
        <VStack spacing={4} maxW="md" mx="auto">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="teal" size="lg">
            Send Message
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4}>
        <VStack spacing={4}>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" color="white" />
          </HStack>
          <Text>© 2023 MyCompany. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
