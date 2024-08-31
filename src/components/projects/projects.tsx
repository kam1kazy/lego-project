import { useState, useEffect } from 'react'

// STYLES
import {
  useDisclosure,
  ModalOverlay,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Heading,
} from '@chakra-ui/react'

// COMPONENTS
import { Project } from '@components/projects/project/project'
import { ModalProject } from '@components/modal/modal'
import { CreateProject } from '@components/projects/createProject/createProject'

// TYPES
import { ProjectType } from '../../types/project'

export const Projects = ({
  projects,
  statuses,
}: {
  projects: ProjectType[]
  statuses: string[]
}) => {
  const [currentProject, setCurrentProject] = useState(projects[0])

  // SET MODAL
  const OverlayOne = () => (
    <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(2px)' />
  )
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()

  const {
    isOpen: isOpenCreateProject,
    onOpen: onOpenCreateProject,
    onClose: onCloseCreateProject,
  } = useDisclosure()

  return (
    <>
      <Heading as='h1' size='xl' noOfLines={1} mb={5}>
        Projects
      </Heading>

      <Tabs variant='enclosed' isLazy mb={10}>
        {/* Projects CATEGORY */}
        <TabList mb={4} gap={1}>
          <Tab>All Projects</Tab>

          {statuses.map((status) => (
            <Tab key={status}>{status}</Tab>
          ))}

          {/* CREATE PROJECT */}
          <Button
            ml={'auto'}
            mt={2}
            size='xs'
            colorScheme='blue'
            onClick={onOpenCreateProject}
          >
            + Create project
          </Button>
        </TabList>

        <TabPanels>
          {/* RENDER All Projects */}
          <TabPanel p={0}>
            <Flex gap={5}>
              {projects.map((project) => (
                <Project
                  project={project}
                  key={project.id}
                  onOpen={onOpenModal}
                  setCurrentProject={setCurrentProject}
                />
              ))}
            </Flex>
          </TabPanel>

          {/* RENDER on STATUS TAB */}
          {statuses.map((status) => (
            <TabPanel p={0} key={status}>
              <Flex>
                {projects
                  .filter((project) => project.status === status)
                  .map((project) => (
                    <Project
                      project={project}
                      key={project.id}
                      onOpen={onOpenModal}
                      setCurrentProject={setCurrentProject}
                    />
                  ))}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {/* OPEN MODAL with Current Project */}
      <ModalProject
        isOpen={isOpenModal}
        onClose={onCloseModal}
        overlay={<OverlayOne />}
        project={currentProject}
        statuses={statuses}
      />

      {/* OPEN DRAWER for CREATE PROJECT */}
      <CreateProject
        isOpen={isOpenCreateProject}
        onClose={onCloseCreateProject}
        overlay={<OverlayOne />}
        project={currentProject}
        statuses={statuses}
      />
    </>
  )
}
