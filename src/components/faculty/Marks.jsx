import React, { useState } from 'react';

const Marks = () => {
  const initialData = [
    {
      id: 1,
      name: 'student1',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 2,
      name: 'student2',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 3,
      name: 'student3',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 4,
      name: 'student4',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 5,
      name: 'student5',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 6,
      name: 'student6',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 7,
      name: 'student7',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 8,
      name: 'student8',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 9,
      name: 'student9',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 10,
      name: 'student10',
      section: 'A',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 11,
      name: 'student11',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 12,
      name: 'student12',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 13,
      name: 'student13',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 14,
      name: 'student14',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 15,
      name: 'student15',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 16,
      name: 'student16',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 17,
      name: 'student17',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 18,
      name: 'student18',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 19,
      name: 'student19',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 20,
      name: 'student20',
      section: 'B',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 21,
      name: 'student21',
      section: 'C',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 22,
      name: 'student22',
      section: 'C',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 23,
      name: 'student23',
      section: 'C',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 24,
      name: 'student24',
      section: 'C',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
    {
      id: 25,
      name: 'student25',
      section: 'C',
      s1: '11',
      s2: '21',
      es: '31',
      ta: '41',
      lab: '51',

      total: '31',
    },
  ];

  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(null);

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
    );
    setData(updatedData);
  };

  const handleSave = async (id) => {
    const studentToSave = data.find((student) => student.id === id);

    if (studentToSave) {
      try {
        const response = await fetch('/api/saveStudentData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(studentToSave),
        });

        if (response.ok) {
          console.log('Data saved su51essfully:', studentToSave);
        } else {
          console.error('Failed to save data');
        }
      } catch (error) {
        console.error('Error while saving data:', error);
      }
    }
    setEditMode(null);
  };
  return (
    <div className="w-full h-[400px] bg-card-bg shadow-md rounded-xl p-8 overflow-auto">
      <table className="min-w-full divide-y divide-slate-300 rounded-lg">
        <thead className="bg-navbar-bg  top-0">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              Name
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              Section
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              Sessional 1
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              Sessional 2
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              End Semester
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              Teacher Assessment
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
            >
              Lab
            </th>

            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pr-6"
            >
              Total Marks
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pr-6"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-center">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="pl-4 pr-3 py-3 text-sm font-medium text-card-text sm:pl-6">
                {item.name}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm font-medium text-card-text sm:pl-6">
                {item.section}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={item.s1}
                    onChange={(e) =>
                      handleInputChange(item.id, 's1', e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  />
                ) : (
                  item.s1
                )}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={item.s2}
                    onChange={(e) =>
                      handleInputChange(item.id, 's2', e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  />
                ) : (
                  item.s2
                )}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={item.es}
                    onChange={(e) =>
                      handleInputChange(item.id, 'es', e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  />
                ) : (
                  item.es
                )}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={item.ta}
                    onChange={(e) =>
                      handleInputChange(item.id, 'ta', e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  />
                ) : (
                  item.ta
                )}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={item.lab}
                    onChange={(e) =>
                      handleInputChange(item.id, 'lab', e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  />
                ) : (
                  item.lab
                )}
              </td>

              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={item.total}
                    onChange={(e) =>
                      handleInputChange(item.id, 'total', e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  />
                ) : (
                  item.total
                )}
              </td>
              <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                {editMode === item.id ? (
                  <button
                    onClick={() => handleSave(item.id)}
                    className="text-navbar-text bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setEditMode(item.id)}
                    className="text-navbar-text bg-green-500 hover:bg-green-700 px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
