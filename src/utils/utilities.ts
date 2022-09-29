export const trimLink = (link: string): string => {
  let trimmedLink: string = link

  if (trimmedLink.includes('https://')) {
    trimmedLink = trimmedLink.slice(8)
  } 
  
  if (trimmedLink.includes('http://')) {
    trimmedLink = trimmedLink.slice(7)
  } 

  if (trimmedLink.includes('?')) {
    trimmedLink = trimmedLink.slice(0, trimmedLink.indexOf('?'))
  } 

  if (trimmedLink[trimmedLink.length - 1] === '/') {
    trimmedLink = trimmedLink.slice(0, trimmedLink.length - 1)
  }

  return trimmedLink
}

export const uniqueArray = (...arrays: string[]) => {
  const allArrays: string[] = []
  for (let i = 0; i < arrays.length; i++) {
    allArrays.push(arrays[i])
  }

  const filteredArray: string[] = 
    allArrays.filter((skill: string, idx: number) => 
      allArrays.indexOf(skill) === idx
    )

  return filteredArray
}