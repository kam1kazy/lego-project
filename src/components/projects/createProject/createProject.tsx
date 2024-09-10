import React, { useState, useRef } from 'react'

// STYLES
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  Select,
  useDisclosure,
  Box,
  InputRightAddon,
  RadioGroup,
  Radio,
  Badge,
} from '@chakra-ui/react'

// TYPES
import { ProjectType } from '../../../types/project'

// HANDLERS
import { handleFilter } from '@handlers/handleFilter'

export const CreateProject = ({
  project,
  isOpen,
  onClose,
  statuses,
}: {
  project: ProjectType
  isOpen: boolean
  onClose: () => void
  overlay: JSX.Element
  statuses: string[]
}) => {
  const firstField = useRef()
  const [value, setValue] = useState('')

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        // initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' mb={2}>
            Create a new project
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='projectName'>Project Name</FormLabel>
                <Input
                  //   ref={firstField}
                  id='projectName'
                  placeholder='Please enter project name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Select Status</FormLabel>

                {/* PROJECT STATUS */}
                <RadioGroup value={value} onChange={setValue}>
                  <Stack gap={[1, 2]} direction={['row', 'column']}>
                    {statuses.map((status) => (
                      <Radio
                        value={status}
                        colorScheme={handleFilter(status)}
                        key={status}
                      >
                        <Badge
                          variant='outline'
                          colorScheme={handleFilter(status)}
                        >
                          {status}
                        </Badge>
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Create</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
