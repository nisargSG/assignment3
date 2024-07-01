export default function Card(props){


    const divStyle = {
        backgroundColor:"orange",
        color:"white",
        border:"1px solid black",
        padding:"1 rem"
    }

    return (

        <div style={divStyle}>
            <p>{props.id}  {props.title}</p>

        </div>

    )
}