document.addEventListener("DOMContentLoaded", () => {
  // content ul's
  const contentList = document.getElementById("content-ul");
  const contentListGk = document.getElementById("content-ul-gk");

  const sectionHeadings = document.querySelectorAll("h3");

  // content array
  const contentListItems = [
    "Introduction",
    "Historical Background",
    "Types of Companies",
    "Incorporation of Companies",
    "Company Structure",
    "Management of Companies",
    "Financial Aspects",
    "Company Meetings",
    "Corporate Restructuring",
    "Regulatory Framework",
    "Challenges in Company Law",
    "Case Studies",
    "Conclusion",
    "References",
  ];

  const contentListGkItems = [
    "Introduction",
    "Definition",
    "Need to improve corporate governance standards ",
    "Principles of good corporate governance ",
    "Benefits of good corporate Governance ",
    "References ",
  ];

  //adding lists
  contentListItems.forEach((item) => {
    const newAnchor = `<a class="no-underline " href="#">${item}</a>`;
    const list = document.createElement("li");
    list.innerHTML = newAnchor;
    list.classList.add("scroll-pl-12");
    console.log(contentList);
    contentList.appendChild(list);
  });

  contentListGkItems.forEach((item) => {
    const newAnchor = `<a class="no-underline " href="#">${item}</a>`;
    const list = document.createElement("li");
    list.innerHTML = newAnchor;
    list.classList.add("scroll-pl-12");
    console.log(contentList);
    contentListGk.appendChild(list);
  });

  sectionHeadings.forEach((tag) => {
    tag.classList.add("");
  });
});
