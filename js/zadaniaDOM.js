function countElements(element, tagCount) {

    const tagName = element.tagName.toLowerCase();
    tagCount[tagName] = (tagCount[tagName] || 0) + 1;


    for (let i = 0; i < element.children.length; i++) {
        countElements(element.children[i], tagCount);
    }
}

const sections = document.querySelectorAll('section');
let results = '';


sections.forEach((section) => {
    const sectionId = section.id || 'bez id';
    results += `<h3>Sekcja: ${sectionId}</h3>`;
    const tagCount = {};
    countElements(section, tagCount);


    for (const tag in tagCount) {
        results += `${tag}: ${tagCount[tag]}<br>`;
    }
});

document.getElementById('zad3').innerHTML = results;
