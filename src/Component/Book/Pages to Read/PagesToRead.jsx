import { BarChart, Bar, XAxis, YAxis,Tooltip,ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
    const Data =[
        { BookName:'Catcher ',  PageNumber:30},
        { BookName:'Anna  ',PageNumber:250},
        { BookName:'Madame ' , PageNumber:276},
        { BookName:'WarPeace ' ,PageNumber:278},
        { BookName:'The Great ' , PageNumber:298},
        { BookName:'Lolita ' ,PageNumber:358},
        { BookName:'MiddleMarch',PageNumber:485},
        { BookName:'The Adventures  ' , PageNumber:589},
        { BookName:'The Stories '  , PageNumber:436},
        { BookName:'Lost Time', PageNumber:585}
    ]
    return (
        <div className='container mx-auto lg:w-[1100px] lg:[500px] pb-8'  style={{ width: '100%', height: 300 }}>
            <h1 className='text-3xl text-center font-bold text-amber-700 mt-4 mb-4'>Book Page Chart</h1>
            <ResponsiveContainer  >
            <BarChart data={Data} className='fixed'>
                <XAxis dataKey="BookName"></XAxis>
                <YAxis dataKey="PageNumber"></YAxis>
                <Tooltip/>
              
                <Bar type='BookName' dataKey="PageNumber" fill='#8884d8' 
                 >

                </Bar>

            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;