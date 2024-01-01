import { Button, Center, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import Phone from '../../home/contents/Phone'
import iPhone from '../../assets/iphone1.jpg'
import { Carousel } from 'flowbite-react'
import Details from './Details'
import PhoneDetails from './PhoneDetails'


const DetailModal = ({onClose, isOpen,  phone}) => {
  return (
    <Modal onClose={onClose} isCentered isOpen={isOpen} size={{ base: "3xl", md: "6xl" }} >
        <ModalOverlay />
        <ModalContent style={{fontFamily: 'Afacad ,sans-serif'}} pb={3}>
            <ModalCloseButton />
            <ModalBody>
              <PhoneDetails phone={phone} display={'block'} />
            </ModalBody>
        </ModalContent>
  </Modal>
  )
}

export default DetailModal