import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const BlogLinks = ({blogs}) => {
  return (
    <Box border={'1px solid #ccc'} my={6} p={4} shadow={'lg'} >
        <Text color={'blue'} borderBottom={'1px solid blue'} mb={2} fontSize={'30px'} textAlign={'center'}>Blog_Reviews</Text>
        <List spacing={3}>
            {blogs.map(blog => (

            <ListItem mb={2}  borderBottom={'1px solid #ccc'} key={blog.id}>
                source <a href={blog.blog_link}>
                    <span className='text-blue-500 text-lg'>{blog.source} </span>
                    </a> <br />
                {blog.intro} <a href={blog.blog_link}>
                    <span className='text-blue-500 text-lg'> see more...</span>
                </a>
            </ListItem>
            ))}   
            
        </List>
    </Box>
  )
}

export default BlogLinks