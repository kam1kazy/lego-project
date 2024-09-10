// STYLES
import {
  Button,
  Text,
  Flex,
  Badge,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  ButtonGroup,
  Divider,
  Box,
} from '@chakra-ui/react'

// TYPES
import { ProjectType } from '../../../types/project'

// HANDLERS
import { handleFilter } from '@handlers/handleFilter'

export const Project = ({
  project,
  onOpen,
  setCurrentProject,
}: {
  project: ProjectType
  onOpen: () => void
  setCurrentProject: (project: ProjectType) => void
}) => {
  // SET FILTER
  handleFilter(project.status)

  // OPEN PROJECT in MODAL
  const handleModal = () => {
    setCurrentProject(project)
    onOpen()
  }

  return (
    <Card
      maxW='sm'
      key={project.id}
      // cursor='pointer'
      // onClick={() => handleModal()}
    >
      <CardBody>
        <Flex>
          <Image
            boxSize='50px'
            src={project.image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack ml='6'>
            <Stack direction='row'>
              <Badge
                variant='outline'
                colorScheme={handleFilter(project.status)}
              >
                {project.status}
              </Badge>
            </Stack>

            <p>{project.create_date.toISOString()}</p>
          </Stack>
        </Flex>

        <Stack mt='6' spacing='3'>
          <Heading size='md'>{project.title} Sofa</Heading>
          <Text>{project.description}</Text>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button
            variant='solid'
            colorScheme='blue'
            onClick={() => handleModal()}
          >
            Подробнее
          </Button>
          <Box>
            <Button variant='ghost' colorScheme='blue'>
              Добавить задачу
            </Button>
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
