interface Task {
    name: string;
    skills: string[];
    time: string;
    deadline: string;
    wage: number;
    active: boolean;
    eligible: boolean;
}

const Template: React.FC<Task> =  ({
    name,
    skills,
    time,
    deadline,
    wage,
    active,
    eligible
}) => {

    return ( 
        <div className={"p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" + (active == true ? " bg-card-red" : " ") + (eligible == true ? " bg-card-blue": " ")}>
          <h3 className="text-xl font-bold text-yellow-400">{name}</h3>

          <div className="mt-2 flex flex-wrap gap-2">
            {(skills.length > 3) ? (
                <div>
                    {skills.slice(0,3).map((i) => <span className="bg-yellow-400 text-gray-800 text-xs font-semibold mr-2 px-2 py-1 rounded-full">{i}</span>)}
                    <span className="bg-yellow-400 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full ">+{skills.length - 3}</span>
                </div>
              
            ) : (
                <div>
                    {skills.map((i) => <span className="bg-yellow-400 text-gray-800 text-xs font-semibold px-2 mr-2 py-1 rounded-full">{i}</span>)}
                </div>
            )}
          </div>

          <div className={"mt-4 text-gray-400" + (active == true ? " text-white" : " ") + (eligible == true ? " text-black" : " ")}>
            <p><strong>Time Required:</strong> {time}</p>
            <p><strong>Deadline:</strong> {deadline}</p>
            <p><strong>Hourly Wage:</strong> ${wage}/hr</p>
          </div>
        </div>
    )
} 

export default Template;