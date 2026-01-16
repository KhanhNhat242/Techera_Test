import mainlogo from '../../assets/mainlogo.png'
import searchicon from '../../assets/searchicon.png'
import homeright from '../../assets/home_right.png'
import staricon from '../../assets/star.png'
import straightquote from '../../assets/straight-quotes.png'


const General = () => {
    return (
        <div className='bg-(--light-color) w-full flex flex-col items-center'>
            <div className='w-full flex flex-row justify-center'>
                <div className='bg-[white] w-[80%] flex flex-row justify-between items-center mt-[50px] rounded-[10px]'>
                    <img src={mainlogo} alt="main-logo" className='rounded-[10px]' />
                    <div className='flex flex-row'>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)'>Trang chủ</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)'>Về chúng tôi</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)'>Giải pháp</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)'>Đối tác</p>
                        <p className='px-[8px] font-medium text-(--txt-color) cursor-pointer hover:text-(--primary-color)'>Liên hệ</p>
                    </div>
                    <img src={searchicon} alt="search-icon" className='pr-[40px] cursor-pointer' />
                </div>
            </div>
            <div className='w-full flex flex-row justify-end mt-[50px]'>
                <div className='w-[35%]'>
                    <h1 className='text-(--dark-color) text-[40px] font-bold leading-[1.2] mt-[5rem]'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#F28C28] via-[#FDAE42] to-[#FFB347] mr-[5px]'>TECHERA</span> 
                        - Giải pháp công nghệ booking & bán vé du lịch
                    </h1>
                    <p className='text-[20px] my-[20px] text-(--txt-color)'>Nền tảng công nghệ kết nối trực tiếp với các khu vui chơi, điểm tham quan và đối tác du lịch lớn,
                        giúp doanh nghiệp và khách hàng đặt vé nhanh chóng, thuận tiện.
                    </p>
                    <button className='p-[10px] rounded-[5px] text-[#fff] bg-gradient-to-r from-[#0B1C4D] to-[#1E40AF] cursor-pointer'>Liên hệ ngay</button>
                    <div className='w-[70%] flex flex-col bg-[#fff] rounded-[10px] mt-[20px] p-[15px]' style={{borderLeftColor: '#22D3EE', borderLeftStyle: 'solid', borderLeftWidth: '5px'}}>
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
                <img src={homeright} alt="home-right-img" className='w-[55%]' />
            </div>
        </div>
    )
}

export default General
