import { useState, useEffect } from 'react'

// STYLES
import {
  Button,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react'

// TYPES
import { ProjectType } from '../../types/project'

// HANDLERS
import { handleFilter } from '@handlers/handleFilter'

export const SelectStatus = ({
  project,
  statuses,
  size,
}: {
  project: ProjectType
  statuses: string[]
  size?: string
}) => {
  const [selectedStatus, setStatus] = useState(project.status)

  useEffect(() => {
    setStatus(project.status)
  }, [project])

  const handlerChangeStatus = (value: string) => {
    setStatus(value)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          size={size}
          colorScheme={handleFilter(selectedStatus)}
          variant='outline'
        >
          {selectedStatus}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody>
          <RadioGroup
            value={selectedStatus}
            onChange={(value) => {
              handlerChangeStatus(value)
            }}
          >
            <Stack gap={[1, 3]} direction={['row', 'column']}>
              {statuses.map((status) => (
                <Radio
                  value={status}
                  colorScheme={handleFilter(status)}
                  key={status}
                >
                  <Badge variant='outline' colorScheme={handleFilter(status)}>
                    {status}
                  </Badge>
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
