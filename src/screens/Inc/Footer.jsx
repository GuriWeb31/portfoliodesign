import React from 'react'
// import facebook from '../../assets/images/facebook.svg';
// import insta from '../../assets/images/insta.svg';
// import linkedin from '../../assets/images/linkedin.svg';

const Footer = () => {
  return (
    <div className='xl:w-11/12 m-auto  bg-white rounded-[32px] mt-12 pb-5 p-10 mb-3'>
      <div className='grid xl:grid-cols-6 '>
        <div className='col-span-2'>
           <p className='text-[32px] font-semibold uppercase'>TrendLoom</p>
           <p className='mt-2'>Seamless transaction, personalized insights, and <br></br>innovative solutions for a smaster tommorow </p>
           <div className='flex gap-3 mt-4'>
            {/* <div><img src={facebook} alt='' className='w-[36px] hover:scale-110 duration-200 hover:shadow-lg rounded-full'/></div>
            <div><img src={insta} alt='' className='w-[36px] hover:scale-110 duration-200 hover:shadow-lg rounded-full'/></div>
            <div><img src={linkedin} alt='' className='w-[36px] hover:scale-110 duration-200 hover:shadow-lg rounded-full'/></div> */}
            
           </div>
        </div>
        <div>
          <h5 className='text-[20px] font-medium'>About</h5>
          <p className='leading-[36px]'>Company</p>
          <p className='leading-[36px]'>Leadership</p>
          <p className='leading-[36px]'>Press</p>
          <p className='leading-[36px]'>Careers</p>
        </div>
        <div>
          <h5 className='text-[20px] font-medium'>Help</h5>
          <p className='leading-[36px]'>Help Center</p>
          <p className='leading-[36px]'>Support Team</p>
          <p className='leading-[36px]'>Community</p>
          <p className='leading-[36px]'>FAQ</p>
        </div>
        <div>
          <h5 className='text-[20px] font-medium'>Menu</h5>
          <p className='leading-[36px]'>Men</p>
          <p className='leading-[36px]'>Women</p>
          <p className='leading-[36px]'>Children</p>
          <p className='leading-[36px]'>Popular  </p>
        </div>
        <div>
          <h5 className='text-[20px] font-medium'>Company</h5>
          <p className='leading-[36px]'>About Trendloom</p>
          <p className='leading-[36px]'>Contact</p>
          <p className='leading-[36px]'>News & Blogs</p>
          
        </div>
      </div>
      <hr className='mt-5 border-[#dfdddd]'></hr>
      <div className='flex justify-between'>
        <div><p className='mt-3'>Copyright@ 2025 Trendloom All Rights Reserved</p></div>
        <div><p className='mt-3'>Privacy Policy</p></div>
      </div>
    </div>
  )
}

export default Footer