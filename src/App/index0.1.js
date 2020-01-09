import React from 'react'

/* const employees = [
  {
    employee1: 'employee1',
    Details: [
      {
        title: 'Software Engineer',
        EmployeeId: 451,
      },
    ],
  },
  {
    employee2: 'employee2',
    Details: [],
  },
  {
    employee3: 'employee3',
    Details: [
      {
        title: 'Test analyst',
        EmployeeId: 453,
      },
    ],
  },
  {
    employee4: 'employee4',
    Details: [
      {
        title: 'Software engineer',
        EmployeeId: 487,
      },
      {
        title: 'Architect',
        EmployeeId: 500,
      },
    ],
  },
] */

const array1 = [
  {
    course: 'ABC',
    skills: ['skill1', 'skill2'],
  },
  {
    course: 'DEF',
    skills: ['skill1'],
  },
  {
    course: 'GHI',
    skills: ['skill1', 'skill2', 'skill3'],
  },
]

const App = () => {
  const res = array1.flatMap(({ course, skills }) =>
    skills.map(skill => ({ course, skill }))
  )
  console.log(res)
  return <div>{res}</div>
}

export default App
