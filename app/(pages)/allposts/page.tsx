import React from 'react'
import { Flex, Box, Container, Grid } from '@radix-ui/themes'
const AllPostsPage = () => {
  return (
    <div>
      <Flex gap="3" className='p-5'>
        {/* 1 */}
        <Flex gap="3" className='bg-sky-500 w-10/12 h-screen'>

          <Box width="9" height="9" className='px-5 py-2'>
            <p>left</p>
          </Box>

        </Flex>
        {/* 2 */}
        <Flex className='bg-red-500 w-2/12 h-screen'>
          <Box className='px-5 py-2'><p>right</p></Box>
        </Flex>
      </Flex>
    </div>
  )
}

export default AllPostsPage
