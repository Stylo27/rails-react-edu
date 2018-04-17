class RecordFormView extends React.Component {
  render(){
    return(
     <form className="form-inline" onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <input type="text" name="date" className="form-control" placeholder="Date" value={this.props.date} onChange={this.props.handleChange}/>
        </div>
        <div className="form-group">
          <input type="text" name="title" className="form-control" placeholder="Title" value={this.props.title} onChange={this.props.handleChange}/>
        </div>
        <div className="form-group">
          <input type="number" name="amount" className="form-control" placeholder="Amount" value={this.props.amount} onChange={this.props.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.props.valid}>Create record</button>
      </form>
    )
  }
}