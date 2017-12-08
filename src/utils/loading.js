export async function startLoading (dispatcher, loaderMessage, callback) {
  dispatcher('loader/load', loaderMessage, { root: true })
  const response = await callback()
  dispatcher('loader/end', loaderMessage, { root: true })
  return response
}

export async function stopLoading (dispatcher, loaderMessage) {
  dispatcher('loader/end', loaderMessage, { root: true })
}
