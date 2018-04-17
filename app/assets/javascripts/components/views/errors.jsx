class Errors extends React.Component{
  render(){
    var errorsObj = this.props.errors
    return(<div className="alert alert-danger"><strong>Alert!: </strong>{Object.keys(errorsObj)}field {Object.values(errorsObj)}</div>)
  }
}