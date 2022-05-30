import React from 'react';
import { Link } from 'react-router-dom';
import "./OurTeam.css"
const OurTeam = () => {
    return (
        <div>
            <div className="about-header d-flex justify-content-center align-items-center flex-column">
                <h1 className="title"> Our Team </h1>
                <h2 > What we do at <span className='titlein'>HSTU' blood Share ?</span> </h2>
            </div>

            <section className=" w-75 m-auto pt-1 pb-5 my-5">
                <div className="mt-5 we">
                    <div className="about-col">
                        <h1>Donate Blood Save Life - We Need Your Help Together</h1>
                        <p className="pt-3">
                            Every day blood transfusions take place that saves lives of many people all over the world. About 5 million Americans need a blood transfusion. Donating blood is good for the health of donors as well as those who need it. It is important that blood donation takes place in a hospital, a clinic or a blood bank, in the presence of medical experts. Donors should ensure that they are in good health to avoid any health issues post-transfusion to those who use it.
                            <br /><br />
                            Donating blood can help in treating patients suffering from cancer, bleeding disorders, chronic anemia associated with cancer, sickle cell anemia, and other hereditary blood abnormalities. It is important to know that human blood cannot be manufactured, people are the only source of it and that is why it is important to donate blood and help those who need it. It is also possible to store your own blood for your future needs. Make sure the blood is stored at a good blood bank.
                            <br /><br />
                            A mini health exam that includes a checklist for diseases related to blood pressure and infectious diseases should be conducted before initiating the collection of blood. Those who have medical conditions such as AIDS and hepatitis should not donate blood. People who have taken vaccinations or have undergone any surgery or have cancer, diabetes, cold, and flu should consult health experts before donating blood. Pregnant women should seek expert advice before donating blood.</p>
                        <Link className="btn btn-outline-primary w-100" to="/">Explore now</Link>
                    </div>
                    <div className="team-m">
                        <div>
                            <img width="100%" src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="" />
                            <div>
                                <p>Mr. XYZ </p>
                                <p>President </p>
                                <p>HSTU Blood Share</p>
                            </div>
                        </div>
                        <div>
                            <img width="100%" src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="" />
                            <div>
                                <p>Mr. ABC </p>
                                <p>Vice President</p>
                                <p>HSTU Blood Share</p>
                            </div>
                        </div>
                        <div>
                            <img width="100%" src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="" />
                            <div>
                                <p>Mst. MNO</p>
                                <p>Secretary </p>
                                <p>HSTU Blood Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;