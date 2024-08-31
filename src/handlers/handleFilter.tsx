// FILTER STATUS
export const handleFilter = (status: string) => {
  switch (status) {
    case 'Not Started':
      return 'orange'
    case 'In Progress':
      return 'blue'
    case 'Done':
      return 'green'
    default:
      return 'gray'
  }
}
