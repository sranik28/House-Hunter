import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useOwner from "../../../hooks/useOwner";
import { AuthContext } from "../../../providers/AuthProvider";
import "../../../components/Style/HouseList.css";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [seachText, setsearchText] = useState("");
  const [city, setCity] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [availability, setAvailability] = useState("");
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // get user booking house
  useEffect(() => {
    axios.get(`https://house-hunter-backend-caxj15ubr-sranik28.vercel.app/mybooking/${user?.email}`).then(
      (res) => {
        setBooking(res.data);
      },
      [user]
    );
  });

  //   handler for searching
  const handleSearchText = () => {
    fetch(`https://house-hunter-backend-caxj15ubr-sranik28.vercel.app/housesearch/${seachText}`)
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
      });
  };
  //   "Enter" key press to search"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchText();
    }
  };

  // filter by user preferences.
  useEffect(() => {
    axios
      .get(
        `https://house-hunter-backend-caxj15ubr-sranik28.vercel.app/houses?city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&room_size=${roomSize}&availability_date=${availability}&minRent=${minRent}&maxRent=${maxRent}&page=${currentPage}`
      )
      .then((res) => {
        setTotalPages(res.data.totalPages);
        setHouses(res.data.result);
      });
  }, [
    city,
    bedrooms,
    bathrooms,
    roomSize,
    availability,
    minRent,
    maxRent,
    currentPage,
  ]);

  //  Change by pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  //   Check House Owner
  const [isOwner] = useOwner();

  //   Booking
  const handleBooking = () => {
    if (!user) {
      Swal.fire({
        title: "Please Login to booking the apartment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <div className="max-w-[1240px] lg:mx-auto mx-4 mt-14">
        <div className="flex items-center lg:w-full w-full">
          <input
            onChange={(e) => setsearchText(e.target.value)}
            onKeyDown={handleKeyPress}
            type="text"
            className="w-full border text-black p-2 lg:p-3 rounded-l-md focus:outline-none"
            placeholder="Search House"
          />

          <button
            onClick={handleSearchText}
            type="submit"
            className="bg-primary text-white px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
          >
            Search
          </button>
        </div>
        <div className="lg:flex justify-between items-center py-14">
          <div className="lg:py-0 py-4">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="select select-success w-full max-w-xs"
            >
              <option value="" disabled>
                Choose City
              </option>
              <option value="Pabna">Pabna</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Barishal">Barishal</option>
            </select>
          </div>
          <div className="lg:py-0 py-4">
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="select select-success w-full max-w-xs"
            >
              <option disabled value="">
                Select Bedrooms
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="lg:py-0 py-4">
            <select
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="select select-success w-full max-w-xs"
            >
              <option disabled value="">
                Select Bathroom
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="lg:py-0 py-4">
            <select
              value={roomSize}
              onChange={(e) => setRoomSize(e.target.value)}
              className="select select-success w-full max-w-xs"
            >
              <option disabled value="">
                Select Room Size
              </option>
              <option value="600 sq ft">600 sq ft</option>
              <option value="700 sq ft">700 sq ft</option>
              <option value="800 sq ft">800 sq ft</option>
              <option value="900 sq ft">900 sq ft</option>
              <option value="1000 sq ft">1000 sq ft</option>
              <option value="1000 sq ft">1200 sq ft</option>
              <option value="1000 sq ft">1300 sq ft</option>
              <option value="1000 sq ft">1400 sq ft</option>
            </select>
          </div>
          <div className="lg:py-0 py-4">
            <input
              type="date"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="select select-success w-full max-w-xs"
            ></input>
          </div>
          <div>
            <p className="text-xl font-semibold">${maxRent ? maxRent : "0"}</p>
            <input
              type="range"
              min="0"
              max="2000"
              value={maxRent}
              onChange={(e) => setMaxRent(parseInt(e.target.value))}
              className="range range-success"
            />
          </div>
        </div>

        <div className="grid gap-6 mb-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
          {houses.map((house) => (
            <div key={house._id}>
              <div className="card-container">
                <div className="card">
                  <div className="img-content">
                    <img src={house.picture} alt="" />
                    
                  </div>
                  <div className="content">
                  <p className="text-lg font-bold">{house.house_name}</p>
                    <p className="font-bold">
                      Address:{" "}
                      <span className="font-semibold ">{house.address}</span>
                    </p>
                    <p className="font-bold">
                      City: <span className="font-semibold">{house.city}</span>
                    </p>
                    <p className="font-bold">
                      Bedrooms:{" "}
                      <span className="font-semibold">{house.bedrooms}</span>
                    </p>
                    <p className="font-bold">
                      Room Size:{" "}
                      <span className="font-semibold">{house.room_size}</span>
                    </p>
                    <p className="font-bold">
                      Availability Date:{" "}
                      <span className="font-semibold">
                        {house.availability_date}
                      </span>
                    </p>
                    <p className="font-bold">
                      Phone Number:{" "}
                      <span className="font-semibold">
                        {house.phone_number}
                      </span>
                    </p>
                    <p className="font-bold">
                      Description:{" "}
                      <span className="font-semibold">{house.description}</span>
                    </p>
                    
                    <p className="mb-10 font-bold">
                      Rent per month:{" "}
                      <span className="font-semibold text-xl ">
                        ${house.rent_per_month}
                      </span>
                    </p>
                    <Link to={user && `/booking/${house._id}`}>
                      <button
                        onClick={handleBooking}
                        disabled={isOwner || booking?.length >= 2}
                        className="btn bg-primary border-0 left-[25%] absolute bottom-3 mx-auto w-2/4 "
                      >
                        Book House
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="text-center mb-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              className={`bg-slate-800 px-3 py-1  mx-2 rounded-md font-semibold text-md text-white ${
                page == currentPage ? "bg-yellow-600" : ""
              }`}
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        {/* <div>
          <div className="card-container">
            <div className="card">
              <div className="img-content">
                <img
                  src="https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="content">
                <p className="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
                  mollitia pariatur odit, ab minus ratione adipisci accusamus
                  vel est excepturi laboriosam magnam necessitatibus dignissimos
                  molestias.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Houses;

{
  /* <div key={house._id}>
              <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
                <img
                  src={house.picture}
                  alt="house cover"
                  className="object-cover w-full "
                  style={{ height: "430px" }}
                />
                <div className="bg-black h-full px-6 py-4 bg-opacity-80 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col">
                  <p className="font-semibold text-2xl">{house.house_name}</p>
                  <br />
                  <p>
                    Address:{" "}
                    <span className="font-semibold">{house.address}</span>
                  </p>
                  <p>
                    City: <span className="font-semibold">{house.city}</span>
                  </p>
                  <p>
                    Bedrooms:{" "}
                    <span className="font-semibold">{house.bedrooms}</span>
                  </p>
                  <p>
                    Bathrooms:{" "}
                    <span className="font-semibold">{house.bathrooms}</span>
                  </p>
                  <p>
                    Room Size:{" "}
                    <span className="font-semibold">{house.room_size}</span>
                  </p>
                  <p>
                    Availability Date:{" "}
                    <span className="font-semibold">
                      {house.availability_date}
                    </span>
                  </p>
                  <p>
                    Phone Number:{" "}
                    <span className="font-semibold">{house.phone_number}</span>
                  </p>
                  <p>
                    Description:{" "}
                    <span className="font-semibold">{house.description}</span>
                  </p>
                  <br />
                  <p>
                    Rent per month:{" "}
                    <span className="font-semibold text-xl">
                      ${house.rent_per_month}
                    </span>
                  </p>
                  <Link to={user && `/booking/${house._id}`}>
                    <button
                      onClick={handleBooking}
                      disabled={isOwner || booking?.length >= 2}
                      className="btn bg-primary border-0 absolute bottom-5 w-2/4 "
                    >
                      Book House
                    </button>
                  </Link>
                </div>
              </div>
            </div> */
}
