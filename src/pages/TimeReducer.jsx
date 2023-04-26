const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date);

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result
};

export const submitAPI = async data => true

export const INITIAL_STATE = () => fetchAPI(new Date());

export const timeReducer = (state, action) => {
  switch (action.type) {
    case "NEW_DATE":
      const newData = fetchAPI(action.payload)
      return [...state, newData]
    default:
      return state
  }
}
