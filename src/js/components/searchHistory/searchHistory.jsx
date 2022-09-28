import React from 'react';

export default class SearchHistory extends React.Component {
  //   constructor(props) {
	// 	super(props);
	// }
    
    render() {
      //const { history } = this.props;
      const { history } = this.props;
      console.log("10", history);
        return (
<div className='col-12 col-md-6 mb-4'>
          <div className="card">
              <div className="card-header">
                Search History
              </div>
              <div className="card-body">
                <table className="table table-striped">
                <tbody> 
                {
                history.map((item, i)=> {
                  return <tr key={i}>
                    <td>
                      {item.cityName}
                      {item.date.toString()}
                    </td>
                  </tr>
                })
              }
                {/* <tr>
                  <td>City</td>
                  <td className='text-end'>Date Time</td>
                </tr> */}
                </tbody>
                </table>
              </div>
          </div>
          </div>
        )}
        }