import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Student 1", physics: 85, chemistry: 90, math: 78 },
        { id: 2, name: "Student 2", physics: 34, chemistry: 88, math: 46 },
        { id: 3, name: "Student 3", physics: 78, chemistry: 45, math: 76 },
        { id: 4, name: "Student 4", physics: 67, chemistry: 92, math: 35 },
        { id: 5, name: "Student 5", physics: 95, chemistry: 89, math: 91 },
        { id: 6, name: "Student 6", physics: 88, chemistry: 75, math: 80 },
        { id: 7, name: "Student 7", physics: 90, chemistry: 94, math: 79 },
        { id: 8, name: "Student 8", physics: 56, chemistry: 87, math: 82 },
        { id: 9, name: "Student 9", physics: 89, chemistry: 91, math: 90 },
        { id: 10, name: "Student 10", physics: 93, chemistry: 36, math: 54 },
    ];

    return (
            <div className='flex flex-col items-center my-20'>
                <h3 className='text-3xl font-bold mb-10'>Line Chart of 10 Student Marks</h3>
                <LChart width={700} height={400} data={studentMarks}>
                    <Line type="monotone" dataKey="math" stroke="blue"></Line>
                    <Line dataKey={'physics'} stroke="green" type={'monotone'}></Line>
                    <Line dataKey={'chemistry'} stroke="orange" type={'monotone'}></Line>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LChart>
            </div>
    );
};

export default LineChart;