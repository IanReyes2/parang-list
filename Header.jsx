import {data} from './data'
console.log(data);

const filter = data.filter((data)=> data.Professionofession === "The Red Comet");

console.log(filter);

const Header = () => {
  return (<div>
    {data.map((data, key)=>(
        <div>
        <li  key={key}> {data.Name}</li>
        <li  key={key}> {data.Profession}</li>
        <li  key={key}> {data.ID}</li>
        </div>



))}
</div>
)
}

export default Header