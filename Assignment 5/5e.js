

class Student{
    constructor(firstName, lastName, id, grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }

    get fullName() {
        name = this.firstName + " " + this.lastName;
        return name;
    }

    get avgGrades(){
        var gradeCount = 0;
        var gradeSum = 0;
        for(var i in this.grades){
        	for(var j in this.grades[i]){
          	gradeCount += 1;
          	gradeSum += this.grades[i][j];
          }

        }
        var gradeAvg = gradeSum / gradeCount;
        return gradeAvg;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
      }
}

student1 = new Student('Maja', 'Karolak', 5344, [[5, 5, 6, 4, 3],[3, 4, 2, 3, 5]]);
console.log(student1.fullName);
console.log(student1.avgGrades);
student1.fullName = 'Ala Kwiecinska';
console.log(student1.fullName);