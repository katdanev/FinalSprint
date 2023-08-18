
// FETCH and READ the people.json disk file

fetch('./person.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(person => {
      console.log(getFullName(person));
      console.log(birth(person));
      console.log(famouse(person));
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  

  function getFullName(person) {
    return `${person.firstname} ${person.lastname} is a famouse Ukrainian ${person.fieldactivity}.`;
  }

  function birth (person) {
    return `He was born in ${person.birthyear}.`;
  }
  
  function famouse (person) {
    return `All over the world he is best known for ${person.invention}.`;
  }

//   html = `
//   <p>
//   ${getFullName()} is a famouse Ukrainian ${person.fieldactivity}. He was born in ${birth()}. All over the world he is best known for ${famouse()}.
   
//   </p>
// `;

// console.log(html);
// document.body.innerHTML = html;