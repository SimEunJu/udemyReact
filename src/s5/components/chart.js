import React from 'react';
import {Sparklines, SparklinesLine SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  avg(data){
    return _.round(_.sum(data)/data.length);
  }
  return (
    <div>
      <Sparklines height={120} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{avg(props.data)}{props.unit}</div>
    </div>
  );
}
