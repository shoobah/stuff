export const actions = {
  default: async({request, fetch}) => {
  const data = await request.formData();
  console.log(data.get('title'))
  const result = await fetch(`http://www.omdbapi.com/?apikey=41b4d2b&s=${data.get('title')}`)
  const json = await result.json();
  console.log(json)
    return json;
  }
}

