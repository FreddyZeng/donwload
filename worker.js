addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a given request object
 * @param {Request} request
 */
async function handleRequest(request) {
  const url_string = "https://download.175208.xyz"

  const response = await fetch(request.url.substring(url_string.length));
  console.log(request)
  return response
}

