import { useState, useEffect } from 'react'

// STYLES
import {
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Checkbox,
  CheckboxGroup,
  Stack,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react'

// TYPES
import { ProjectType } from '../../types/project'

export const SelectProject = ({ projects }: { projects: ProjectType[] }) => {
  const [selectedProjects, setProjects] = useState<string[]>([])

  useEffect(() => {
    const arrProjects = Array.from(
      new Set(projects.map((project) => project.title))
    )

    setProjects(arrProjects)
  }, [projects])

  const handlerChangeSelected = (value: string[]) => {
    setProjects(value)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <HStack gap={4}>
          {selectedProjects.map((project) => (
            <Tag key={project} colorScheme='cyan'>
              <TagLabel>{project}</TagLabel>
            </Tag>
          ))}
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody>
          <Stack gap={[1, 3]} direction={['row', 'column']}>
            <CheckboxGroup
              defaultValue={selectedProjects}
              onChange={(value: string[]) => {
                console.log(selectedProjects)
                handlerChangeSelected(value)
              }}
            >
              {projects.map((project) => (
                <Checkbox
                  value={project.title}
                  key={project.id}
                  colorScheme='blue'
                >
                  <Badge variant='outline'>{project.title}</Badge>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
