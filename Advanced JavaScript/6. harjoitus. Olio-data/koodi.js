let courses = [];

document.querySelector('button').addEventListener('click', addCourse);
document.getElementById('show').addEventListener('click', showAll)

function addCourse(){
    let cname = document.getElementById('course').value;
    let amount = document.getElementById('amount').value;

    // Luodaan tiedoista olio
    let course = {
        cource_name: cname,
        student_num: amount
    }
    // Lisätään olio taulukkoon
    courses.push(course);
}

function showAll() {
    // Käydään läpi kaikki kurssit taulukosta
    courses.forEach( course => {
        // Luodaan kurssille list item
        let li = document.createElement('li');
        li.textContent = "Course " + course.cource_name + " has " + course.student_num + " students registered.";

        // Lisätään list item domiin
        document.querySelector("ul").appendChild(li);
    });
}