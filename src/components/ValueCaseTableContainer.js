import React from "react";
import {Table} from 'semantic-ui-react'
const vC = {
  valuecase: [
    {
      id: 101,
      name: "Cost and Time Reduction in Job Definition",
      metrics: [
        {
          id: 1,
          name: "Number of Jobs per Year"
        },
        {
          id: 2,
          name: "Number of Jobs chnages per Year"
        },
        {
          id: 3,
          name: "Number of Jobs deletions per Year"
        }
      ]
    }
  ]
};
export default class ValueCaseTableContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      valueCase: vC,
      numberOfYears: 3
    };
  }
  render() {
      const { numberOfYears} = this.state;
    return (
        <Table celled>
            {
                <Table.
                numberOfYears.map(year => return <)
            }
        </Table>
    )
  }
}
