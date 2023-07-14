import Child from "./Child";
import Parent from "./Parent";

const ParentChild = () => {
    return ( <div>
        <Parent>
            <Child />
        </Parent>
    </div> );
}
 
export default ParentChild;