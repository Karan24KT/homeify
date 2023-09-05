import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Listing.css";
import { FaBed, FaBath , FaCar , FaHome , FaRupeeSign , FaChair , FaLocationArrow} from "react-icons/fa";
const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card category-link mb-2" style={{ width: "800px" }}>
          <Link to={`/category/${listing.type}/${id}`}>
            <div className="row container p-2 ">
              <div className="col-md-5 spacing">
                <img 
                  src={listing.imgUrls[0]}
                  className="img-thumbnail listing-img"
                  alt={listing.name}
                  height={200}
                  width={300}
                />
              </div>
              <div className="col-md-5">
                <br />
                <h2>"{listing.name}"</h2>
                <br />
                <p><FaLocationArrow />  &nbsp; Location ~ {listing.address}</p>
                <p><FaRupeeSign /> &nbsp; 
                  RS :{" "}
                  {listing.offer
                    ? listing.discountedPrice
                    : listing.regularPrice}{" "}
                  {listing.type === "rent" && " / Month"}
                </p>
                <p>
                <FaHome /> &nbsp;  Flat Size ~ {listing.flatSize
 + " BHK "} 
                </p>
                <p>
                  <FaBed /> &nbsp;
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Bedrooms`
                    : "1 Bedroom"}
                </p>
                <p>
                  <FaBath /> &nbsp;
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Bathrooms`
                    : "1 Bathroom"}
                </p>
                <p>

                <FaCar/> &nbsp; {listing.parking ? "Parking Available" : "Parking Not Available"}
                </p>
<p>

                <FaChair/> &nbsp; {listing.furnished ? "Furnished House" : "No Furnishing"}
</p>
<br />
              </div>
            </div>
          </Link>
          <div>
            {onDelete && (
              <button style={{float:"right"}}
                className="btn btn-danger m-4 px-4"
                onClick={() => onDelete(listing.id)}
              >
                Delete Listing
              </button>
            )}
            {onEdit && (
              <button style={{float:"right"}}
                className="btn btn-success  m-4  px-4"
                onClick={() => onEdit(listing.id)}
              >
                Edit Listing
              </button>
            )}
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default ListingItem;
