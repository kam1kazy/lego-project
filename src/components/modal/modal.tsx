import { useState } from 'react'

// STYLES
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Flex,
  Image,
  Stack,
  Editable,
  EditablePreview,
  EditableTextarea,
  EditableInput,
  FormControl,
} from '@chakra-ui/react'

// TYPES
import { ProjectType } from '../../types/project'

// COMPONENTS
import { SelectStatus } from '@components/selectStatus/selectStatus'

export const ModalProject = ({
  project,
  isOpen,
  onClose,
  overlay,
  statuses,
}: {
  project: ProjectType
  isOpen: boolean
  onClose: () => void
  overlay: JSX.Element
  statuses: string[]
}) => {
  const [value, setValue] = useState('')

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalCloseButton zIndex={1} />
        <ModalHeader>
          {/* PROJECT TITLE */}
          <FormControl mb={5}>
            <Editable defaultValue={project.title} fontSize={32}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>

          {/* PROJECT IMAGE */}
          <Flex>
            <Image
              mr='6'
              boxSize='100px'
              src={project.image}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack>
              {/* PROJECT STATUS */}
              <SelectStatus project={project} statuses={statuses} />

              {/* PROJECT DATE */}
              <Input
                variant='unstyled'
                placeholder='Select Date and Time'
                size='md'
                type='date'
                onChange={handleChange}
                value={project.due_date}
              />
            </Stack>
          </Flex>
        </ModalHeader>
        <ModalBody>
          {/* PROJECT DESCRIPTION */}
          <Editable defaultValue={project.description}>
            <EditablePreview />
            <EditableTextarea />
          </Editable>

          {/* TASK LIST */}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
