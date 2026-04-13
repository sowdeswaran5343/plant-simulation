import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";

export default function Chart({data}){

if(!data || data.length===0) return null;

return(

<div style={{width:"80%",height:350}}>

<ResponsiveContainer>
<LineChart data={data}>
<CartesianGrid 
stroke="#ffffff" 
strokeOpacity={0.6}
/>

<XAxis
dataKey="day"
stroke="#ffffff"
tick={{ fill: "#ffffff", fontSize: 12 }}
axisLine={{ stroke: "#ffffff", strokeWidth: 2 }}
tickLine={{ stroke: "#ffffff" }}
/>

<YAxis
stroke="#ffffff"
tick={{ fill: "#ffffff", fontSize: 12 }}
axisLine={{ stroke: "#ffffff", strokeWidth: 2 }}
tickLine={{ stroke: "#ffffff" }}
/>


<Tooltip />

<Line
type="monotone"
dataKey="growth"
stroke="#2196f3"
strokeWidth={3}
dot={{r:5}}
isAnimationActive={true}
/>

</LineChart>
</ResponsiveContainer>

</div>

);

}