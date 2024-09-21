import React, { useState } from 'react';

const Results = () => {
  const initialData = [
    {
      id: 1,
      name: 'student1',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 2,
      name: 'student2',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 3,
      name: 'student3',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 4,
      name: 'student4',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 5,
      name: 'student5',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 6,
      name: 'student6',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 7,
      name: 'student7',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 8,
      name: 'student8',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 9,
      name: 'student9',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 10,
      name: 'student10',
      section: 'A',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 11,
      name: 'student11',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 12,
      name: 'student12',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 13,
      name: 'student13',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 14,
      name: 'student14',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 15,
      name: 'student15',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 16,
      name: 'student16',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 17,
      name: 'student17',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 18,
      name: 'student18',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 19,
      name: 'student19',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 20,
      name: 'student20',
      section: 'B',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 21,
      name: 'student21',
      section: 'C',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 22,
      name: 'student22',
      section: 'C',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 23,
      name: 'student23',
      section: 'C',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 24,
      name: 'student24',
      section: 'C',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
    },
    {
      id: 25,
      name: 'student25',
      section: 'C',
      sub1: 'AA',
      sub2: 'AB',
      sub3: 'BB',
      sub4: 'BC',
      sub5: 'CC',
      sub6: 'CD',
      total: 'BB',
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
          console.log('Data saved successfully:', studentToSave);
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
    <div className="bg-background h-auto w-full flex flex-row">
      <div className="bg-black text-white flex justify-center items-center text-center m-8 p-4 rounded-xl sticky min-h-screen">
        <h1 className="text-4xl font-bold text-navbar-text ">View Results</h1>
      </div>
      <div className="flex flex-col items-center w-[80%] m-8 rounded-xl ml-0">
        {/* result overview */}
        <div className="flex bg-card-bg p-4 rounded-xl w-full">
          <div className="flex flex-col m-4">
            <h1 className="text-xl font-bold text-card-text mb-4">
              Final Result{' '}
            </h1>
            <div className="rounded-lg bg-navbar-bg p-4 text-navbar-text">
              <h1 className="text-xl font-bold pb-5">
                Highest CGPA = 9.5 (BT23CSD066)
              </h1>
              <h1 className="text-xl font-bold pb-5">
                Highest CGPA = 4.5 (BT23CSD063)
              </h1>
            </div>
          </div>
          <div className="rounded-lg bg-navbar-bg p-4 m-4">
            <h1 className="text-xl font-bold text-navbar-text mb-4">
              Total number of students: 65
            </h1>
            <h1 className="text-xl font-bold text-navbar-text mb-4">
              Number of Students passed in all subjects: 50
            </h1>
            <h1 className="text-xl font-bold text-navbar-text mb-4">
              Number of Students failed in atleast one subject: 15
            </h1>
          </div>
        </div>
        {/* result table */}
        <div className="w-full h-[400px] bg-white shadow-md rounded-xl mt-8 mb-0 m-4 overflow-auto no-scrollbar">
          <table className="min-w-full divide-y divide-slate-300 rounded-lg">
            <thead className="bg-navbar-bg sticky top-0">
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
                  Subject 1
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                >
                  Subject 2
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                >
                  Subject 3
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                >
                  Subject 4
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                >
                  Subject 5
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                >
                  Subject 6
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pr-6"
                >
                  Total Grade
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pr-6"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
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
                        value={item.sub1}
                        onChange={(e) =>
                          handleInputChange(item.id, 'sub1', e.target.value)
                        }
                        className="border rounded-md px-2 py-1"
                      />
                    ) : (
                      item.sub1
                    )}
                  </td>
                  <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                    {editMode === item.id ? (
                      <input
                        type="text"
                        value={item.sub2}
                        onChange={(e) =>
                          handleInputChange(item.id, 'sub2', e.target.value)
                        }
                        className="border rounded-md px-2 py-1"
                      />
                    ) : (
                      item.sub2
                    )}
                  </td>
                  <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                    {editMode === item.id ? (
                      <input
                        type="text"
                        value={item.sub3}
                        onChange={(e) =>
                          handleInputChange(item.id, 'sub3', e.target.value)
                        }
                        className="border rounded-md px-2 py-1"
                      />
                    ) : (
                      item.sub3
                    )}
                  </td>
                  <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                    {editMode === item.id ? (
                      <input
                        type="text"
                        value={item.sub4}
                        onChange={(e) =>
                          handleInputChange(item.id, 'sub4', e.target.value)
                        }
                        className="border rounded-md px-2 py-1"
                      />
                    ) : (
                      item.sub4
                    )}
                  </td>
                  <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                    {editMode === item.id ? (
                      <input
                        type="text"
                        value={item.sub5}
                        onChange={(e) =>
                          handleInputChange(item.id, 'sub5', e.target.value)
                        }
                        className="border rounded-md px-2 py-1"
                      />
                    ) : (
                      item.sub5
                    )}
                  </td>
                  <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                    {editMode === item.id ? (
                      <input
                        type="text"
                        value={item.sub6}
                        onChange={(e) =>
                          handleInputChange(item.id, 'sub6', e.target.value)
                        }
                        className="border rounded-md px-2 py-1"
                      />
                    ) : (
                      item.sub6
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
      </div>
    </div>
  );
};

export default Results;
