import React, { Fragment } from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    <div>
    {listx.map((i,index) => {
      return(
        <Fragment key={index}>
          <ListItems valuex={i} />
        </Fragment>
        )
    })}
    </div>
  )
}

export default List;