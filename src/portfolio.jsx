import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Badge,
  Link,
  Avatar,
  Card,
  CardBody,
  Icon,
  Wrap,
  WrapItem,
  Image
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Code, BookOpen, Award, User, Briefcase, Languages, Database, Settings, Calendar } from 'lucide-react';

// Create motion components
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionHStack = motion(HStack);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = {
    programming: ['Python', 'JavaScript', 'TypeScript'],
    frameworks: ['React', 'Next.js', 'Django', 'Flask', 'Node.js', 'Express.js'],
    styling: ['Chakra UI', 'Tailwind CSS','Fraim motion','rest api'],
    ai: ['LangChain', 'RAG', 'LLMs'],
    tools: ['Git', 'Docker', 'AI Tools'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
    methodologies: ['SCRUM', 'Agile']
  };

  const projects = [
    {
      title: 'AI-Powered Multilingual Interactive Learning Platform',
      description: 'Web platform for transforming multimedia educational content into interactive learning tools.',
      tech: ['React', 'Python','django', 'AI', 'LangChain','RAG','Agent' ,'Rest api'],
      category: 'AI/ML'
    },
    {
      title: 'License Plate Detection and Recognition System',
      description: 'Computer vision system for real-time vehicle identification.',
      tech: ['C++', 'OpenCV', 'Machine Learning'],
      category: 'Computer Vision'
    },
    {
      title: 'MERN Stack Book Store',
      description: 'Full-stack web application for managing and browsing books.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'Full Stack'
    },
    {
      title: 'RAG Chatbot Assistant',
      description: 'Intelligent assistant using hybrid search and LLMs.',
      tech: ['Python', 'LangChain', 'RAG', 'AI','Stremlet'],
      category: 'AI/ML'
    },
    {
      title: 'TranslationManager',
      description: 'Platform for managing and automating multilingual content translation.',
      tech: ['React', 'Node.js','Express.js', 'MongoDB','Cloudinary','Translation APIs'],
      category: 'Startup'
    }
  ];

  const ScrollToSection = ({ sectionId, children }) => (
    <MotionButton
      variant="ghost"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }}
      color={activeSection === sectionId ? 'blue.400' : 'gray.300'}
      _hover={{ color: 'blue.400' }}
      transition="all 0.2s"
    >
      {children}
    </MotionButton>
  );

  return (
    <Box minH="100vh" bgGradient="linear(to-br, gray.900, purple.900, gray.900)" color="white">
      {/* Navigation */}
      <MotionBox
        as="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        position="fixed"
        top={0}
        w="full"
        zIndex={50}
        bg={isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent'}
        backdropFilter={isScrolled ? 'blur(12px)' : 'none'}
        boxShadow={isScrolled ? 'lg' : 'none'}
        transition="all 0.3s"
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <MotionText
              whileHover={{ scale: 1.05 }}
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
            >
              Ilyas Ali-Benyahia
            </MotionText>
            
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <ScrollToSection key={item} sectionId={item.toLowerCase()}>
                  {item}
                </ScrollToSection>
              ))}
             <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as="a"
              href="/CV/CV-2025-Alibenyahia-Ilyas eg.pdf" // تأكد من الاسم والمسار الصحيح
              target="_blank" // فتح في تبويب جديد
              rel="noopener noreferrer"
              bg="blue.600"
              _hover={{ bg: 'blue.700' }}
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
              leftIcon={<Icon as={BookOpen} />}
            >
              View CV
            </MotionButton>
            </HStack>
          </Flex>
        </Container>
      </MotionBox>

      {/* Hero Section */}
      <Box as="section" id="home" minH="100vh" position="relative" overflow="hidden">
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-br, blue.600, purple.600)"
          opacity={0.2}
        />
        
        <Flex minH="100vh" align="center" justify="center" position="relative" zIndex={1}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
            maxW="4xl"
            mx="auto"
            px={6}
          >
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              mb={6}
            >
     <Box
     mt={150}
  w="60"
  h="60"
  mx="auto"
  borderRadius="full"
  overflow="hidden"
  border="3px solid"
  borderColor="blue.400"
  boxShadow="0 0 20px rgba(59, 130, 246, 0.4)"
>
  <Image
    src="/asset/ilyas.jpg" // تأكد أن الصورة داخل public/asset
    alt="Ilyas Ali-Benyahia"
    w="full"
    h="full"
    objectFit="cover"
  />
</Box>

            </MotionBox>
            
            <MotionHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              size="4xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.400, pink.400)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '6xl' }}
            >
              Computer Science Student
            </MotionHeading>
            
            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              fontSize={{ base: 'lg', md: '2xl' }}
              color="gray.300"
              mb={8}
              maxW="2xl"
              mx="auto"
            >
              Computer sciences graduate with hands-on experience  with practical experience developing end-to-end applications using 
