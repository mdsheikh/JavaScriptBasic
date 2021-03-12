class Student {
    constructor(id, name, major){
        this.id = id;
        this.name = name;
        this.major = major;
    }

    output(){
        console.log("Id: " + id);
        console.log("name :" + name);
        console.log("major : " + major);

    }
    
}

let student01 = new Student(1001, "John Doe", "Computer Science");
    student01.output();