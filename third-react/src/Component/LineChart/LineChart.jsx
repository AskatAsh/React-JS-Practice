import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    return (
        <div>
            <LChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;