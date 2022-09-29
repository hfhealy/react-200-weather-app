import React from 'react';

export default class SearchHistory extends React.Component {
    
    render() {
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
                    </td>
                    <td>
                      <p className='mb-0'>{item.date}</p>
                      <p className='mb-0'>{item.time}</p>
                    </td>
                  </tr>
                })
              }
                </tbody>
                </table>
              </div>
          </div>
        </div>
        )}
        }