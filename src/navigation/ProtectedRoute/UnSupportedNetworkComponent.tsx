import { Heading, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SwitchNetworkButton from '../../components/SwitchNetworkButton';

const MotionImage = motion(Image);

function UnSupportedNetworkComponent() {
  return (
    <VStack spacing={5}>
      <VStack>
        <MotionImage
          animate={{
            y: [1, 7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          src="/errors-svgs/noNetworkSatelite.svg"
          w={[200, 300]}
        ></MotionImage>
        <Heading color="red" textAlign="center">
          UnSupported Network!
        </Heading>
        <Heading size="md" textAlign="center">
          Please switch to supported network.
        </Heading>
      </VStack>
      <SwitchNetworkButton />
    </VStack>
  );
}

export default UnSupportedNetworkComponent;
