export const isDev = () => process.env.NODE_ENV === 'development'

export const Print = function (title, data, type = true) {
  if (isDev()) {
    console.group(title)
    if (type) console.log(data)
    else console.error(data)
    console.groupEnd()
  }
}
