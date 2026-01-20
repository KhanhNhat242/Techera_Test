import mainlogo from '../../assets/mainlogo.png'
import searchicon from '../../assets/searchicon.png'
import homeright from '../../assets/home_right.png'
import staricon from '../../assets/star.png'
import straightquote from '../../assets/straight-quotes.png'
import collapse from '../../assets/navcollapseicon.png'
import { useState } from 'react'
import GlareHover from '@/components/ui/GlareHover'

const General = () => {
    const [isNav, setIsNav] = useState<boolean>(false)

    const scrollToSection = (id: string) => {
        setIsNav(false)
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            })
        }
    }

    return (
        <div className='bg-(--light-color) w-full flex flex-col items-center'>
            <div className='w-full flex flex-row justify-center'>
                <div className='bg-[white] w-[90vw] lg:w-[80vw] flex flex-row justify-between items-center mt-[30px] lg:mt-[50px] rounded-[10px]'>
                    <img src={mainlogo} alt="main-logo" className='rounded-[10px]' />
                    <img src={collapse} alt="collapse-icon" className='w-[3rem] rounded-[10px] mr-[10px] lg:hidden' onClick={() => setIsNav(!isNav)} />
                    <div className='hidden lg:flex lg:flex-row'>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)' onClick={() => scrollToSection('home')}>Trang chủ</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)' onClick={() => scrollToSection('about')}>Về chúng tôi</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)' onClick={() => scrollToSection('solution')}>Giải pháp</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)' onClick={() => scrollToSection('partnership')}>Đối tác</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)' onClick={() => scrollToSection('contact')}>Liên hệ</p>
                    </div>
                    <img src={searchicon} alt="search-icon" className='hidden lg:block pr-[40px] cursor-pointer' />
                    <div
                        className={`
                            flex flex-col items-end fixed top-[6.8rem] right-[5vw] w-[90vw] bg-white p-4 z-50
                            transition-all duration-300 lg:hidden
                            ${isNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
                        `}
                        >
                        <p onClick={() => scrollToSection('home')} className='mobile-nav py-[3px]'>Trang chủ</p>
                        <p onClick={() => scrollToSection('about')} className='mobile-nav py-[3px]'>Về chúng tôi</p>
                        <p onClick={() => scrollToSection('solution')} className='mobile-nav py-[3px]'>Giải pháp</p>
                        <p onClick={() => scrollToSection('partnership')} className='mobile-nav py-[3px]'>Đối tác</p>
                        <p onClick={() => scrollToSection('contact')} className='mobile-nav py-[3px]'>Liên hệ</p>

                        <img src={searchicon} className='mt-4 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center lg:flex-row justify-end lg:mt-[50px]'>
                <div className='w-[90vw] lg:w-[35%]'>
                    <h1 className='text-(--dark-color) text-[40px] text-justify font-bold leading-[1.2] mt-[20px] lg:mt-[5rem]'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#F28C28] via-[#FDAE42] to-[#FFB347] mr-[5px]'>TECHERA</span> 
                        - Giải pháp công nghệ booking & bán vé du lịch
                    </h1>
                    <p className='text-[20px] text-justify my-[10px] lg:my-[20px] text-(--txt-color)'>Nền tảng công nghệ kết nối trực tiếp với các khu vui chơi, điểm tham quan và đối tác du lịch lớn,
                        giúp doanh nghiệp và khách hàng đặt vé nhanh chóng, thuận tiện.
                    </p>
                    <button className='p-[10px] rounded-[5px] text-[#fff] bg-gradient-to-r from-[#0B1C4D] to-[#1E40AF] cursor-pointer'>Liên hệ ngay</button>
                    <div className='w-[90vw] lg:w-[70%] flex flex-col bg-[#fff] rounded-[10px] mt-[20px] p-[15px]' style={{borderLeftColor: '#22D3EE', borderLeftStyle: 'solid', borderLeftWidth: '5px'}}>
                        <div className='w-full flex flex-row justify-between items-center pt-[10px]'>
                            <img src={straightquote} alt="straight-quotes" />
                            <div className='flex flex-row items-center'>
                                <img src={staricon} alt="star-icon" />
                                <h5 className='font-bold'>4.9</h5>
                            </div>
                        </div>
                        <p className='text-(--txt-color)'>Đội ngũ Techera có tư duy công nghệ tốt, quy trình làm việc rõ ràng và khả năng tích hợp hệ thống linh hoạt —
                            <span className='font-bold'>Đối tác triển khai.</span></p>
                    </div>
                </div>
                <GlareHover
                    className='w-[90vw] lg:w-[55%] border-none'
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <img src={homeright} alt="home-right-img" className='w-full' />
                </GlareHover>
            </div>
        </div>
    )
}

export default General
