const Loading = ({isLoading})=>{
return(
    <div className={isLoading? "visible" : "hidden"}>
        <h1>Loading...</h1>
    </div>
)
}
export default Loading