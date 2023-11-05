import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Student 1", mark: 85 },
        { id: 2, name: "Student 2", mark: 92 },
        { id: 3, name: "Student 3", mark: 78 },
        { id: 4, name: "Student 4", mark: 58 },
        { id: 5, name: "Student 5", mark: 35 },
        { id: 6, name: "Student 6", mark: 76 },
        { id: 7, name: "Student 7", mark: 60 },
        { id: 8, name: "Student 8", mark: 84 },
        { id: 9, name: "Student 9", mark: 59 },
        { id: 10, name: "Student 10", mark: 33 },
    ];

    return (
        <div className='flex flex-col items-center my-20'>
            <h3 className='text-3xl font-bold mb-10'>Line Chart of 10 Student Marks</h3>
            <LChart width={700} height={400} data={studentMarks}>
                <Line type="monotone" dataKey="mark" stroke="#272727"></Line>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LChart>
        </div>

    );
};

export default LineChart;