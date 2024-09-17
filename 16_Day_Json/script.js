const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

// console.log(JSON.stringify(skills, undefined, 4));
// console.log(JSON.stringify(age, undefined, 1));
// console.log(JSON.stringify(student.isMarried, undefined, 4));
// console.log(JSON.stringify(student, undefined, 4));

// console.log(JSON.stringify(student, ["firstName", "lastName", "skills"], 4));

const newObj = JSON.parse(txt, (key, value) => {
  let newValue = key == "skills" ? value.length : value;
  return newValue;
});

const result = Object.values(newObj).sort((a, b) => {
  if (a.skills > b.skills) return -1;
  if (a.skills < b.skills) return 1;
  return 0;
});

// console.log(newObj);
const userWithManySkills = Object.keys(newObj)
  .map((key) => {
    return {
      name: key,
      skills: newObj[key].skills,
    };
  })
  .sort((a, b) => {
    if (a.skills > b.skills) return -1;
    if (a.skills < b.skills) return 1;
    return 0;
  });

console.log(userWithManySkills[0]);

// console.log(Object.keys(newObj));
// console.log(result);

setTimeout(() => {
  console.log("Hello");
}, 3000);
