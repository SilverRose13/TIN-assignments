function Student(firstName, lastName, id, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    get fullName() {
        name = this.firstName + " " + this.lastName;
        return name;
    }

    get avgGrades(){
        gradeCount = 0;
        gradeSum = 0;
        for(var i in grades){
        	for(var j in grades[i]){
          	gradeCount += 1;
          	gradeSum += grades[i][j];
          }

        }
        gradeAvg = gradeSum / gradeCount;
        return gradeAvg;
    }

    set setName(name) {
        [this.firstName, this.lastName] = value.split(" ");
      }



}

student1 = new Student('Maja', 'Karolak', 5344, [[5, 5, 6, 4, 3],[3, 4, 2, 3, 5]]);
student1.fullName();
student1.avgGrades();
student1.setName('Ala Kwiecinska');
