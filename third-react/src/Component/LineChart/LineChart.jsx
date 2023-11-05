import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Student 1", mark: 85 },
        { id: 2, name: "Student 2", mark: 92 },
        { id: 3, name: "Student 3", mark: 78 },
        { id: 4, name: "Student 4", mark: 88 },
        { id: 5, name: "Student 5", mark: 95 },
        { id: 6, name: "Student 6", mark: 76 },
        { id: 7, name: "Student 7", mark: 90 },
        { id: 8, name: "Student 8", mark: 84 },
        { id: 9, name: "Student 9", mark: 89 },
        { id: 10, name: "Student 10", mark: 93 },
      ];
      
    return (
            <LChart width={500} height={400} data={studentMarks}>
                <Line type="monotone" dataKey="id" stroke="#272727"></Line>
            </LChart>
    );
};

export default LineChart;