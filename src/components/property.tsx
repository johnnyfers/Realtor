import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '@/assets/images/house.jpg'

export interface IProperty {
    externalID: string
    coverPhoto: {
        url: string
    }
    title: string
    isVerified: boolean
    rentFrequency: string
    price: number
    agency: {
        logo?: {
            url?: string
        }
    }
    rooms: number,
    baths: number
    area: number
}

export const Property = ({  externalID, coverPhoto, title, isVerified, rentFrequency, price, agency, area, baths, rooms } : IProperty) => (
    <Link href={`/property/${externalID}`} onClick={(e) => e.preventDefault()}>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='house' />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified></GoVerified>}</Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text>
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
)