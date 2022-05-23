import React from 'react';
import "./Testimonials.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';


const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <BsArrowLeft style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <BsArrowRight style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};

const Testimonials = () => {
    return (
        <div
            className="testimonial"
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
            <div style={{ width: "50%", textAlign: "center" }}>
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="images/fakeFeMale.jpg" text="Blood is essential to help patients survive surgeries, cancer treatment, chronic illnesses, and traumatic injuries. This lifesaving care starts with one person making a generous donation. The need for blood is constant. But only about 3% of age-eligible people donate blood yearly." name="EVA" department="CSE"/>

                    <Card img="images/fakeMale.jpeg" text="A blood transfusion is when a donor's blood is transferred to a patient. The blood is transferred into the patient's body through a vein. A blood transfusion can make up for the loss of blood. Blood transfusions save lives every day."name="IMRAN" department="CSE"/>

                    <Card img="images/fakeFeMale.jpg" text="Every two seconds, someone in the U.S. requires a blood transfusion, according to the American Red Cross. The benefits of donating blood include helping people injured in accidents, undergoing cancer treatment, and battling blood diseases, among other reasons."name="RIFA" department="ECE"/>

                    <Card img="images/fakeMale.jpeg" text="You might not realize it, but by donating blood, you're essentially giving the gift of life to someone in need in your community. Blood donations are constantly needed to ensure that there's an ample fresh supply on hand to provide for those who need blood transfusions because of illness or injury."name="SADIK" department="EEE"/>

                    <Card img="images/fakeFeMale.jpg" text="Type O negative red blood cells are considered the safest to give to anyone in a life-threatening emergency or when there's a limited supply of the exact matching blood type. That's because type O negative blood cells don't have antibodies to A, B or Rh antigens."name="LUMA" department="CSE"/>

                    <Card img="images/fakeMale.jpeg" text="Blood donation is safe for healthy adults. There's no risk of contracting disease. New, sterile equipment is used for each donor. Some people may feel nauseous, lightheaded, or dizzy after donating blood."name="MANIK" department="ECE"/>

                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img,text,name,department }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
            }}
        >
            <img
                imgProps={{ style: { borderRadius: "50%" } }}
                alt="img-client"
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: ".1px solid #fff",
                    marginBottom: 20,
                }}
            />
            <p className="text-light">
                {text}
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
                {department}
            </p>
        </div>
    );
};


export default Testimonials;