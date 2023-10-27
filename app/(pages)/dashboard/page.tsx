'use client'
import React, { useEffect, useState } from 'react'
import { Flex, Box, Card, Text, Avatar } from '@radix-ui/themes'
import getUser from '@/app/lib/getUser'
import { useSession } from 'next-auth/react'



const DashboardPage = () => {
  const [userd, setUserd] = useState(null)
  const { data: session } = useSession()
  useEffect(() => {
    const fetchData = async () => {
      //fail
      const response = await fetch(`http://localhost:3000/api/users/3dc54af5-8c68-4843-933e-c01f17871256`,
        {
          //fail
          headers: { 'authorization': `${session?.user.accessToken}` }
        })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setUserd(result)
      console.log(result);


    }
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
    console.log(userd);

  }, [])


  return (

    <Flex gap="3" className='p-5'>
      {/* 1 */}
      <Flex className='bg-red-500 w-2/12 h-screen'>
        <Box className='px-5 py-2'><p>Sidebar</p></Box>
      </Flex>

      {/* 2 */}
      <Flex gap="3" className='bg-sky-500 w-10/12 h-screen'>
        <Box className='px-5 py-2 w-full'>
          <p>User Post</p>
          {/* test1 */}
          <Card >
            <Flex gap="3" align="center">
              {/* <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              /> */}

              <Box>
                <Text as="div" size="2" weight="bold" >
                  Teodros Girmay
                </Text>
                <Text as="div" size="2" color="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi recusandae quam asperiores soluta aliquid impedit reiciendis ducimus, necessitatibus eveniet distinctio vitae similique blanditiis rerum dolorum, minima quo fugiat commodi.
                </Text>
              </Box>
              {/*  */}
              {/* {userd ?? userd.map(d => {
                <Box key={d}>
                  <Text as="div" size="2" weight="bold" >
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi recusandae quam asperiores soluta aliquid impedit reiciendis ducimus, necessitatibus eveniet distinctio vitae similique blanditiis rerum dolorum, minima quo fugiat commodi.
                  </Text>
                </Box>
              })} */}

            </Flex>
          </Card>

        </Box>
      </Flex>
    </Flex>
  )
}

export default DashboardPage
