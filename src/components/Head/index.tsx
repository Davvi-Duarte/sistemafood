interface HeadProps{
  title: string
  description?: string
}

export function Head({title, description=''}: HeadProps) {
  document.title = `Mister Salgados | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
