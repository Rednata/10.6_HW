interface UserData {
  id: number,
  firstname: string,
  surname: string,
  age: number,  
}

interface StudentData extends UserData {
  year: number,
  speciality: string,
}

interface EmployeeData extends UserData {
  post: string
}

abstract class Users<T extends UserData> {
  usersList: T[] = [];  

  add(user: T): void {
    user.id = Number(Math.random().toString().slice(2,8));        
    this.usersList.push(user)
  }
  remove(id: number): boolean {
    const index = this.usersList.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.usersList.splice(index, 1);
      return true;
    }
    return false;
  }
  get(id: number): T | null {
    return this.usersList.find(item => item.id === id) ?? null
  }

  sorted<K extends keyof T>(sortValue: K, sortType: boolean): T[] | undefined {
    if (sortType) {           
             
      if (typeof this.usersList[0][sortValue] === 'number') {
        
        return this.usersList.sort((a: T, b: T) => Number(a[sortValue]) - Number(b[sortValue]))
      } else {
        console.log(typeof sortValue);
        return this.usersList.sort((a: T, b: T) => String(a[sortValue]).localeCompare(String(b[sortValue])))
      }      
    } else {
      if (typeof this.usersList[0][sortValue] === 'number') {
        
        return this.usersList.sort((a: T, b: T) => Number(b[sortValue]) - Number(a[sortValue]))
      } else {
        console.log(typeof sortValue);
        return this.usersList.sort((a: T, b: T) => String(b[sortValue]).localeCompare(String(a[sortValue])))
      }      
    }
      
  }      

}

class Students extends Users<StudentData> {}

class Employees extends Users<EmployeeData> {}


const studList = new Students()

studList.add({
  id: 0,
  firstname: 'Иван',
  surname: 'Иванов',
  age: 25,
  year: 2022,
  speciality: 'Frontend',
})

studList.add({
  id: 0,
  firstname: 'Петр',
  surname: 'Петров',
  age: 32,
  year: 2024,
  speciality: 'React',
})

studList.add({
  id: 3,
  firstname: 'Василий',
  surname: 'Васильев',
  age: 18,
  year: 2020,
  speciality: 'TS',
})

studList.add({
  id: 4,
  firstname: 'Геннадий',
  surname: 'Геннадьев',
  age: 29,
  year: 2000,
  speciality: 'Design',
})

studList.add({
  id: 5,
  firstname: 'Борис',
  surname: 'Борисов',
  age: 38,
  year: 2015,
  speciality: 'Web',
})

const emploList = new Employees();

emploList.add({
  id: 6,
  firstname: 'Роман',
  surname: 'Романов',
  age: 41,
  post: 'driver',
})

emploList.add({
  id: 7,
  firstname: 'Дмитрий',
  surname: 'Дмитриев',
  age: 34,
  post: 'lawyer',
})




