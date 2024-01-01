import React, { useEffect, useState } from 'react'
import PhoneDetails from '../phones/details/PhoneDetails'
import iPhone from '../assets/iphone1.jpg'
import { Box, Button, Flex, Skeleton, SkeletonText } from '@chakra-ui/react'
import BlogLinks from '../reviews/BlogLinks'
import UtudeLinks from '../reviews/UtudeLinks'
import Conclusion from '../assets/Conclusion'
import { Link, useParams } from 'react-router-dom'
import api_client from '../api/axios_client'
import Footer from '../footer/Footer'

const ReviewPage = () => {

  const {id} = useParams();
  const[phone, setPhone] = useState({});
  const[loading, setloading] = useState(true);

  useEffect(() => {
    api_client.get(`/phones/${id}`)
      .then(({data}) => {
        console.log(data.data);
        setPhone(data.data);
        setloading(false);
      })

  },[])

  return (
    <>
        {loading ? 
        <Flex direction={'column'} mx={'200px'} >
            <Skeleton h={'800px'}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
            <SkeletonText mt={10} noOfLines={4} spacing='4' skeletonHeight='2' />
            <Skeleton h={'300px'} my={10}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
            <Skeleton h={'500px'} my={10}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
        </Flex> 
        :
        <Box mt={9} mx={'10%'}  >
            <PhoneDetails phone={phone} />
            <BlogLinks blogs={phone.blog_reviews} />
            <UtudeLinks reviews={phone.Utude_reviews}/>
            <Conclusion conclusions={phone.Conclusions} />
        <Button position={'absolute'} shadow={'md'} bg={'black'} color={'white'} borderRadius={0} bottom={'120px'} left={5} size={'sm'} _hover={{color: 'black', background: 'white'}} gap={3}>
          <Link to='/phones'>back to phones</Link>
        </Button>
        </Box>
      }
      <Footer />
    </>
      )
}

export default ReviewPage