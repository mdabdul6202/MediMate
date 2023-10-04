import DoctorCard from './../../components/Doctors/DoctorCard';
import Testimonial from '../../components/Testimonial/Testimonial'
// import { doctors } from './../../assets/data/doctors';
import { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctorData, setdoctorData] = useState([])
    const [doctors, setdoctors] = useState([])

    const handleQuery = async (e) => {
        var query = e.target.value

        if (query != "") {
            var result = await fetch(`https://medimate-qdye.onrender.com/api/v1/doctors?query=${query}`, {
                method: "GET"
            }).then((res) => { return res.json() })

            setdoctorData(result.data)
        } else {
            setdoctorData([])
        }
    }

    useEffect(() => {
        const fetchingDoctors = async () => {
            var result = await fetch(`https://medimate-qdye.onrender.com/api/v1/doctors`, {
                method: "GET"
            }).then((res) => { return res.json() })

            setdoctors(result.data)
        }

        fetchingDoctors()
    }, [])

    return (
        <>
            <section className='bg-[#fff9ea] flex justify-center items-center py-6'>
                <div className='container text-center'>
                    <h2 className='heading font-bold text-3xl'>Find a Doctor</h2>
                    <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                        <input type="search" onChange={handleQuery} className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Doctor' />
                        <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {doctorData.map((doctor) => (
                            <DoctorCard key={doctor._id} doctor={doctor} />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {doctors.map(doctor => (
                            <DoctorCard key={doctor._id} doctor={doctor} />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='xl:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>What our patients say</h2>
                        <p className='text__para text-center'>World Class Care for Everyone. Our health system offers unmatched, expert health care.</p>
                    </div>

                    <Testimonial />
                </div>
            </section>
        </>
    )
}

export default Doctors
