const resumeData = {
  name: "Aishwarya",
  email: "atom.aishwarya@gmail.com",
  phone: "+918940019391",
  address: "207, Jeevanandham Road",
  summary:
    "Motivated and detail-oriented professional with 3 years of experience in Frontend development. Skilled in full-stack web development using technologies such as JavaScript, React, Node.js, and MongoDB. Strong problem-solving abilities and a passion for learning new technologies.",
  education: [
    {
      degree: "Bachelor of Engineering",
      university: "Anna University",
      cgpa: "8.4",
      graduation_year: "2011",
    },
  ],
  experience: [
    {
      position: "Frontend Developer",
      company: "Atom sysytems private limited",
      location: "Coimbatore",
      start_date: "Jan , 2021",
      end_date: "Present",
      responsibilities: [
        "Developing and maintaining web applications using React.js ",
        "Collaborating with cross-functional teams to design and implement new features",
        "Troubleshooting and debugging code to ensure optimal performance",
      ],
    },
  ],
  skills: ["JavaScript", "React.js", "HTML5", "CSS3", "Bootstrap", "Git"],
  languages: ["English", "Tamil"],
};

// Using for...in loop
console.log("Using for...in loop:");
for (const key in resumeData) {
  console.log(key + ":", resumeData[key]);
}

// Using forEach loop for arrays
console.log("\nUsing forEach loop for arrays:");
resumeData.forEach((item) => {
  for (const key in item) {
    console.log(key + ":", item[key]);
  }
});
resumeData.education.forEach((edu) => {
  for (const key in edu) {
    console.log(key + ":", edu[key]);
  }
});

resumeData.experience.forEach((exp) => {
  for (const key in exp) {
    if (Array.isArray(exp[key])) {
      console.log(key + ":");
      exp[key].forEach((item) => console.log("- ", item));
    } else {
      console.log(key + ":", exp[key]);
    }
  }
});

// Using for...of loop
console.log("\nUsing for...of loop:");
for (const [key, value] of Object.entries(resumeData)) {
  if (Array.isArray(value)) {
    console.log(key + ":");
    value.forEach((item) => {
      if (typeof item === "object") {
        for (const [k, v] of Object.entries(item)) {
          console.log("- " + k + ":", v);
        }
      } else {
        console.log("- " + item);
      }
    });
  } else {
    console.log(key + ":", value);
  }
}
