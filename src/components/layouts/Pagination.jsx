import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const Pagination = ({pages,todo}) => {
  let p = pages();

  return (
    <MDBRow>
      <MDBCol className="elegant-color-dark mt-5">  
        <MDBPagination circle>
          {
            Object.entries(todo).map((t,i)=>{
              if(i >=p){
                return(
                  ''
                )
              }
              else{
                return(
                  <>
                  <MDBPageItem >
                  <MDBPageNav className="page-link bg-warning">
                    {++i}
                  </MDBPageNav>
                   </MDBPageItem>
                  </>
                )
              }
            })
          }                                                 
        </MDBPagination>
      </MDBCol>
    </MDBRow>
    )
}

export default Pagination;