MERN stack and Django. Solid foundation in algorithms, data structures, and problem-solving. Passionate about creating 
efficient and scalable solutions with clean, maintainable code
            </MotionText>
            
            <MotionHStack
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              justify="center"
              spacing={6}
              mb={12}
            >
              <MotionButton
                whileHover={{ scale: 1.1, rotate: 5 }}
                as={Link}
                href="mailto:ilyasalibenyahia@gmail.com"
                bg="blue.600"
                _hover={{ bg: 'blue.700' }}
                px={8}
                py={3}
                borderRadius="full"
                fontWeight="semibold"
                leftIcon={<Icon as={Mail} />}
              >
                Contact Me
              </MotionButton>
              
              <MotionButton
                whileHover={{ scale: 1.1, rotate: -5 }}
                as={Link}
                href="https://github.com/ilyas-ali-benyahia"
                isExternal
                variant="outline"
                borderColor="gray.400"
                _hover={{ borderColor: 'white' }}
                px={8}
                py={3}
                borderRadius="full"
                fontWeight="semibold"
                leftIcon={<Icon as={Github} />}
              >
                GitHub
              </MotionButton>
            </MotionHStack>
            
            <MotionBox
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              position="absolute"
              bottom={10}
              left="50%"
              transform="translateX(-50%)"
            >
              <Icon as={ChevronDown} boxSize={8} color="gray.400" />
            </MotionBox>
          </MotionBox>
        </Flex>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" py={20} px={6}>
        <Container maxW="6xl">
          <MotionBox
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            textAlign="center"
            mb={16}
          >
            <MotionHeading
              variants={fadeInUp}
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '5xl' }}
            >
              About Me
            </MotionHeading>
          </MotionBox>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12} alignItems="center">
            <MotionCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              bg="linear-gradient(to bottom right, rgba(30, 41, 59, 1), rgba(51, 65, 85, 1))"
              boxShadow="2xl"
              borderRadius="2xl"
            >
              <CardBody p={8}>
                <HStack mb={6}>
                  <Icon as={User} color="blue.400" boxSize={6} />
                  <Heading size="lg">Personal Info</Heading>
                </HStack>
                
                <VStack spacing={4} align="stretch" color="gray.300">
                  <HStack>
                    <Icon as={Calendar} color="purple.400" boxSize={5} />
                    <Text>Born: April 16, 2002</Text>
                  </HStack>
                  <HStack>
                    <Icon as={MapPin} color="green.400" boxSize={5} />
                    <Text>El Attaf, Ain Defla, Algeria</Text>
                  </HStack>
                  <HStack>
                    <Icon as={Languages} color="yellow.400" boxSize={5} />
                    <Text>Arabic (Native), French (Intermediate), English (Intermediate to Advanced)</Text>
                  </HStack>
                </VStack>
              </CardBody>
            </MotionCard>

            <MotionCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              bg="linear-gradient(to bottom right, rgba(30, 41, 59, 1), rgba(51, 65, 85, 1))"
              boxShadow="2xl"
              borderRadius="2xl"
            >
              <CardBody p={8}>
                <HStack mb={6}>
                  <Icon as={BookOpen} color="blue.400" boxSize={6} />
                  <Heading size="lg">Education</Heading>
                </HStack>
                
                <VStack spacing={6} align="stretch">
                  <Box borderLeft="4px solid" borderColor="blue.400" pl={4}>
                    <Heading fontSize="lg" mb={1}>Master's in Computer Science</Heading>
                    <Text color="gray.300">University of Chlef • June 2025</Text>
                    <Text fontSize="sm" color="gray.400">Thesis: AI-Powered Multilingual Interactive Learning Platform</Text>
                  </Box>
                  
                  <Box borderLeft="4px solid" borderColor="purple.400" pl={4}>
                    <Heading fontSize="lg" mb={1}>Bachelor's in Computer Science</Heading>
                    <Text color="gray.300">University of Chlef • June 2023</Text>
                    <Text fontSize="sm" color="gray.400">Project: License Plate Detection and Recognition System</Text>
                  </Box>
                </VStack>
              </CardBody>
            </MotionCard>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box as="section" id="skills" py={20} px={6} bg="rgba(30, 41, 59, 0.3)">
        <Container maxW="6xl">
          <MotionBox
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            textAlign="center"
            mb={16}
          >
            <MotionHeading
              variants={fadeInUp}
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '5xl' }}
            >
              Technical Skills
            </MotionHeading>
          </MotionBox>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
            {[
              { title: 'Programming', icon: Code, items: skills.programming, color: 'linear(to-r, blue.500, cyan.500)' },
              { title: 'Frameworks', icon: Settings, items: skills.frameworks, color: 'linear(to-r, purple.500, pink.500)' },
              { title: 'UI & Styling', icon: Award, items: skills.styling, color: 'linear(to-r, green.500, teal.500)' },
              { title: 'AI & ML', icon: Database, items: skills.ai, color: 'linear(to-r, yellow.500, orange.500)' },
              { title: 'Tools', icon: Briefcase, items: skills.tools, color: 'linear(to-r, red.500, pink.500)' },
              { title: 'Methodologies', icon: User, items: skills.methodologies, color: 'linear(to-r, indigo.500, purple.500)' }
            ].map((category, index) => (
              <MotionCard
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                bg="linear-gradient(to bottom right, rgba(30, 41, 59, 1), rgba(51, 65, 85, 1))"
                boxShadow="2xl"
                borderRadius="2xl"
              >
                <CardBody p={6}>
                  <HStack mb={4}>
                    <Box
                      p={3}
                      borderRadius="lg"
                      bgGradient={category.color}
                    >
                      <Icon as={category.icon} boxSize={6} color="white" />
                    </Box>
                    <Heading size="lg">{category.title}</Heading>
                  </HStack>
                  
                  <Wrap>
                    {category.items.map((item, itemIndex) => (
                      <WrapItem key={item}>
                        <MotionBox
                          as={Badge}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          bg="gray.600"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          {item}
                        </MotionBox>
                      </WrapItem>
                    ))}
                  </Wrap>
                </CardBody>
              </MotionCard>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box as="section" id="projects" py={20} px={6}>
        <Container maxW="6xl">
          <MotionBox
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            textAlign="center"
            mb={16}
          >
            <MotionHeading
              variants={fadeInUp}
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '5xl' }}
            >
              Featured Projects
            </MotionHeading>
          </MotionBox>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
            {projects.map((project, index) => (
              <MotionCard
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                bg="linear-gradient(to bottom right, rgba(30, 41, 59, 1), rgba(51, 65, 85, 1))"
                boxShadow="2xl"
                borderRadius="2xl"
                role="group"
              >
                <CardBody p={6}>
                  <Badge bg="blue.600" fontSize="xs" px={2} py={1} borderRadius="full" mb={4}>
                    {project.category}
                  </Badge>
                  
                  <Heading size="lg" mb={3} _groupHover={{ color: 'blue.400' }} transition="colors">
                    {project.title}
                  </Heading>
                  
                  <Text color="gray.300" mb={4} fontSize="sm" lineHeight="relaxed">
                    {project.description}
                  </Text>
                  
                  <Wrap>
                    {project.tech.map((tech) => (
                      <WrapItem key={tech}>
                        <Badge bg="gray.600" fontSize="xs" px={2} py={1} borderRadius="full">
                          {tech}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </CardBody>
              </MotionCard>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={20} px={6} bg="rgba(30, 41, 59, 0.3)">
        <Container maxW="4xl" textAlign="center">
          <MotionBox
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <MotionHeading
              variants={fadeInUp}
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '5xl' }}
            >
              Let's Connect
            </MotionHeading>
            
            <MotionText
              variants={fadeInUp}
              fontSize="xl"
              color="gray.300"
              mb={12}
              maxW="2xl"
              mx="auto"
            >
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </MotionText>
            
            <MotionGrid
              variants={staggerContainer}
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={8}
              mb={12}
            >
              {[
                { icon: Mail, text: 'ilyasalibenyahia@gmail.com', href: 'mailto:ilyasalibenyahia@gmail.com' },
                { icon: Phone, text: '+213 06 56 13 01 37', href: 'tel:+213656130137' },
                { icon: MapPin, text: 'El Attaf, Ain Defla, Algeria', href: '#' }
              ].map((contact, index) => (
                <MotionCard
                  key={index}
                  as={Link}
                  href={contact.href}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  bg="linear-gradient(to bottom right, rgba(30, 41, 59, 1), rgba(51, 65, 85, 1))"
                  boxShadow="2xl"
                  borderRadius="2xl"
                  role="group"
                  _hover={{ textDecoration: 'none' }}
                >
                  <CardBody p={6} textAlign="center">
                    <Icon
                      as={contact.icon}
                      color="blue.400"
                      mb={3}
                      boxSize={8}
                      _groupHover={{ color: 'purple.400' }}
                      transition="colors"
                    />
                    <Text color="gray.300" _groupHover={{ color: 'white' }} transition="colors">
                      {contact.text}
                    </Text>
                  </CardBody>
                </MotionCard>
              ))}
            </MotionGrid>
            
            <MotionHStack
              variants={fadeInUp}
              justify="center"
              spacing={6}
            >
              <MotionButton
                as={Link}
                href="https://linkedin.com/in/ilyas-ali-benyahia-a411b6330"
                isExternal
                whileHover={{ scale: 1.2, rotate: 10 }}
                bg="blue.600"
                _hover={{ bg: 'blue.700' }}
                p={4}
                borderRadius="full"
                minW="auto"
                h="auto"
              >
                <Icon as={Linkedin} boxSize={6} />
              </MotionButton>
              
              <MotionButton
                as={Link}
                href="https://github.com/ilyas-ali-benyahia"
                isExternal
                whileHover={{ scale: 1.2, rotate: -10 }}
                bg="gray.700"
                _hover={{ bg: 'gray.600' }}
                p={4}
                borderRadius="full"
                minW="auto"
                h="auto"
              >
                <Icon as={Github} boxSize={6} />
              </MotionButton>
            </MotionHStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" py={8} textAlign="center" color="gray.400" borderTop="1px solid" borderColor="gray.800">
        <MotionText
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2025 Ilyas Ali-Benyahia. 
        </MotionText>
      </Box>
    </Box>
  );
};

export default Portfolio;
