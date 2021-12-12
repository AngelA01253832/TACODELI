import React from "react";
import "../css/Pagination.css"
export default function Pagination({postsPerPage,totalPosts,paginate}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div className="pagination">
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href={() => false} className="page-link">
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}