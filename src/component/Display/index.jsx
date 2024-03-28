import {useCalcContext} from "../../context/calcContext.jsx";
function Display() {

    const {state} = useCalcContext()

    return (
        <div>
            {state.result}
        </div>
    )
}



export default Display