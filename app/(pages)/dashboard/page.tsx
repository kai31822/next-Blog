import { Metadata } from 'next'
import React, { useEffect, useState } from 'react'
import { Flex, Box, Card, Text, Avatar, Button } from '@radix-ui/themes'
import getAllUsers from '@/app/lib/getAllUsers'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'OXO',
}
const DashboardPage = async () => {

  const usersdata: Promise<User[]> = getAllUsers()
  const users = await usersdata

  const content = (
    <section>
      <h2>
        <Link href="/">back to home</Link>
      </h2>
      <br />
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1 ><Link href={`/users/${user.id}`}>{user.name}</Link></h1>
            <p>{user.email}</p>
            <br />

          </div>
        )
      })}
    </section>
  )



  return (

    <Flex gap="3" className='p-5'>
      {/* 1 */}
      <Flex className='bg-red-500 w-2/12 h-screen'>
        <Box className='px-5 py-2'><p>Sidebar</p>
          <Button ><Link href='/dashboard/new'>New Post</Link></Button>
          <Button ><Link href='/issues/new'>New Issue</Link></Button>
        </Box>
      </Flex>

      {/* 2 */}
      <Flex gap="3" className='bg-sky-500 w-10/12 h-screen' >
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

              {content}




            </Flex>
          </Card>

        </Box>
      </Flex>
    </Flex>
  )
}

export default DashboardPage
