function choice(items) {
  let id = Math.floor(Math.random() * items.length);
  return items[id];
}

function remove(items, item) {
  var id = 0;
  items.forEach((element, i) => {
    if(element === item) {
      id = i;
    }   
  });
  return [ ...items.slice(0, id), ...items.slice(id + 1) ]
}


// function remove(items, item) {
// 	for (let i = 0; i < items.length; i++) {
// 		if (items[i] === item) {
// 			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
// 		}
// 	}
// }

export { choice, remove };