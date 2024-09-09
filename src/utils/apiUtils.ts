//функции для работы с API, такие как обработка ошибок, создание заголовков, и т.д.

export const handleApiError = (error: any) => {
  if (error.response) {
    console.error(error.response.data)
  } else {
    console.error(error.message)
  }
}
