export function createState(){
  let page = $state(1);
  let query = $state('');

  return {
    get page() {return page},
    get query() {return query},
    set query(newValue) {query = newValue},
    incrementPage: () => page++,
    decrementPage: () => page--,
  }
}
