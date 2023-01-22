import React, { Fragment } from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    <>
    {listx.map((i,index) => {
      return(
        <Fragment key={index}>
          <ListItems valuex={i} />
        </Fragment>
        )
    })}
    </>
  )
}

export default List;